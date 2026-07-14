import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/lib/site";
import { IconWhatsApp } from "@/components/ui/icons";

/**
 * Chamada final para contato — bloco de alta conversão antes do rodapé.
 * Fundo branco com painel preto emoldurado por linha dourada.
 */
export function ContactCta() {
  return (
    <section className="section bg-paper" aria-labelledby="cta-titulo">
      <div className="container">
        <Reveal>
          <div className="relative mx-auto max-w-4xl bg-ink px-8 py-16 text-center md:px-16 md:py-20">
            {/* Moldura dourada interna — detalhe da identidade */}
            <div aria-hidden className="pointer-events-none absolute inset-3 border border-gold/40" />

            <p className="eyebrow relative">Dê o primeiro passo</p>
            <h2
              id="cta-titulo"
              className="relative mt-5 font-display text-display-lg font-medium text-paper"
            >
              Toda questão jurídica começa a ser resolvida{" "}
              <em className="italic text-gold">com uma boa conversa.</em>
            </h2>
            <p className="relative mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-paper/70">
              Agende um atendimento reservado — presencial ou on-line — e
              receba uma orientação clara sobre a sua situação, seus direitos
              e os caminhos possíveis.
            </p>
            <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contato">Agendar uma conversa</Button>
              <Button
                href={whatsappLink(
                  "Olá! Gostaria de agendar uma conversa com a Dra. Joice Crespilho."
                )}
                external
                variant="outline-light"
              >
                <IconWhatsApp size={18} />
                Falar pelo WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
