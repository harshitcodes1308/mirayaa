import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function AdminLoginPage() {
  return (
    <section className="mx-auto w-full max-w-md">
      <h1 className="font-display text-5xl tracking-[-0.02em]">Admin Login</h1>
      <p className="mt-3 text-sm text-[var(--champagne)]/70">Supabase email/password login for the store owner.</p>
      <form className="mt-8 grid gap-4 border border-[var(--border)] bg-[var(--surface)] p-5">
        <Input type="email" placeholder="Admin email" />
        <Input type="password" placeholder="Password" />
        <Button type="button" variant="primary">Sign in</Button>
      </form>
    </section>
  );
}
