import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

/** Tipografia da identidade: serifada para títulos, sans para textos. */
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Advocacia Estratégica e Consultiva`,
    template: `%s | ${site.name}`,
  },
  description:
    "Escritório de advocacia com mais de 20 anos de experiência em Direito Empresarial, Previdenciário, Família e Civil. Consultoria jurídica estratégica com atendimento personalizado.",
  keywords: [
    "advogada",
    "advocacia",
    "direito empresarial",
    "direito previdenciário",
    "direito de família",
    "direito civil",
    "consultoria jurídica",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Advocacia Estratégica e Consultiva`,
    description:
      "Mais de 20 anos de experiência em Direito Empresarial, Previdenciário, Família e Civil, com atendimento personalizado.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** Dados estruturados do escritório (Schema.org — LegalService). */
const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phoneDisplay,
  image: `${site.url}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: "BR",
  },
  founder: {
    "@type": "Person",
    name: "Joice Crespilho",
    jobTitle: "Advogada",
  },
  areaServed: "BR",
  knowsAbout: [
    "Direito Empresarial",
    "Direito Previdenciário",
    "Direito de Família",
    "Direito Civil",
  ],
  sameAs: [site.instagram, site.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>
        <JsonLd data={legalServiceSchema} />
        <Header />
        <main id="conteudo" className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
