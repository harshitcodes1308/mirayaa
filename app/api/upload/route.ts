import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

const bucket = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET ?? "product-images";
const maxFileSize = 5 * 1024 * 1024;
const hasServiceRoleKey = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);

function safeFileName(name: string) {
  const extension = name.split(".").pop()?.toLowerCase() ?? "jpg";
  const baseName = name
    .replace(/\.[^/.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);

  return `${baseName || "mirayaa-product"}-${crypto.randomUUID()}.${extension}`;
}

async function ensureBucket() {
  if (!hasServiceRoleKey) {
    return;
  }

  const supabaseAdmin = createAdminClient();
  const { data } = await supabaseAdmin.storage.getBucket(bucket);

  if (data) {
    return;
  }

  const { error } = await supabaseAdmin.storage.createBucket(bucket, {
    public: true,
    fileSizeLimit: maxFileSize,
    allowedMimeTypes: ["image/jpeg", "image/png", "image/webp", "image/gif"]
  });

  if (error && !error.message.toLowerCase().includes("already exists")) {
    throw error;
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const files = formData.getAll("files").filter((file): file is File => file instanceof File);

  if (!files.length) {
    return NextResponse.json({ message: "Add at least one image to upload." }, { status: 400 });
  }

  const invalidFile = files.find((file) => !file.type.startsWith("image/") || file.size > maxFileSize);

  if (invalidFile) {
    return NextResponse.json(
      { message: "Only image files up to 5MB can be uploaded." },
      { status: 400 }
    );
  }

  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ message: "Sign in to the admin dashboard before uploading images." }, { status: 401 });
  }

  try {
    await ensureBucket();
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Could not prepare the Supabase Storage bucket."
      },
      { status: 500 }
    );
  }

  const uploaded: { path: string; url: string }[] = [];

  for (const file of files) {
    const path = `products/${safeFileName(file.name)}`;
    const { error } = await supabase.storage.from(bucket).upload(path, file, {
      cacheControl: "31536000",
      contentType: file.type,
      upsert: false
    });

    if (error) {
      const message = error.message.toLowerCase().includes("bucket")
        ? `Supabase Storage bucket "${bucket}" is missing. Create it in Supabase Storage or add SUPABASE_SERVICE_ROLE_KEY in Vercel so the app can create it automatically.`
        : error.message;

      return NextResponse.json({ message }, { status: 500 });
    }

    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    uploaded.push({ path, url: data.publicUrl });
  }

  return NextResponse.json({ files: uploaded });
}
