import { ProductForm } from "@/components/admin/ProductForm";
import { products } from "@/lib/data";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  return (
    <section>
      <h1 className="mb-8 font-display text-5xl tracking-[-0.02em]">Edit Product</h1>
      <ProductForm product={product} />
    </section>
  );
}
