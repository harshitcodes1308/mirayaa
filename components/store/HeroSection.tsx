import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/Button";
import { products } from "@/lib/data";

export function HeroSection() {
  const heroProduct = products[0];

  return (
    <section className="mx-page grid min-h-[calc(100dvh-4rem)] items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
      <div className="max-w-2xl">
        <p className="mb-6 max-w-sm border-l border-[var(--gold)] pl-4 text-sm leading-6 text-[var(--champagne)]/75">
          Handcrafted oxidised silver jewelry from Rs. 99, made for Indian everyday rituals and festive light.
        </p>
        <h1 className="font-display text-[clamp(4rem,10vw,6rem)] leading-[0.92] tracking-[-0.025em] text-balance text-[var(--ivory)]">
          <span className="stagger-line">Crafted</span>
          <span className="stagger-line">for the</span>
          <span className="stagger-line">Eternal</span>
          <span className="stagger-line text-[var(--gold)]">You</span>
        </h1>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/shop" variant="primary" size="lg">
            Shop Now <ArrowRight size={18} />
          </ButtonLink>
          <ButtonLink href="/shop?category=oxidised-affairs" variant="ghost" size="lg">
            Explore Collections
          </ButtonLink>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -left-4 top-8 hidden h-40 w-px bg-[var(--gold)]/55 lg:block" />
        <div className="tarnish-reveal relative mx-auto aspect-[3/4] w-full max-w-[520px] overflow-hidden rounded-[6px] border border-[var(--border)] bg-[var(--surface)]">
          <Image
            src={heroProduct.images[0]}
            alt="Oxidised Mirayaa earrings catching warm light"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--void)] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
            <div>
              <p className="font-display text-3xl text-[var(--ivory)]">{heroProduct.name}</p>
              <p className="font-mono-price text-sm text-[var(--gold)]">Rs. {heroProduct.price}</p>
            </div>
            <p className="max-w-32 text-right text-xs leading-5 text-[var(--champagne)]/72">Oxidised Affairs launch piece</p>
          </div>
        </div>
      </div>
    </section>
  );
}
