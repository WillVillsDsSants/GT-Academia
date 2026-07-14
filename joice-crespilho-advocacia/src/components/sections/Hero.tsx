import { Button } from "@/components/ui/Button";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Hero — fundo preto, composição em duas colunas simétricas:
 * mensagem à esquerda, retrato profissional à direita com moldura dourada.
 */
export function Hero() {
  return (
    <section className="bg-ink" aria-labelledby="hero-titulo">
      <div className="container grid items-center gap-16 py-20 md:py-28 lg:grid-cols-2 lg:gap-20 lg:py-32">
        {/* Mensagem */}
        <div>
          <Reveal>
            <p className="eyebrow">Advocacia Estratégica · Desde 2005</p>
          </Reveal>
          <Reveal delay={100}>
            <h1
              id="hero-titulo"
              className="mt-6 font-display text-display-xl font-medium text-paper"
            >
              Segurança jurídica para as decisões que definem{" "}
              <em className="italic text-gold">o seu futuro.</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-lg text-base font-light leading-relaxed text-paper/70">
              Há mais de 20 anos, a Joice Crespilho Advocacia orienta empresas
              e famílias em questões empresariais, previdenciárias, familiares
              e civis — unindo profundidade técnica, visão estratégica e um
              atendimento verdadeiramente próximo.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contato">Agendar uma conversa</Button>
              <Button href="/areas-de-atuacao" variant="outline-light">
                Áreas de atuação
              </Button>
            </div>
          </Reveal>

          {/* Indicadores de autoridade */}
          <Reveal delay={400}>
            <dl className="mt-14 grid grid-cols-3 gap-8 border-t border-paper/10 pt-8">
              {[
                { value: "20+", label: "Anos de experiência" },
                { value: "4", label: "Áreas de atuação" },
                { value: "1:1", label: "Atendimento direto" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-medium text-gold md:text-4xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-[11px] uppercase tracking-[0.15em] text-paper/50">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Retrato profissional */}
        <Reveal delay={200} className="mx-auto w-full max-w-md lg:max-w-none">
          <ImageFrame
            alt="Retrato profissional da advogada Joice Crespilho em escritório elegante"
            placeholderLabel="Retrato da Dra. Joice Crespilho"
            aspect="portrait"
            priority
          />
        </Reveal>
      </div>
    </section>
  );
}
