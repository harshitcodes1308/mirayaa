"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { categories as fallbackCategories } from "@/lib/data";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function setupMessage(error: unknown) {
  const rawMessage = error instanceof Error ? error.message : String(error);
  const lowerMessage = rawMessage.toLowerCase();

  if (
    lowerMessage.includes("could not find the table") ||
    lowerMessage.includes("relation") ||
    lowerMessage.includes("schema cache") ||
    lowerMessage.includes("does not exist")
  ) {
    return "Supabase tables are missing. Run supabase/migrations/001_init.sql in Supabase SQL Editor, then run supabase/migrations/002_product_images_storage.sql.";
  }

  if (lowerMessage.includes("row-level security")) {
    return "Supabase blocked this save with row-level security. Add SUPABASE_SERVICE_ROLE_KEY in Vercel, or run the admin policies from the migrations.";
  }

  return rawMessage;
}

function errorRedirectPath(formData: FormData, message: string) {
  const id = String(formData.get("id") ?? "");
  const slug = String(formData.get("slug") ?? "").trim();
  const path = id && uuidPattern.test(id) ? `/admin/products/${id}` : slug ? `/admin/products/${slug}` : "/admin/products/new";

  return `${path}?error=${encodeURIComponent(message)}`;
}

async function getDbClient() {
  try {
    return createAdminClient();
  } catch {
    return createClient();
  }
}

async function ensureCategory(categorySlug: string) {
  const supabase = await getDbClient();
  const fallback = fallbackCategories.find((category) => category.slug === categorySlug) ?? fallbackCategories[0];

  const { data: existing } = await supabase.from("categories").select("id").eq("slug", fallback.slug).maybeSingle();

  if (existing?.id) {
    return existing.id as string;
  }

  const { data, error } = await supabase
    .from("categories")
    .insert({
      name: fallback.name,
      slug: fallback.slug,
      description: fallback.description,
      image_url: fallback.imageUrl,
      display_order: fallback.displayOrder,
      is_active: true
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data.id as string;
}

function readProductPayload(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim() || slugify(name);
  const description = String(formData.get("description") ?? "").trim();
  const category = String(formData.get("category") ?? fallbackCategories[0].slug);
  const tags = String(formData.get("tags") ?? "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  const images = formData.getAll("images").map(String).filter(Boolean);
  const status = String(formData.get("status") ?? "draft");

  if (!name) throw new Error("Product name is required.");
  if (!slug) throw new Error("Product slug is required.");
  if (!images.length) throw new Error("Upload at least one product image before saving.");

  return {
    name,
    slug,
    description,
    category,
    images,
    price: Number(formData.get("price") ?? 0),
    compare_price: formData.get("comparePrice") ? Number(formData.get("comparePrice")) : null,
    stock: Number(formData.get("stock") ?? 0),
    is_featured: formData.get("isFeatured") === "on",
    is_active: status === "publish",
    tags,
    material: String(formData.get("material") ?? "").trim() || null,
    weight_grams: formData.get("weightGrams") ? Number(formData.get("weightGrams")) : null
  };
}

async function revalidateCatalog() {
  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/admin");
  revalidatePath("/admin/products");
}

export async function saveProduct(formData: FormData) {
  try {
    const rawId = String(formData.get("id") ?? "");
    const id = uuidPattern.test(rawId) ? rawId : "";
    const payload = readProductPayload(formData);
    const supabase = await getDbClient();
    const categoryId = await ensureCategory(payload.category);

    const row = {
      name: payload.name,
      slug: payload.slug,
      description: payload.description,
      price: payload.price,
      compare_price: payload.compare_price,
      images: payload.images,
      category_id: categoryId,
      stock: payload.stock,
      is_active: payload.is_active,
      is_featured: payload.is_featured,
      tags: payload.tags,
      material: payload.material,
      weight_grams: payload.weight_grams,
      updated_at: new Date().toISOString()
    };

    const result = id
      ? await supabase.from("products").update(row).eq("id", id)
      : await supabase.from("products").insert(row);

    if (result.error) {
      throw new Error(result.error.message);
    }

    await revalidateCatalog();
    revalidatePath(`/product/${payload.slug}`);
  } catch (error) {
    redirect(errorRedirectPath(formData, setupMessage(error)));
  }

  redirect("/admin/products");
}
