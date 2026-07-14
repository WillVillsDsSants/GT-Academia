import Link from "next/link";
import { areas } from "@/content/areas";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { areaIcons, IconArrowRight } from "@/components/ui/icons";

/** Áreas de Atuação — grid simétrico 4 colunas de cards sóbrios. */
export function PracticeAreas() {
  return (
    <section className="section bg-ink" aria-labelledby="areas-titulo">
      <div className="container">
        <SectionHeading
          id="areas-titulo"
          eyebrow="Áreas de atuação"
          title="Atuação especializada, visão integrada"
          description="Quatro áreas conduzidas com a mesma profundidade técnica e o mesmo cuidado no atendimento — e integradas quando o seu caso exige."
          tone="dark"
        />

        <div className="mt-16 grid gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, i) => {
            const Icon = areaIcons[area.icon];
            return (
              <Reveal key={area.slug} delay={i * 100} className="bg-ink">
                <Link
                  href={`/areas-de-atuacao/${area.slug}`}
                  className="group flex h-full flex-col p-8 transition-colors duration-500 ease-premium hover:bg-paper/5 lg:p-10"
                >
                  <Icon size={36} className="text-gold" />
                  <h3 className="mt-6 font-display text-2xl font-medium text-paper">
                    {area.title}
                  </h3>
                  <div className="mt-4 h-px w-10 bg-gold/50 transition-all duration-500 ease-premium group-hover:w-16 group-hover:bg-gold" />
                  <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-paper/60">
                    {area.excerpt}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Saiba mais
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
  );
}
