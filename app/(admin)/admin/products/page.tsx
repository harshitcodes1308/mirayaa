import Image from "next/image";
import Link from "next/link";
import { products, categories } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function AdminProductsPage() {
  return (
    <section>
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-5xl tracking-[-0.02em]">Products</h1>
          <p className="mt-2 text-sm text-[var(--champagne)]/68">Search, stock, status, and edits for the catalog.</p>
        </div>
        <Link href="/admin/products/new" className="rounded-[6px] border border-[var(--gold)] px-4 py-2 text-sm text-[var(--gold)]">New</Link>
      </div>
      <div className="overflow-x-auto border border-[var(--border)]">
        <table className="w-full min-w-[760px] border-collapse bg-[var(--surface)] text-sm">
          <thead className="text-left text-[var(--gold)]">
            <tr>
              {["Image", "Name", "Category", "Price", "Stock", "Status", "Edit"].map((heading) => (
                <th key={heading} className="border-b border-[var(--border)] px-4 py-3 font-medium">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="text-[var(--champagne)]/75">
                <td className="border-b border-[var(--border)] px-4 py-3">
                  <div className="relative h-14 w-11 overflow-hidden rounded-[6px]">
                    <Image src={product.images[0]} alt={product.name} fill sizes="44px" className="object-cover" />
                  </div>
                </td>
                <td className="border-b border-[var(--border)] px-4 py-3 text-[var(--ivory)]">{product.name}</td>
                <td className="border-b border-[var(--border)] px-4 py-3">{categories.find((item) => item.slug === product.category)?.name}</td>
                <td className="border-b border-[var(--border)] px-4 py-3 font-mono-price text-[var(--gold)]">{formatPrice(product.price)}</td>
                <td className="border-b border-[var(--border)] px-4 py-3">{product.stock}</td>
                <td className="border-b border-[var(--border)] px-4 py-3">Live</td>
                <td className="border-b border-[var(--border)] px-4 py-3">
                  <Link href={`/admin/products/${product.id}`} className="text-[var(--gold)]">Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
