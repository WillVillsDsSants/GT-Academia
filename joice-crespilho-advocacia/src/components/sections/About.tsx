import { Button } from "@/components/ui/Button";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowRight } from "@/components/ui/icons";

/** Sobre a Advogada — fundo branco, foto à esquerda, narrativa à direita. */
export function About() {
  return (
    <section className="section bg-paper" aria-labelledby="sobre-titulo">
      <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal className="order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
          <ImageFrame
            alt="Joice Crespilho em seu escritório, em ambiente elegante e sóbrio"
            placeholderLabel="Foto ambiente — escritório"
            aspect="portrait"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Sobre a advogada</p>
            <h2
              id="sobre-titulo"
              className="mt-4 font-display text-display-lg font-medium text-ink"
            >
              Experiência que orienta.
              <br />
              Presença que acolhe.
            </h2>
            <div className="hairline mt-6" />
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-smoke">
              <p>
                Com mais de duas décadas de atuação, <strong className="font-medium text-ink">Joice Crespilho</strong>{" "}
                construiu uma advocacia que une o rigor técnico dos grandes
                escritórios à proximidade que só o atendimento individual
                permite.
              </p>
              <p>
                Cada cliente é recebido pessoalmente, cada caso é estudado em
                profundidade e cada estratégia é desenhada sob medida. Aqui,
                você não fala com intermediários: fala com a advogada que
                conduz o seu caso.
              </p>
              <p>
                Essa é a essência de uma advocacia consultiva e estratégica —
                que antecipa riscos, orienta decisões e defende interesses com
                a firmeza e a ética que questões importantes exigem.
              </p>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <blockquote className="mt-8 border-l border-gold pl-6">
              <p className="font-display text-xl italic text-ink">
                “Advocacia de excelência é técnica na medida exata — e humana
                em todos os momentos.”
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={350}>
            <div className="mt-10">
              <Button href="/sobre" variant="outline-dark">
                Conhecer a trajetória
                <IconArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
