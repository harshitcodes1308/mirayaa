import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { categories } from "@/lib/data";

export default function AboutPage() {
  return (
    <main className="mx-page py-12 lg:py-16">
      <div className="grid gap-10 border-b border-[var(--border)] pb-12 lg:grid-cols-[0.85fr_1.15fr]">
        <section>
          <p className="text-sm text-[var(--gold)]">About Mirayaa</p>
          <h1 className="mt-4 text-balance font-display text-6xl leading-[0.98] tracking-[-0.025em] text-[var(--ivory)] md:text-7xl">
            Where every piece tells a story.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-[var(--champagne)]/82">
            Welcome to Mirayaa, where every piece tells a story of elegance and tradition. We specialize in curated collections of oxidized earrings, desi-inspired designs, and unique styles that reflect the essence of Indian craftsmanship.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-[6px] bg-[var(--gold)] px-6 text-sm font-medium text-[var(--void)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Explore the boutique
            <ArrowRight size={17} />
          </Link>
        </section>
        <div className="relative aspect-[3/4] overflow-hidden rounded-[6px] border border-[var(--border)]">
          <Image src={categories[0].imageUrl} alt="Mirayaa oxidised craft mood" fill sizes="50vw" className="object-cover" />
        </div>
      </div>

      <section className="grid gap-10 py-12 lg:grid-cols-[0.36fr_0.64fr] lg:py-16">
        <h2 className="font-display text-4xl leading-tight text-[var(--ivory)] md:text-5xl">Jewelry with personality and heritage.</h2>
        <div className="grid gap-6 text-sm leading-7 text-[var(--champagne)]/82 md:grid-cols-2">
          <p>
            At Mirayaa, we believe that jewelry is more than just an accessory; it is a reflection of your personality and heritage. Our handpicked selection of earrings blends timeless artistry with contemporary flair, offering the perfect accent to elevate any ensemble.
          </p>
          <p>
            Each piece in our collection is crafted with meticulous attention to detail, ensuring exceptional quality and craftsmanship. Whether you are looking for a statement piece for a special occasion or everyday elegance, Mirayaa offers a diverse range of options for every style and preference.
          </p>
        </div>
      </section>

      <section className="grid gap-8 border-y border-[var(--border)] py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <p className="max-w-xl font-display text-3xl leading-tight text-[var(--ivory)]">
          Discover the allure of Mirayaa - where tradition meets modernity.
        </p>
        <div className="grid gap-4 text-sm leading-7 text-[var(--champagne)]/82">
          <p>
            We invite you to explore our online boutique or visit our store to experience the beauty and craftsmanship of Mirayaa firsthand.
          </p>
          <p>Let our earrings inspire you and adorn your journey with timeless beauty and sophistication.</p>
        </div>
      </section>
    </main>
  );
}
