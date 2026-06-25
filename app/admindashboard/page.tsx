import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function AdminDashboardGatewayPage() {
  return (
    <main className="mx-page grid min-h-[70dvh] place-items-center py-12">
      <section className="w-full max-w-md">
        <p className="font-mono-price text-xs uppercase text-[var(--gold)]">Private access</p>
        <h1 className="mt-3 font-display text-5xl tracking-[-0.02em]">Admin Login</h1>
        <p className="mt-3 text-sm leading-6 text-[var(--champagne)]/72">
          Store management is hidden from public navigation. Admins can sign in here before entering the dashboard.
        </p>
        <form className="mt-8 grid gap-4 border border-[var(--border)] bg-[var(--surface)] p-5">
          <Input type="email" placeholder="Admin email" />
          <Input type="password" placeholder="Password" />
          <Link href="/admin">
            <Button type="button" variant="primary" className="w-full">
              Sign in
            </Button>
          </Link>
        </form>
      </section>
    </main>
  );
}
