import Link from "next/link";
import { OrderTable } from "@/components/admin/OrderTable";
import { getCatalogProducts } from "@/lib/catalog";
import { formatPrice } from "@/lib/utils";

export default async function AdminPage() {
  const products = await getCatalogProducts();
  const stats = [
    ["Total Orders", "0"],
    ["Revenue", formatPrice(0)],
    ["Products Live", String(products.length)],
    ["Low Stock", "0"]
  ];

  return (
    <section>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="font-display text-5xl tracking-[-0.02em]">Dashboard</h1>
          <p className="mt-2 text-sm text-[var(--champagne)]/68">Operational view for orders, product health, and quick actions.</p>
        </div>
        <Link href="/admin/products/new" className="inline-flex h-11 items-center justify-center rounded-[6px] border border-[var(--gold)] px-5 text-sm text-[var(--gold)]">
          Add Product
        </Link>
      </div>
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value]) => (
          <div key={label} className="border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="text-sm text-[var(--champagne)]/65">{label}</p>
            <p className="font-mono-price mt-3 text-2xl text-[var(--gold)]">{value}</p>
          </div>
        ))}
      </div>
      <OrderTable />
    </section>
  );
}
