import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const differentials = [
  {
    number: "01",
    title: "Atendimento personalizado",
    text: "Você é atendido diretamente pela advogada responsável — do primeiro contato à conclusão do caso, sem intermediários.",
  },
  {
    number: "02",
    title: "Mais de 20 anos de experiência",
    text: "Duas décadas de atuação em casos complexos, construindo repertório técnico e estratégico em quatro áreas do Direito.",
  },
  {
    number: "03",
    title: "Visão consultiva e estratégica",
    text: "Antes do litígio, a prevenção: orientação que antecipa riscos e transforma o Direito em ferramenta de decisão.",
  },
  {
    number: "04",
    title: "Comunicação clara",
    text: "Você entende cada etapa do seu caso, sem juridiquês. Informação transparente sobre prazos, riscos e possibilidades.",
  },
  {
    number: "05",
    title: "Ética e transparência",
    text: "Expectativas realistas, honorários claros e conduta rigorosamente alinhada aos princípios da advocacia.",
  },
  {
    number: "06",
    title: "Discrição absoluta",
    text: "Sigilo profissional e tratamento reservado de todas as informações — um compromisso inegociável do escritório.",
  },
];

/** Diferenciais — grid 3×2 numerado, tipografia serifada nos números. */
export function Differentials() {
  return (
    <section className="section bg-paper" aria-labelledby="diferenciais-titulo">
      <div className="container">
        <SectionHeading
          id="diferenciais-titulo"
          eyebrow="Por que a Joice Crespilho Advocacia"
          title="O padrão que você deve exigir de uma advocacia"
        />

        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, i) => (
            <Reveal key={item.number} delay={(i % 3) * 100}>
              <article className="group border-t border-ink/10 pt-8 transition-colors duration-500 ease-premium hover:border-gold">
                <span
                  aria-hidden
                  className="font-display text-4xl font-medium text-gold/60 transition-colors duration-500 group-hover:text-gold"
                >
                  {item.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-smoke">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
