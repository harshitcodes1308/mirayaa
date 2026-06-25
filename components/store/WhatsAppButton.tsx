import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%20Mirayaa%2C%20I%20want%20to%20ask%20about%20a%20piece."
      className="fixed bottom-5 right-5 z-30 inline-flex h-12 w-12 items-center justify-center rounded-[6px] border border-[var(--gold)] bg-[var(--surface)] text-[var(--gold)] transition-[background-color,transform] duration-200 ease-[var(--ease-out)] hover:bg-[var(--gold)] hover:text-[var(--ivory)] active:scale-[0.97]"
      aria-label="Ask Mirayaa on WhatsApp"
    >
      <WhatsappLogo size={24} weight="regular" />
    </a>
  );
}
