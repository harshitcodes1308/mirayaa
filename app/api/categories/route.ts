import { getCatalogCategories } from "@/lib/catalog";

export async function GET() {
  const categories = await getCatalogCategories();

  return Response.json({ categories });
}
