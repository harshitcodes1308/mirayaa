"use client";

import { useMemo, useState } from "react";
import { CreditCard } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/lib/store";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const clear = useCartStore((state) => state.clear);
  const [error, setError] = useState("");
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0), [items]);
  const shipping = subtotal >= 499 || subtotal === 0 ? 0 : 49;
  const total = subtotal + shipping;

  async function handleSubmit(formData: FormData) {
    setError("");
    if (!items.length) {
      setError("Your cart is empty.");
      return;
    }

    const customer = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? "")
    };

    const orderData = {
      customer,
      shippingAddress: {
        line1: String(formData.get("line1") ?? ""),
        line2: String(formData.get("line2") ?? ""),
        city: String(formData.get("city") ?? ""),
        state: String(formData.get("state") ?? ""),
        pincode: String(formData.get("pincode") ?? "")
      },
      items: items.map((item) => ({
        product_id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        qty: item.quantity,
        image: item.product.images[0]
      })),
      subtotal,
      shipping,
      total
    };

    const response = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total })
    });

    if (!response.ok) {
      setError("Payment is not configured yet. Add Razorpay keys in .env.local.");
      return;
    }

    const razorpayOrder = await response.json();

    if (!window.Razorpay) {
      setError("Razorpay checkout script is not loaded yet.");
      return;
    }

    const checkout = new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: razorpayOrder.amount,
      currency: "INR",
      name: "Mirayaa",
      description: "Handcrafted Jewelry",
      prefill: { name: customer.name, email: customer.email, contact: customer.phone },
      theme: { color: "#C8A96E" },
      order_id: razorpayOrder.orderId,
      handler: async (payment: Record<string, string>) => {
        const verify = await fetch("/api/razorpay/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...payment, orderData })
        });
        if (verify.ok) {
          const result = await verify.json();
          clear();
          window.location.href = `/order/${result.orderId}`;
        } else {
          setError("Payment verification failed. Please contact Mirayaa with your payment ID.");
        }
      }
    });
    checkout.open();
  }

  return (
    <main className="mx-page py-12 lg:py-16">
      <div className="mb-10">
        <h1 className="font-display text-6xl tracking-[-0.025em]">Checkout</h1>
        <p className="mt-3 text-sm text-[var(--champagne)]/72">Large touch targets, UPI-ready Razorpay flow, and a clean order handoff.</p>
      </div>
      <form action={handleSubmit} className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <section className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Input name="name" placeholder="Full Name" required />
            <Input name="email" type="email" placeholder="Email" required />
            <Input name="phone" inputMode="numeric" placeholder="Phone" required />
          </div>
          <Input name="line1" placeholder="Address Line 1" required />
          <Input name="line2" placeholder="Address Line 2" />
          <div className="grid gap-4 md:grid-cols-3">
            <Input name="city" placeholder="City" required />
            <Input name="state" placeholder="State" required />
            <Input name="pincode" inputMode="numeric" placeholder="Pincode" required />
          </div>
          {error ? <p className="border border-[var(--error)] p-3 text-sm text-[var(--error)]">{error}</p> : null}
        </section>
        <aside className="border border-[var(--border)] bg-[var(--surface)] p-5">
          <p className="font-display text-3xl">Order Summary</p>
          <div className="mt-5 grid gap-3">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between gap-4 text-sm text-[var(--champagne)]/75">
                <span>
                  {item.product.name} × {item.quantity}
                </span>
                <span className="font-mono-price text-[var(--gold)]">{formatPrice(item.product.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-2 border-t border-[var(--border)] pt-5 text-sm">
            <Row label="Subtotal" value={formatPrice(subtotal)} />
            <Row label="Shipping" value={shipping ? formatPrice(shipping) : "Free"} />
            <Row label="Total" value={formatPrice(total)} strong />
          </div>
          <Button className="mt-6 w-full" variant="primary" type="submit">
            <CreditCard size={18} /> Pay {formatPrice(total)}
          </Button>
        </aside>
      </form>
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />
    </main>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="text-[var(--champagne)]/70">{label}</span>
      <span className={strong ? "font-mono-price text-xl text-[var(--gold)]" : "font-mono-price text-[var(--ivory)]"}>{value}</span>
    </div>
  );
}
