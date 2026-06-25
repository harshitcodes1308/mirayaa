"use client";

import { Button } from "@/components/ui/Button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="mx-page grid min-h-[70dvh] place-items-center py-16 text-center">
      <section>
        <h1 className="font-display text-6xl tracking-[-0.025em]">Something tarnished.</h1>
        <p className="mt-4 text-sm text-[var(--champagne)]/72">The page hit an error. Try once more.</p>
        <Button className="mt-8" onClick={reset} variant="primary">Retry</Button>
      </section>
    </main>
  );
}
