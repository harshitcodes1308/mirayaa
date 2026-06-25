import Image from "next/image";
import { categories } from "@/lib/data";

export default function CategoriesPage() {
  return (
    <section>
      <h1 className="mb-8 font-display text-5xl tracking-[-0.02em]">Categories</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <article key={category.id} className="border border-[var(--border)] bg-[var(--surface)]">
            <div className="relative aspect-[3/2]">
              <Image src={category.imageUrl} alt={category.name} fill sizes="50vw" className="object-cover" />
            </div>
            <div className="p-5">
              <p className="font-display text-3xl">{category.name}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--champagne)]/70">{category.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
