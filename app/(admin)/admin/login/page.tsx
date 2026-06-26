import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { signInAdmin } from "@/lib/supabase/auth-actions";

export default async function AdminLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;

  return (
    <section className="mx-auto w-full max-w-md">
      <h1 className="font-display text-5xl tracking-[-0.02em]">Admin Login</h1>
      <p className="mt-3 text-sm text-[var(--champagne)]/70">Supabase email/password login for the store owner.</p>
      <form action={signInAdmin} className="mt-8 grid gap-4 border border-[var(--border)] bg-[var(--surface)] p-5">
        <Input name="email" type="email" placeholder="Admin email" autoComplete="email" required />
        <Input name="password" type="password" placeholder="Password" autoComplete="current-password" required />
        {error ? <p className="text-sm leading-6 text-[color:oklch(51%_0.14_24)]">{error}</p> : null}
        <Button type="submit" variant="primary">Sign in</Button>
      </form>
    </section>
  );
}
