"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "@/components/ui/icons";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

/** Logotipo tipográfico da marca. */
function Logo() {
  return (
    <Link
      href="/"
      className="group flex flex-col leading-none"
      aria-label="Joice Crespilho Advocacia — página inicial"
    >
      <span className="font-display text-2xl font-medium tracking-wide text-paper">
        Joice Crespilho
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-[0.42em] text-gold">
        Advocacia
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu ao navegar e trava o scroll do body enquanto aberto
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
        scrolled
          ? "border-b border-gold/30 bg-ink/95 backdrop-blur-md"
          : "border-b border-transparent bg-ink"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Pular para o conteúdo
      </a>

      <div className="container flex h-20 items-center justify-between">
        <Logo />

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`relative py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 after:ease-premium hover:text-gold ${
                isActive(link.href)
                  ? "text-gold after:w-full"
                  : "text-paper/80 after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="border border-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-all duration-300 ease-premium hover:bg-gold hover:text-ink"
          >
            Agendar conversa
          </Link>
        </nav>

        {/* Botão do menu mobile */}
        <button
          type="button"
          className="p-2 text-paper transition-colors hover:text-gold lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <IconClose size={26} /> : <IconMenu size={26} />}
        </button>
      </div>

      {/* Menu mobile em tela cheia */}
      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navegação principal"
          className="fixed inset-0 top-20 z-40 flex flex-col bg-ink lg:hidden"
        >
          <ul className="container flex flex-1 flex-col justify-center gap-2">
            {navLinks.map((link, i) => (
              <li key={link.href} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block border-b border-paper/10 py-5 font-display text-3xl ${
                    isActive(link.href) ? "text-gold" : "text-paper"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-8">
              <Link
                href="/contato"
                className="inline-block border border-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
              >
                Agendar conversa
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
