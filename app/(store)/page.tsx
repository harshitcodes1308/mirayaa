import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "@phosphor-icons/react/dist/ssr";
import { HeroSection } from "@/components/store/HeroSection";
import { ProductGrid } from "@/components/store/ProductGrid";
import { ButtonLink } from "@/components/ui/Button";
import { categories, products } from "@/lib/data";

const featured = products.filter((product) => product.isFeatured);
const careNotes = [
  ["Oxidised finish", "Antique-toned surfaces that catch light softly instead of shouting shine."],
  ["Lightweight wear", "Everyday silhouettes that sit comfortably through college days, office hours, and festive evenings."],
  ["Care ritual", "Keep pieces away from perfume and water; store them dry in a pouch after wear."]
];

const shopMoments = [
  {
    title: "College Ethnic Day",
    copy: "Small jhumkas and easy studs that feel festive without weighing the day down.",
    href: "/shop?price=0-99",
    product: products.find((product) => product.slug === "mini-boho-bloom") ?? products[0],
    cue: "From Rs. 99"
  },
  {
    title: "Festive Evenings",
    copy: "Statement drops with enough glint for sarees, kurtas, and wedding corners.",
    href: "/shop?category=oxidised-affairs&price=200",
    product: products.find((product) => product.slug === "the-royal-sparkle") ?? products[0],
    cue: "Rs. 199-249"
  },
  {
    title: "Gifting Under Rs. 249",
    copy: "Polished little pieces that feel personal, thoughtful, and easy to wrap.",
    href: "/shop?sort=price-desc",
    product: products.find((product) => product.slug === "aparna-jhumka") ?? products[0],
    cue: "Under Rs. 249"
  }
];

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
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl tracking-[-0.02em] text-[var(--ivory)] md:text-6xl">New Arrivals</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--champagne)]/70">
              Fresh pieces with antique glint, built for gifting, college days, and festive nights.
            </p>
          </div>
          <Link href="/shop" className="hidden items-center gap-2 text-sm text-[var(--gold)] md:inline-flex">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <ProductGrid products={featured.slice(0, 8)} />
      </section>

      <section className="mx-page py-6 lg:py-10">
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={category.slug === "daily-wears" ? "/shop?price=0-99" : `/shop?category=${category.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-[6px] border border-[var(--border)] md:aspect-[5/4]"
            >
              <Image
                src={category.imageUrl}
                alt={`${category.name} collection`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="collection-image object-cover transition-[transform] duration-[260ms] ease-[var(--ease-out)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:oklch(13%_0.014_53/0.82)] via-[color:oklch(13%_0.014_53/0.22)] to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-4xl text-[color:oklch(97%_0.006_92)]">{category.name}</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[color:oklch(92%_0.014_82/0.82)]">{category.description}</p>
                </div>
                <ArrowRight className="text-[var(--gold)]" size={24} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-page py-20 lg:py-28">
        <div className="grid gap-10 border-y border-[var(--border)] py-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="max-w-sm border-l border-[var(--gold)] pl-4 text-sm leading-6 text-[var(--champagne)]/78">
              Silver-polish care for pieces that are made to be worn, not locked away.
            </p>
            <h2 className="mt-6 max-w-xl font-display text-5xl leading-[1.02] tracking-[-0.02em] text-balance text-[var(--ivory)] md:text-6xl">
              Made to glow, kept with care.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-[0.82fr_1fr] md:items-stretch">
            <div className="relative min-h-80 overflow-hidden rounded-[6px] border border-[var(--border)]">
              <Image
                src={products[2].images[0]}
                alt="Oxidised Mirayaa earrings for care and storage"
                fill
                sizes="(min-width: 768px) 35vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:oklch(13%_0.014_53/0.44)] to-transparent" />
            </div>
            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {careNotes.map(([title, copy]) => (
                <div key={title} className="py-6 md:px-5">
                  <p className="font-display text-3xl tracking-[-0.015em] text-[var(--ivory)]">{title}</p>
                  <p className="mt-2 max-w-md text-sm leading-7 text-[var(--champagne)]/78">{copy}</p>
                </div>
              ))}
            </div>
          </div>
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
        <div className="mb-5 flex items-end justify-between gap-5 border-b border-[var(--border)] pb-5">
          <div>
            <h2 className="font-display text-5xl tracking-[-0.02em] text-[var(--ivory)]">Shop by Moment</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--champagne)]/72">Three fast paths for the way Mirayaa pieces actually get worn.</p>
          </div>
          <Link href="/shop" className="hidden items-center gap-2 text-sm text-[var(--gold)] md:inline-flex">
            Shop All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="divide-y divide-[var(--border)] border-b border-[var(--border)]">
          {shopMoments.map((moment) => (
            <Link
              href={moment.href}
              key={moment.title}
              className="group grid gap-5 py-5 transition-colors hover:bg-[color:oklch(93%_0.012_82/0.48)] md:grid-cols-[112px_1fr_auto] md:items-center"
            >
              <div className="relative aspect-[3/4] w-28 overflow-hidden rounded-[6px] border border-[var(--border)] bg-[var(--surface)]">
                <Image src={moment.product.images[0]} alt={`${moment.title} jewelry pick`} fill sizes="112px" className="object-cover" />
              </div>
              <div>
                <p className="font-display text-4xl tracking-[-0.02em] text-[var(--ivory)]">{moment.title}</p>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--champagne)]/78">{moment.copy}</p>
              </div>
              <div className="flex items-center justify-between gap-5 md:justify-end">
                <span className="font-mono-price text-sm text-[var(--gold)]">{moment.cue}</span>
                <ArrowRight className="moment-arrow text-[var(--gold)] transition-transform duration-200 ease-[var(--ease-out)]" size={22} />
              </div>
            </Link>
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
