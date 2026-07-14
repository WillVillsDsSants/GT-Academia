import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconQuote } from "@/components/ui/icons";

/** Depoimentos — cards claros sobre fundo branco, aspas douradas. */
export function Testimonials() {
  return (
    <section className="section bg-paper" aria-labelledby="depoimentos-titulo">
      <div className="container">
        <SectionHeading
          id="depoimentos-titulo"
          eyebrow="A voz de quem confiou"
          title="Relações construídas sobre confiança"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 120}>
              <figure className="flex h-full flex-col border border-ink/10 bg-paper p-8 shadow-card transition-shadow duration-500 ease-premium hover:shadow-card-hover lg:p-10">
                <IconQuote size={32} className="text-gold" />
                <blockquote className="mt-6 flex-1">
                  <p className="font-display text-lg italic leading-relaxed text-ink">
                    “{t.quote}”
                  </p>
                </blockquote>
                <figcaption className="mt-8 border-t border-ink/10 pt-6">
                  <p className="text-sm font-semibold tracking-wide text-ink">
                    {t.author}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-smoke">
                    {t.context}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-xs text-smoke">
            Depoimentos publicados com autorização expressa dos clientes, em
            conformidade com as normas de publicidade da OAB.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
