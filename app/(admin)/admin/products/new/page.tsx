import { ProductForm } from "@/components/admin/ProductForm";

export default async function NewProductPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;

  return (
    <section>
      <h1 className="mb-8 font-display text-5xl tracking-[-0.02em]">Add Product</h1>
      <ProductForm error={error} />
    </section>
  );
}
