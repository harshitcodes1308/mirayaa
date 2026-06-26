import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/store/AddToCartButton";
import { ProductGrid } from "@/components/store/ProductGrid";
import { Badge } from "@/components/ui/Badge";
import { getCatalogCategories, getCatalogProduct, getCatalogProducts } from "@/lib/catalog";
import { products as fallbackProducts } from "@/lib/data";
import { absoluteUrl, formatPrice } from "@/lib/utils";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return fallbackProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getCatalogProduct(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Mirayaa`,
      description: `${product.description} ${formatPrice(product.price)}.`,
      url: absoluteUrl(`/product/${product.slug}`),
      images: [{ url: product.images[0], width: 1200, height: 1600, alt: product.name }]
    }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [product, categories, products] = await Promise.all([
    getCatalogProduct(slug),
    getCatalogCategories(),
    getCatalogProducts()
  ]);
  if (!product) notFound();

  const category = categories.find((item) => item.slug === product.category);
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);

  return (
    <main className="mx-page py-10 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <section>
          <div className="tarnish-reveal relative aspect-[3/4] overflow-hidden rounded-[6px] border border-[var(--border)] bg-[var(--surface)]">
            <Image src={product.images[0]} alt={product.name} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.images.map((image) => (
              <div key={image} className="relative aspect-[3/4] overflow-hidden rounded-[6px] border border-[var(--border)]">
                <Image src={image} alt={`${product.name} thumbnail`} fill sizes="20vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section>
        <section className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm text-[var(--champagne)]/60">Home / {category?.name} / {product.name}</p>
          <h1 className="mt-5 font-display text-6xl leading-[0.98] tracking-[-0.025em] text-balance text-[var(--ivory)]">{product.name}</h1>
          <div className="mt-6 flex items-end gap-3">
            <p className="font-mono-price text-3xl text-[var(--gold)]">{formatPrice(product.price)}</p>
            {product.comparePrice ? <p className="font-mono-price text-sm text-[var(--champagne)]/45 line-through">{formatPrice(product.comparePrice)}</p> : null}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>{product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}</Badge>
            {product.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <p className="mt-7 max-w-xl text-pretty text-sm leading-7 text-[var(--champagne)]/76">{product.description}</p>
          <div className="mt-7 grid gap-3 border-y border-[var(--border)] py-5 text-sm text-[var(--champagne)]/74">
            <p>
              <span className="text-[var(--ivory)]">Material:</span> {product.material}
            </p>
            <p>
              <span className="text-[var(--ivory)]">Care:</span> Keep away from perfume and water. Store in the Mirayaa pouch after use.
            </p>
            <p>
              <span className="text-[var(--ivory)]">Delivery:</span> Ships across India. Free shipping above Rs. 499.
            </p>
          </div>
          <AddToCartButton product={product} className="mt-7 w-full sm:w-auto" />
        </section>
      </div>
      <section className="mt-20">
        <h2 className="mb-8 font-display text-5xl tracking-[-0.02em]">You might also like</h2>
        <ProductGrid products={related} />
      </section>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--border)] bg-[var(--surface)] p-4 lg:hidden">
        <AddToCartButton product={product} className="w-full" />
      </div>
    </main>
  );
}
