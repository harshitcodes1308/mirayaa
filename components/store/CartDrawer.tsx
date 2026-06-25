"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/lib/store";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity } = useCartStore();
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const remaining = Math.max(0, 499 - subtotal);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <button className="absolute inset-0 bg-[color:oklch(20%_0.017_54/0.34)] backdrop-blur-sm" onClick={closeCart} aria-label="Close cart overlay" />
      <aside className="absolute inset-y-0 right-0 flex w-full flex-col border-l border-[var(--border)] bg-[var(--surface)] sm:max-w-md">
        <div className="flex h-16 items-center justify-between border-b border-[var(--border)] px-5">
          <p className="font-display text-3xl">Your Cart</p>
          <button
            type="button"
            onClick={closeCart}
            className="grid h-10 w-10 place-items-center rounded-[6px] border border-[var(--border)] text-[var(--champagne)]"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length ? (
            <div className="grid gap-5">
              {items.map((item) => (
                <div key={item.product.id} className="grid grid-cols-[72px_1fr] gap-4 border-b border-[var(--border)] pb-5">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[6px] bg-[var(--surface-2)]">
                    <Image src={item.product.images[0]} alt={item.product.name} fill sizes="72px" className="object-cover" />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium">{item.product.name}</p>
                        <p className="font-mono-price mt-1 text-sm text-[var(--gold)]">{formatPrice(item.product.price)}</p>
                      </div>
                      <button type="button" onClick={() => removeItem(item.product.id)} className="text-xs text-[var(--champagne)]/60">
                        Remove
                      </button>
                    </div>
                    <div className="mt-4 inline-flex items-center border border-[var(--border)]">
                      <button
                        type="button"
                        className="grid h-9 w-9 place-items-center"
                        onClick={() => setQuantity(item.product.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="grid h-9 w-10 place-items-center border-x border-[var(--border)] font-mono-price text-xs">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="grid h-9 w-9 place-items-center"
                        onClick={() => setQuantity(item.product.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid min-h-96 place-items-center text-center">
              <div>
                <p className="font-display text-3xl">Your cart is quiet.</p>
                <p className="mt-2 text-sm text-[var(--champagne)]/70">Add a handcrafted piece to begin.</p>
              </div>
            </div>
          )}
        </div>
        <div className="border-t border-[var(--border)] p-5">
          <p className="text-sm text-[var(--champagne)]/70">
            {remaining ? `${formatPrice(remaining)} away from free shipping.` : "Free shipping unlocked."}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-[var(--champagne)]/70">Subtotal</span>
            <span className="font-mono-price text-xl text-[var(--gold)]">{formatPrice(subtotal)}</span>
          </div>
          <Link href="/checkout" onClick={closeCart}>
            <Button className="mt-5 w-full" variant="primary" disabled={!items.length}>
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </aside>
    </div>
  );
}
