import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/store/Navbar";
import { Footer } from "@/components/store/Footer";
import { CartDrawer } from "@/components/store/CartDrawer";
import { WhatsAppButton } from "@/components/store/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://mirayaa.in"),
  title: {
    default: "Mirayaa | Handcrafted Oxidised Silver Jewelry",
    template: "%s | Mirayaa"
  },
  description: "Handcrafted oxidised silver earrings and fashion jewelry from Rs. 99. Where Elegance meets Timeless Beauty.",
  openGraph: {
    title: "Mirayaa",
    description: "Handcrafted Indian jewelry with oxidised silver soul.",
    url: "https://mirayaa.in",
    siteName: "Mirayaa",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <Navbar />
        {children}
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
