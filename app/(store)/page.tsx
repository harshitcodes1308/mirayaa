import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "@phosphor-icons/react/dist/ssr";
import { HeroSection } from "@/components/store/HeroSection";
import { ProductGrid } from "@/components/store/ProductGrid";
import { ButtonLink } from "@/components/ui/Button";
import { categories, products } from "@/lib/data";

const featured = products.filter((product) => product.isFeatured);

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <section className="overflow-hidden border-y border-[var(--gold)]/55 bg-[var(--surface)] py-3">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-sm text-[var(--gold)]">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex gap-8">
              <span>FREE SHIPPING ABOVE Rs. 499</span>
              <span>HANDCRAFTED WITH LOVE</span>
              <span>500+ HAPPY CUSTOMERS</span>
              <span>COD AVAILABLE</span>
              <span>EASY RETURNS</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-page py-20 lg:py-28">
        <div className="mb-9 flex items-end justify-between gap-5 border-b border-[var(--border)] pb-5">
          <div>
            <h2 className="font-display text-5xl tracking-[-0.02em] text-[var(--ivory)]">New Arrivals</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--champagne)]/70">Fresh pieces with antique glint, built for gifting, college days, and festive nights.</p>
          </div>
          <Link href="/shop" className="hidden items-center gap-2 text-sm text-[var(--gold)] md:inline-flex">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="mx-page py-6 lg:py-10">
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop?category=${category.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-[6px] border border-[var(--border)] md:aspect-[5/4]"
            >
              <Image
                src={category.imageUrl}
                alt={`${category.name} collection`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="collection-image object-cover transition-[transform] duration-[260ms] ease-[var(--ease-out)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--void)] via-[color:oklch(13%_0.014_53/0.28)] to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-4xl text-[var(--ivory)]">{category.name}</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--champagne)]/76">{category.description}</p>
                </div>
                <ArrowRight className="text-[var(--gold)]" size={24} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-page py-20 text-center lg:py-28">
        <p className="mx-auto max-w-4xl font-display text-5xl leading-tight tracking-[-0.02em] text-balance text-[var(--ivory)] md:text-6xl">
          Every piece tells a story of Indian craft.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["500+ Customers", "Handcrafted", "Rs. 99 onwards"].map((item) => (
            <span key={item} className="rounded-[6px] border border-[var(--border)] px-4 py-2 text-sm text-[var(--champagne)]/80">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-page pb-20 lg:pb-28">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Ananya", "The jhumkas feel light but still look festive. Wore them for a haldi and got asked twice."],
            ["Meera", "Prices are sweet, but the pieces do not feel disposable. The finish is lovely."],
            ["Ishita", "Ordered for college ethnic day. The packaging and earrings both felt thoughtful."]
          ].map(([name, quote]) => (
            <figure key={name} className="border border-[var(--border)] bg-[var(--surface)] p-5">
              <div className="mb-4 flex gap-1 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={15} weight="fill" />
                ))}
              </div>
              <blockquote className="text-sm leading-7 text-[var(--champagne)]/78">"{quote}"</blockquote>
              <figcaption className="mt-5 text-sm font-medium text-[var(--ivory)]">{name}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 md:hidden">
          <ButtonLink href="/shop" variant="primary" className="w-full">
            View All Pieces
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
