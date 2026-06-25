import { ProductForm } from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <section>
      <h1 className="mb-8 font-display text-5xl tracking-[-0.02em]">Add Product</h1>
      <ProductForm />
    </section>
  );
}
