import { ButtonLink } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";

export default function ContactPage() {
  return (
    <main className="mx-page py-12 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
        <section>
          <h1 className="font-display text-6xl tracking-[-0.025em]">Ask about a piece</h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--champagne)]/74">
            For sizing, gifting, bulk orders, or delivery questions, message Mirayaa. WhatsApp is usually the fastest route.
          </p>
          <ButtonLink className="mt-7" href="https://wa.me/919999999999" variant="primary">
            Open WhatsApp
          </ButtonLink>
        </section>
        <form className="grid gap-4 border border-[var(--border)] bg-[var(--surface)] p-5">
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="What would you like to know?" />
          <button className="h-11 rounded-[6px] border border-[var(--gold)] text-sm text-[var(--gold)]" type="button">
            Send enquiry
          </button>
        </form>
      </div>
    </main>
  );
}
