"use client";

import Link from "next/link";
import { List, ShoppingBag, X } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { useCartStore } from "@/lib/store";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=oxidised-affairs", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);
  const count = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  return (
    <header className="sticky top-0 z-40 bg-transparent py-3">
      <nav className="mx-page flex h-16 items-center justify-between rounded-[6px] bg-[#8B6F2C] px-5 shadow-[0_8px_18px_rgba(70,53,28,0.12)] md:px-8">
        <Link href="/" className="font-display text-3xl tracking-[-0.02em] text-[#FFF3D6]">
          Mirayaa
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-[#FFF3D6]/82 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-[6px] border border-[#FFF3D6]/45 text-[#FFF3D6] transition-[border-color,color,transform] duration-200 ease-[var(--ease-out)] hover:border-white hover:text-white active:scale-[0.97]"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            {count ? (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-[6px] bg-[var(--void)] px-1 font-mono-price text-[10px] text-[#8B6F2C]">
                {count}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[6px] border border-[#FFF3D6]/45 text-[#FFF3D6] md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="mx-page mt-2 grid gap-2 rounded-[6px] bg-[#8B6F2C] px-5 py-4 md:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="py-2 text-sm text-[#FFF3D6]" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
