import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como o escritório Joice Crespilho Advocacia trata e protege os seus dados pessoais, em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: false },
};

/**
 * [PLACEHOLDER] Texto-base de política de privacidade.
 * Deve ser revisado e adequado pela responsável antes da publicação.
 */
export default function PrivacidadePage() {
  return (
    <>
      <section className="bg-ink py-16 text-center md:py-20">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="eyebrow">Transparência</p>
            <h1 className="mt-5 font-display text-display-lg font-medium text-paper">
              Política de Privacidade
            </h1>
            <div className="hairline mx-auto mt-6" />
          </Reveal>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container max-w-2xl space-y-8 text-sm font-light leading-relaxed text-smoke">
          <p>
            O escritório {site.name} respeita a sua privacidade e trata os
            dados pessoais coletados por meio deste site em conformidade com a
            Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>

          <div>
            <h2 className="font-display text-2xl font-medium text-ink">
              Dados coletados
            </h2>
            <p className="mt-3">
              Coletamos apenas os dados fornecidos voluntariamente por você no
              formulário de contato: nome, e-mail, telefone e a descrição da
              sua solicitação. Esses dados são utilizados exclusivamente para
              retorno do contato e eventual atendimento jurídico.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-medium text-ink">
              Sigilo profissional
            </h2>
            <p className="mt-3">
              Além das obrigações da LGPD, todas as informações compartilhadas
              com o escritório são protegidas pelo sigilo profissional da
              advocacia, nos termos do Estatuto da OAB e do Código de Ética e
              Disciplina.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-medium text-ink">
              Seus direitos
            </h2>
            <p className="mt-3">
              Você pode, a qualquer momento, solicitar a confirmação, o acesso,
              a correção ou a exclusão dos seus dados pessoais pelo e-mail{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-gold underline underline-offset-2"
              >
                {site.email}
              </a>
              .
            </p>
          </div>

          <p className="border-l border-gold pl-5 text-xs">
            [PLACEHOLDER] Este texto é um modelo inicial e deve ser revisado e
            complementado (cookies, ferramentas de análise, bases legais)
            conforme os serviços efetivamente utilizados pelo site.
          </p>
        </div>
      </section>
    </>
  );
}
