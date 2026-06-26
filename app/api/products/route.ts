import { getCatalogProducts } from "@/lib/catalog";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const includeDrafts = url.searchParams.get("includeDrafts") === "true";
  const products = await getCatalogProducts({ includeDrafts });

  return Response.json({ products });
}
