import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCta } from "@/components/sections/ContactCta";
import { IconCheck } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Sobre a Advogada Joice Crespilho | Mais de 20 Anos de Experiência",
  description:
    "Conheça a trajetória de Joice Crespilho: mais de 20 anos de advocacia estratégica em Direito Empresarial, Previdenciário, Família e Civil, com atendimento personalizado.",
  alternates: { canonical: "/sobre" },
};

const values = [
  {
    title: "Ética",
    text: "Conduta rigorosamente alinhada aos princípios da advocacia, com expectativas realistas e transparência em cada orientação.",
  },
  {
    title: "Excelência técnica",
    text: "Estudo permanente e profundidade em cada caso — porque decisões importantes exigem fundamentos sólidos.",
  },
  {
    title: "Estratégia",
    text: "O Direito como ferramenta de decisão: cada caso recebe um plano de ação claro, com objetivos e etapas definidos.",
  },
  {
    title: "Humanização",
    text: "Por trás de cada processo existe uma história. Escuta atenta, discrição e respeito guiam todos os atendimentos.",
  },
];

const commitments = [
  "Atendimento conduzido diretamente pela advogada responsável",
  "Comunicação clara e constante sobre o andamento do caso",
  "Honorários transparentes, formalizados por escrito",
  "Sigilo absoluto sobre todas as informações compartilhadas",
  "Orientação honesta — inclusive quando o melhor caminho é não litigar",
];

export default function SobrePage() {
  return (
    <>
      {/* Abertura */}
      <section className="bg-ink py-20 md:py-28" aria-labelledby="sobre-hero">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow">Sobre a advogada</p>
              <h1
                id="sobre-hero"
                className="mt-5 font-display text-display-xl font-medium text-paper"
              >
                Joice Crespilho
              </h1>
              <div className="hairline mt-6" />
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-8 max-w-lg text-base font-light leading-relaxed text-paper/70">
                Advogada com mais de duas décadas de atuação, dedicada a uma
                convicção simples: questões jurídicas importantes merecem, ao
                mesmo tempo, o mais alto rigor técnico e um atendimento
                genuinamente humano.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200} className="mx-auto w-full max-w-md lg:max-w-none">
            <ImageFrame
              alt="Retrato profissional da advogada Joice Crespilho"
              placeholderLabel="Retrato principal — Dra. Joice"
              aspect="portrait"
              priority
            />
          </Reveal>
        </div>
      </section>

      {/* Trajetória */}
      <section className="section bg-paper" aria-labelledby="trajetoria-titulo">
        <div className="container max-w-3xl">
          <SectionHeading
            id="trajetoria-titulo"
            eyebrow="Trajetória"
            title="Duas décadas construindo confiança"
            align="left"
          />
          <Reveal delay={150}>
            <div className="mt-8 space-y-6 text-base font-light leading-relaxed text-smoke">
              <p>
                Ao longo de mais de 20 anos de advocacia, Joice Crespilho
                acompanhou empresários em decisões estratégicas, famílias em
                momentos delicados e segurados na conquista de benefícios
                construídos ao longo de uma vida de trabalho.
              </p>
              <p>
                Essa vivência em áreas distintas — Empresarial, Previdenciário,
                Família e Civil — formou uma característica rara: a capacidade
                de enxergar cada caso por inteiro. Uma questão societária que
                toca o patrimônio da família; um planejamento sucessório que
                envolve a empresa; uma aposentadoria que exige olhar
                contratual. No escritório, essas conexões não passam
                despercebidas.
              </p>
              <p>
                O modelo de atuação é deliberadamente seletivo: um número
                limitado de casos, para que cada cliente receba o que há de
                mais valioso em uma advocacia — tempo, atenção e dedicação da
                própria advogada.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="section bg-ink" aria-labelledby="valores-titulo">
        <div className="container">
          <SectionHeading
            id="valores-titulo"
            eyebrow="Princípios"
            title="Os valores que orientam cada caso"
            tone="dark"
          />
          <div className="mt-16 grid gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100} className="bg-ink">
                <div className="h-full p-8 lg:p-10">
                  <div className="hairline" />
                  <h3 className="mt-6 font-display text-2xl font-medium text-paper">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-paper/60">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compromissos */}
      <section className="section bg-paper" aria-labelledby="compromissos-titulo">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading
              id="compromissos-titulo"
              eyebrow="Compromisso com o cliente"
              title="O que você pode esperar do escritório"
              align="left"
            />
            <Reveal delay={150}>
              <ul className="mt-10 space-y-5">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <IconCheck size={20} className="mt-0.5 shrink-0 text-gold" />
                    <span className="text-sm font-light leading-relaxed text-smoke">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-10">
                <Button href="/contato">Agendar uma conversa</Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="mx-auto w-full max-w-md lg:max-w-none">
            <ImageFrame
              alt="Detalhe do escritório de advocacia, ambiente sóbrio e elegante"
              placeholderLabel="Foto ambiente — detalhe do escritório"
              aspect="landscape"
            />
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
