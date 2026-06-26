import { ProductForm } from "@/components/admin/ProductForm";
import { getAdminProduct } from "@/lib/catalog";

export default async function EditProductPage({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { id } = await params;
  const { error } = await searchParams;
  const product = await getAdminProduct(id);

  return (
    <section>
      <h1 className="mb-8 font-display text-5xl tracking-[-0.02em]">Edit Product</h1>
      <ProductForm product={product} error={error} />
    </section>
  );
}
