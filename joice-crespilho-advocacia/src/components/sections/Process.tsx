import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    step: "Etapa 1",
    title: "Conversa inicial",
    text: "Um atendimento reservado, presencial ou on-line, para ouvir sua situação com atenção e entender o contexto completo.",
  },
  {
    step: "Etapa 2",
    title: "Análise e diagnóstico",
    text: "Estudo aprofundado dos documentos e da questão jurídica, com avaliação honesta de riscos, prazos e possibilidades.",
  },
  {
    step: "Etapa 3",
    title: "Estratégia personalizada",
    text: "Apresentação de um plano de ação claro e sob medida — com transparência total sobre honorários e próximos passos.",
  },
  {
    step: "Etapa 4",
    title: "Acompanhamento próximo",
    text: "Condução técnica do caso com comunicação constante: você é informado de cada movimentação relevante, do início ao fim.",
  },
];

/** Processo de Atendimento — linha do tempo horizontal com marcadores dourados. */
export function Process() {
  return (
    <section className="section bg-ink" aria-labelledby="processo-titulo">
      <div className="container">
        <SectionHeading
          id="processo-titulo"
          eyebrow="Como trabalhamos"
          title="Um caminho claro, do primeiro contato à solução"
          description="Método e transparência em cada etapa — para que você sempre saiba onde está e para onde vamos."
          tone="dark"
        />

        <ol className="relative mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Linha conectora (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 top-[5px] hidden h-px w-full bg-paper/15 lg:block"
          />
          {steps.map((item, i) => (
            <Reveal key={item.step} delay={i * 120}>
              <li className="relative">
                <span
                  aria-hidden
                  className="relative z-10 block h-[11px] w-[11px] rotate-45 border border-gold bg-ink"
                />
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                  {item.step}
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-paper/60">
                  {item.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={300} className="mt-16 text-center">
          <Button href="/contato">Iniciar a primeira etapa</Button>
        </Reveal>
      </div>
    </section>
  );
}
