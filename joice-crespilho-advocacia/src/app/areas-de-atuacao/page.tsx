import type { Metadata } from "next";
import Link from "next/link";
import { areas } from "@/content/areas";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import { areaIcons, IconArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Áreas de Atuação | Empresarial, Previdenciário, Família e Civil",
  description:
    "Conheça as áreas de atuação do escritório: Direito Empresarial, Previdenciário, de Família e Civil — com consultoria estratégica e atendimento personalizado.",
  alternates: { canonical: "/areas-de-atuacao" },
};

export default function AreasPage() {
  return (
    <>
      {/* Abertura */}
      <section className="bg-ink py-20 text-center md:py-28">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="eyebrow">Áreas de atuação</p>
            <h1 className="mt-5 font-display text-display-xl font-medium text-paper">
              Especialização com visão de conjunto
            </h1>
            <div className="hairline mx-auto mt-6" />
            <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-paper/70">
              Quatro áreas do Direito, um mesmo padrão: análise profunda,
              estratégia personalizada e acompanhamento próximo. E quando o seu
              caso atravessa mais de uma área, ele é tratado de forma
              integrada — como a vida real exige.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Lista de áreas */}
      <section className="section bg-paper">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {areas.map((area, i) => {
              const Icon = areaIcons[area.icon];
              return (
                <Reveal key={area.slug} delay={(i % 2) * 120}>
                  <Link
                    href={`/areas-de-atuacao/${area.slug}`}
                    className="group flex h-full flex-col border border-ink/10 p-10 shadow-card transition-all duration-500 ease-premium hover:border-gold/60 hover:shadow-card-hover lg:p-12"
                  >
                    <Icon size={40} className="text-gold" />
                    <h2 className="mt-6 font-display text-3xl font-medium text-ink">
                      {area.title}
                    </h2>
                    <div className="mt-4 h-px w-12 bg-gold/50 transition-all duration-500 ease-premium group-hover:w-20 group-hover:bg-gold" />
                    <p className="mt-5 flex-1 text-sm font-light leading-relaxed text-smoke">
                      {area.heroSubtitle}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      Conhecer a atuação
                      <IconArrowRight
                        size={14}
                        className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
