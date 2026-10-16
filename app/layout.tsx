import type { Metadata } from "next";
import { Barlow, Source_Sans_3 } from "next/font/google";
import { DemoBanner } from "@/components/demo-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { site } from "@/lib/site";
import "./globals.css";

const display = Barlow({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.location}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    locale: "es_NI",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <DemoBanner />
        <SiteHeader />
        <main id="contenido" className="flex flex-1 flex-col pb-20">
          {children}
        </main>
        <SiteFooter />
        <WhatsappFab />
      </body>
    </html>
  );
}
