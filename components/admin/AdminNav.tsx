import Link from "next/link";
import { signOutAdmin } from "@/lib/supabase/auth-actions";

const items = [
  ["Overview", "/admin"],
  ["Products", "/admin/products"],
  ["Orders", "/admin/orders"],
  ["Categories", "/admin/categories"]
];

export function AdminNav() {
  return (
    <aside className="border border-[var(--border)] bg-[var(--surface)] p-4 lg:sticky lg:top-24 lg:self-start">
      <p className="font-display text-3xl">Admin</p>
      <nav className="mt-5 grid gap-1">
        {items.map(([label, href]) => (
          <Link key={href} href={href} className="rounded-[6px] px-3 py-2 text-sm text-[var(--champagne)]/76 transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--ivory)]">
            {label}
          </Link>
        ))}
      </nav>
      <form action={signOutAdmin} className="mt-5 border-t border-[var(--border)] pt-4">
        <button type="submit" className="rounded-[6px] px-3 py-2 text-sm text-[var(--champagne)]/68 transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--ivory)]">
          Sign out
        </button>
      </form>
    </aside>
  );
}
