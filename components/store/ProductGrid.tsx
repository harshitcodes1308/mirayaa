import { ProductCard } from "@/components/store/ProductCard";
import type { Product } from "@/types";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <div className="border border-[var(--border)] px-6 py-16 text-center">
        <p className="font-display text-3xl text-[var(--champagne)]">Nothing here yet.</p>
        <p className="mt-2 text-sm text-[var(--champagne)]/70">Check back soon for fresh pieces.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
