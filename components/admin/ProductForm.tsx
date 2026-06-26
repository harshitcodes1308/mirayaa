import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { ProductImageUploader } from "@/components/admin/ProductImageUploader";
import { categories } from "@/lib/data";
import type { Product } from "@/types";

export function ProductForm({ product }: { product?: Product }) {
  return (
    <form className="grid gap-5 border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="grid gap-4 md:grid-cols-2">
        <Input defaultValue={product?.name} placeholder="Product name" />
        <Input defaultValue={product?.slug} placeholder="Slug" />
      </div>
      <Textarea defaultValue={product?.description} placeholder="Description" />
      <div className="grid gap-4 md:grid-cols-4">
        <Input defaultValue={product?.price} type="number" placeholder="Price" />
        <Input defaultValue={product?.comparePrice} type="number" placeholder="Compare price" />
        <Input defaultValue={product?.stock} type="number" placeholder="Stock" />
        <select className="h-12 rounded-[6px] border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--ivory)]">
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <ProductImageUploader defaultImages={product?.images} />
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="primary" type="button">Save & Publish</Button>
        <Button variant="ghost" type="button">Save as Draft</Button>
      </div>
    </form>
  );
}
