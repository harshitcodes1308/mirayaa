import Link from "next/link";
import { ProductGrid } from "@/components/store/ProductGrid";
import { Badge } from "@/components/ui/Badge";
import { getCatalogCategories, getCatalogProducts } from "@/lib/catalog";

type SearchParams = Promise<{ category?: string; price?: string; sort?: string }>;

export default async function ShopPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const activeCategory = params.category;
  const activePrice = params.price;
  const sort = params.sort ?? "newest";
  const [categories, products] = await Promise.all([getCatalogCategories(), getCatalogProducts()]);

  let visible = products.filter((product) => {
    const categoryMatch = activeCategory ? product.category === activeCategory : true;
    const priceMatch =
      activePrice === "0-99"
        ? product.price <= 99
        : activePrice === "100-199"
          ? product.price >= 100 && product.price <= 199
          : activePrice === "200"
            ? product.price >= 200
            : true;
    return categoryMatch && priceMatch;
  });

  if (sort === "price-asc") visible = [...visible].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") visible = [...visible].sort((a, b) => b.price - a.price);

  return (
    <main className="mx-page py-12 lg:py-16">
      <div className="mb-10 max-w-3xl">
        <Badge>Shop Mirayaa</Badge>
        <h1 className="mt-4 font-display text-6xl tracking-[-0.025em] text-[var(--ivory)]">All handcrafted pieces</h1>
        <p className="mt-4 text-pretty text-sm leading-7 text-[var(--champagne)]/72">
          Browse oxidised dangles, desi studs, jhumkas, and everyday pieces. Filters stay in the URL so every selection is shareable.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="grid gap-7 border border-[var(--border)] bg-[var(--surface)] p-5">
            <FilterGroup title="Category" items={[["All", "/shop"], ...categories.map((item) => [item.name, `/shop?category=${item.slug}`] as [string, string])]} />
            <FilterGroup
              title="Price"
              items={[
                ["All prices", activeCategory ? `/shop?category=${activeCategory}` : "/shop"],
                ["Rs. 0-99", `/shop?price=0-99${activeCategory ? `&category=${activeCategory}` : ""}`],
                ["Rs. 100-199", `/shop?price=100-199${activeCategory ? `&category=${activeCategory}` : ""}`],
                ["Rs. 200+", `/shop?price=200${activeCategory ? `&category=${activeCategory}` : ""}`]
              ]}
            />
            <FilterGroup
              title="Sort"
              items={[
                ["Newest", `/shop${activeCategory ? `?category=${activeCategory}` : ""}`],
                ["Price up", `/shop?sort=price-asc${activeCategory ? `&category=${activeCategory}` : ""}`],
                ["Price down", `/shop?sort=price-desc${activeCategory ? `&category=${activeCategory}` : ""}`]
              ]}
            />
          </div>
        </aside>
        <section>
          <div className="mb-5 flex items-center justify-between border-b border-[var(--border)] pb-4 text-sm text-[var(--champagne)]/70">
            <span>{visible.length} pieces</span>
            <span className="font-mono-price text-[var(--gold)]">{sort.replace("-", " ")}</span>
          </div>
          <ProductGrid products={visible} />
        </section>
      </div>
    </main>
  );
}

function FilterGroup({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <p className="mb-3 text-sm font-medium text-[var(--gold)]">{title}</p>
      <div className="grid gap-2">
        {items.map(([label, href]) => (
          <Link key={`${title}-${label}`} href={href} className="text-sm text-[var(--champagne)]/72 transition-colors hover:text-[var(--ivory)]">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
