import { unstable_noStore as noStore } from "next/cache";
import { categories as fallbackCategories, products as fallbackProducts } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";
import type { Category, Product } from "@/types";

type CategoryRow = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  display_order: number | null;
};

type ProductRow = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number | string;
  compare_price: number | string | null;
  images: string[] | null;
  category_id: string | null;
  stock: number | null;
  is_active: boolean | null;
  is_featured: boolean | null;
  tags: string[] | null;
  material: string | null;
  weight_grams: number | string | null;
  categories?: Pick<CategoryRow, "slug"> | Pick<CategoryRow, "slug">[] | null;
};

function mapCategory(row: CategoryRow): Category {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description ?? "",
    imageUrl: row.image_url ?? fallbackCategories[0].imageUrl,
    displayOrder: row.display_order ?? 0
  };
}

function mapProduct(row: ProductRow): Product {
  const joinedCategory = Array.isArray(row.categories) ? row.categories[0] : row.categories;

  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description ?? "",
    price: Number(row.price),
    comparePrice: row.compare_price == null ? undefined : Number(row.compare_price),
    images: row.images?.length ? row.images : fallbackProducts[0].images,
    category: joinedCategory?.slug ?? fallbackCategories[0].slug,
    stock: row.stock ?? 0,
    isFeatured: Boolean(row.is_featured),
    tags: row.tags ?? [],
    material: row.material ?? "Fashion jewelry",
    weightGrams: row.weight_grams == null ? 0 : Number(row.weight_grams)
  };
}

async function readCategoriesFromSupabase() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("categories")
    .select("id,name,slug,description,image_url,display_order")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error || !data?.length) {
    return fallbackCategories;
  }

  return (data as CategoryRow[]).map(mapCategory);
}

async function readProductsFromSupabase({ includeDrafts = false } = {}) {
  const supabase = await createClient();
  let query = supabase
    .from("products")
    .select("id,name,slug,description,price,compare_price,images,category_id,stock,is_active,is_featured,tags,material,weight_grams,categories(slug)")
    .order("created_at", { ascending: false });

  if (!includeDrafts) {
    query = query.eq("is_active", true);
  }

  const { data, error } = await query;

  if (error || !data?.length) {
    return includeDrafts ? fallbackProducts : fallbackProducts.filter((product) => product.stock > 0);
  }

  return (data as unknown as ProductRow[]).map(mapProduct);
}

export async function getCatalogCategories() {
  noStore();
  return readCategoriesFromSupabase();
}

export async function getCatalogProducts(options?: { includeDrafts?: boolean }) {
  noStore();
  return readProductsFromSupabase(options);
}

export async function getCatalogProduct(slug: string) {
  noStore();
  const products = await readProductsFromSupabase({ includeDrafts: false });
  return products.find((product) => product.slug === slug);
}

export async function getAdminProduct(id: string) {
  noStore();
  const products = await readProductsFromSupabase({ includeDrafts: true });
  return products.find((product) => product.id === id);
}
