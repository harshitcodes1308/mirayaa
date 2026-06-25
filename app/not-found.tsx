import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="mx-page grid min-h-[70dvh] place-items-center py-16 text-center">
      <section>
        <p className="font-mono-price text-sm text-[var(--gold)]">404</p>
        <h1 className="mt-3 font-display text-6xl tracking-[-0.025em]">This piece slipped away.</h1>
        <p className="mt-4 text-sm text-[var(--champagne)]/72">The page is missing or the product is no longer live.</p>
        <ButtonLink href="/shop" className="mt-8" variant="primary">Shop current pieces</ButtonLink>
      </section>
    </main>
  );
}
