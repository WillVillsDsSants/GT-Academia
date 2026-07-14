import { faq } from "@/content/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { IconChevronDown } from "@/components/ui/icons";

/** Schema.org FAQPage para rich results no Google. */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

/**
 * FAQ — acordeão com <details>/<summary> nativos: acessível por teclado
 * e leitores de tela sem necessidade de JavaScript.
 */
export function Faq() {
  return (
    <section className="section bg-paper" aria-labelledby="faq-titulo">
      <JsonLd data={faqSchema} />
      <div className="container max-w-3xl">
        <SectionHeading
          id="faq-titulo"
          eyebrow="Perguntas frequentes"
          title="Clareza desde o primeiro contato"
          description="Reunimos as dúvidas mais comuns de quem procura o escritório. Não encontrou a sua? Fale conosco."
        />

        <div className="mt-14">
          {faq.map((item, i) => (
            <Reveal key={item.question} delay={i * 60}>
              <details className="group border-b border-ink/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-display text-xl font-medium text-ink transition-colors duration-300 hover:text-gold [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <IconChevronDown
                    size={20}
                    className="shrink-0 text-gold transition-transform duration-300 ease-premium group-open:rotate-180"
                  />
                </summary>
                <p className="pb-6 pr-10 text-sm font-light leading-relaxed text-smoke">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
