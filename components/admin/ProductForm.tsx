import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { ProductImageUploader } from "@/components/admin/ProductImageUploader";
import { saveProduct } from "@/lib/admin/product-actions";
import { categories } from "@/lib/data";
import type { Product } from "@/types";

export function ProductForm({ product, error }: { product?: Product; error?: string }) {
  return (
    <form action={saveProduct} className="grid gap-5 border border-[var(--border)] bg-[var(--surface)] p-5">
      {product?.id ? <input type="hidden" name="id" value={product.id} /> : null}
      <div className="grid gap-4 md:grid-cols-2">
        <Input name="name" defaultValue={product?.name} placeholder="Product name" required />
        <Input name="slug" defaultValue={product?.slug} placeholder="Slug" />
      </div>
      <Textarea name="description" defaultValue={product?.description} placeholder="Description" />
      <div className="grid gap-4 md:grid-cols-4">
        <Input name="price" defaultValue={product?.price} type="number" min="0" step="1" placeholder="Price" required />
        <Input name="comparePrice" defaultValue={product?.comparePrice} type="number" min="0" step="1" placeholder="Compare price" />
        <Input name="stock" defaultValue={product?.stock} type="number" min="0" step="1" placeholder="Stock" />
        <select
          name="category"
          defaultValue={product?.category}
          className="h-12 rounded-[6px] border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--ivory)]"
        >
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_160px]">
        <Input name="material" defaultValue={product?.material} placeholder="Material" />
        <Input name="weightGrams" defaultValue={product?.weightGrams} type="number" min="0" step="0.1" placeholder="Weight grams" />
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <Input name="tags" defaultValue={product?.tags.join(", ")} placeholder="Tags, separated by commas" />
        <label className="flex h-12 items-center gap-2 rounded-[6px] border border-[var(--border)] px-4 text-sm text-[var(--champagne)]/75">
          <input name="isFeatured" type="checkbox" defaultChecked={product?.isFeatured} className="accent-[var(--gold)]" />
          Featured
        </label>
      </div>
      <ProductImageUploader defaultImages={product?.images} />
      {error ? <p className="text-sm leading-6 text-[color:oklch(51%_0.14_24)]">{error}</p> : null}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="primary" type="submit" name="status" value="publish">Save & Publish</Button>
        <Button variant="ghost" type="submit" name="status" value="draft">Save as Draft</Button>
      </div>
    </form>
  );
}
