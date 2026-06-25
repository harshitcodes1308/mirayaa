import Link from "next/link";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/Button";

export default async function OrderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="mx-page grid min-h-[70dvh] place-items-center py-16 text-center">
      <section className="max-w-xl">
        <CheckCircle className="mx-auto text-[var(--success)]" size={48} weight="regular" />
        <h1 className="mt-5 font-display text-6xl tracking-[-0.025em]">Order received</h1>
        <p className="mt-4 text-sm leading-7 text-[var(--champagne)]/74">
          Thank you for shopping Mirayaa. Your order ID is <span className="font-mono-price text-[var(--gold)]">{id}</span>. A confirmation will be sent after payment verification.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/shop" variant="primary">Continue Shopping</ButtonLink>
          <Link href="/contact" className="inline-flex h-11 items-center rounded-[6px] border border-[var(--border)] px-5 text-sm text-[var(--champagne)]">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
