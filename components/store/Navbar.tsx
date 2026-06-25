"use client";

import Link from "next/link";
import { List, ShoppingBag, X } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { useCartStore } from "@/lib/store";

const navItems = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/admin", label: "Admin" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);
  const count = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:oklch(13%_0.014_53/0.86)] backdrop-blur-xl">
      <nav className="mx-page flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-3xl tracking-[-0.02em] text-[var(--ivory)]">
          Mirayaa
        </Link>
        <div className="hidden items-center gap-7 text-sm text-[var(--champagne)]/80 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-[var(--gold)]">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-[6px] border border-[var(--border)] text-[var(--champagne)] transition-[border-color,color,transform] duration-200 ease-[var(--ease-out)] hover:border-[var(--gold)] hover:text-[var(--gold)] active:scale-[0.97]"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            {count ? (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-[6px] bg-[var(--gold)] px-1 font-mono-price text-[10px] text-[var(--void)]">
                {count}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[6px] border border-[var(--border)] text-[var(--champagne)] md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="mx-page grid gap-2 border-t border-[var(--border)] py-4 md:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="py-2 text-sm text-[var(--champagne)]" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
