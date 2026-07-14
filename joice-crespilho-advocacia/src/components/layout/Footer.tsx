import Link from "next/link";
import { areas } from "@/content/areas";
import { site, whatsappLink } from "@/lib/site";
import {
  IconInstagram,
  IconLinkedIn,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@/components/ui/icons";

const footerNav = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre a advogada" },
  { href: "/areas-de-atuacao", label: "Áreas de atuação" },
  { href: "/blog", label: "Blog jurídico" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper/70">
      <div className="container">
        {/* Bloco principal */}
        <div className="grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <p className="font-display text-2xl font-medium text-paper">
              Joice Crespilho
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.42em] text-gold">
              Advocacia
            </p>
            <div className="hairline mt-6" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed">
              Advocacia estratégica e consultiva com mais de 20 anos de
              experiência e atendimento verdadeiramente personalizado.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do escritório"
                className="text-paper/60 transition-colors duration-300 hover:text-gold"
              >
                <IconInstagram size={20} />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn do escritório"
                className="text-paper/60 transition-colors duration-300 hover:text-gold"
              >
                <IconLinkedIn size={20} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Navegação
            </h2>
            <ul className="mt-6 space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Áreas */}
          <nav aria-label="Áreas de atuação">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Áreas de atuação
            </h2>
            <ul className="mt-6 space-y-3">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas-de-atuacao/${area.slug}`}
                    className="text-sm transition-colors duration-300 hover:text-gold"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Contato
            </h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <IconMapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city} — {site.address.state}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone size={18} className="shrink-0 text-gold" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-gold"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail size={18} className="shrink-0 text-gold" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors duration-300 hover:text-gold"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-paper/10 py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-paper/50 md:flex-row">
            <p>
              © {year} {site.name} · {site.oab} · Todos os direitos reservados.
            </p>
            <Link
              href="/politica-de-privacidade"
              className="transition-colors duration-300 hover:text-gold"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
