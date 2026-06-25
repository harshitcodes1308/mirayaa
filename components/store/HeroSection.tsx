import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="mx-page grid items-center gap-8 py-10 lg:grid-cols-[0.78fr_1.22fr] lg:py-12">
      <div className="relative z-10 max-w-2xl">
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
      <div className="relative min-h-[360px] overflow-visible lg:min-h-[600px]">
        <div className="absolute -left-16 top-1/2 hidden h-36 w-px -translate-y-1/2 bg-[var(--gold)]/55 xl:-left-24 lg:block" />
        <div className="tarnish-reveal hero-character-stage absolute inset-y-0 -left-4 -right-4 my-auto h-full lg:-left-8 lg:-right-12">
          <Image
            src="/mirayaa-hero-character-fit.png"
            alt="Illustrated Mirayaa brand muse wearing handcrafted earrings"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 96vw"
            className="object-contain object-right drop-shadow-[0_24px_45px_rgba(70,53,28,0.18)]"
          />
        </div>
      </div>
    </section>
  );
}
