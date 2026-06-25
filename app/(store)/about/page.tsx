import Image from "next/image";
import { categories } from "@/lib/data";

export default function AboutPage() {
  return (
    <main className="mx-page py-12 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <section>
          <h1 className="font-display text-6xl leading-[0.98] tracking-[-0.025em]">Where Elegance meets Timeless Beauty</h1>
          <p className="mt-6 max-w-2xl text-pretty text-sm leading-7 text-[var(--champagne)]/76">
            Mirayaa is built around handcrafted oxidised pieces that feel personal, wearable, and rooted in Indian ornament. The promise is accessible luxury: pieces that look special without becoming precious or unreachable.
          </p>
        </section>
        <div className="relative aspect-[3/4] overflow-hidden rounded-[6px] border border-[var(--border)]">
          <Image src={categories[0].imageUrl} alt="Mirayaa oxidised craft mood" fill sizes="50vw" className="object-cover" />
        </div>
      </div>
    </main>
  );
}
