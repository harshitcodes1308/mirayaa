import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-page grid gap-10 py-12 md:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">
        <div>
          <p className="font-display text-4xl text-[var(--ivory)]">Mirayaa</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-[var(--champagne)]/72">
            Where tradition meets modernity, and every piece tells a story of everyday elegance.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-[var(--gold)]">Mirayaa</p>
          <div className="mt-4 grid gap-2 text-sm text-[var(--champagne)]/75">
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">WhatsApp enquiry</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-[var(--gold)]">Shop</p>
          <div className="mt-4 grid gap-2 text-sm text-[var(--champagne)]/75">
            <Link href="/shop">Shop all</Link>
            <Link href="/shop?category=oxidised-affairs">Oxidised Affairs</Link>
            <Link href="/shop?category=desi-elegance">The Desi Elegance</Link>
            <Link href="/shop?price=0-99">Daily Wears</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-[var(--gold)]">Policies</p>
          <div className="mt-4 grid gap-2 text-sm text-[var(--champagne)]/75">
            <Link href="/policies/terms">Terms & Conditions</Link>
            <Link href="/policies/privacy">Privacy Policy</Link>
            <Link href="/policies/shipping">Shipping Policy</Link>
            <Link href="/policies/refund">Refund Policy</Link>
            <Link href="/policies/cancellation">Cancellation Policy</Link>
          </div>
        </div>
      </div>
      <div className="mx-page flex flex-col justify-between gap-3 border-t border-[var(--border)] py-5 text-xs text-[var(--champagne)]/55 md:flex-row">
        <p>© {new Date().getFullYear()} Mirayaa.in</p>
        <p>UPI, cards, netbanking and wallets via Razorpay</p>
      </div>
    </footer>
  );
}
