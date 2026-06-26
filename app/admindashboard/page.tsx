import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { signInAdmin } from "@/lib/supabase/auth-actions";

export default async function AdminDashboardGatewayPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;

  return (
    <main className="mx-page grid min-h-[70dvh] place-items-center py-12">
      <section className="w-full max-w-md">
        <p className="font-mono-price text-xs uppercase text-[var(--gold)]">Private access</p>
        <h1 className="mt-3 font-display text-5xl tracking-[-0.02em]">Admin Login</h1>
        <p className="mt-3 text-sm leading-6 text-[var(--champagne)]/72">
          Store management is hidden from public navigation. Admins can sign in here before entering the dashboard.
        </p>
        <form action={signInAdmin} className="mt-8 grid gap-4 border border-[var(--border)] bg-[var(--surface)] p-5">
          <Input name="email" type="email" placeholder="Admin email" autoComplete="email" required />
          <Input name="password" type="password" placeholder="Password" autoComplete="current-password" required />
          {error ? <p className="text-sm leading-6 text-[color:oklch(51%_0.14_24)]">{error}</p> : null}
          <Button type="submit" variant="primary" className="w-full">
            Sign in
          </Button>
          <Link href="/" className="text-center text-sm text-[var(--champagne)]/68">
            Back to storefront
          </Link>
        </form>
      </section>
    </main>
  );
}
