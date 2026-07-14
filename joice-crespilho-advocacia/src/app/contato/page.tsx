import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site, whatsappLink } from "@/lib/site";
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconWhatsApp,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contato | Agende uma Conversa com a Advogada",
  description:
    "Agende um atendimento reservado, presencial ou on-line, com a advogada Joice Crespilho. Retorno em até 1 dia útil, com total discrição e sigilo.",
  alternates: { canonical: "/contato" },
};

const contactChannels = [
  {
    icon: IconWhatsApp,
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: whatsappLink("Olá! Gostaria de agendar uma conversa."),
    external: true,
  },
  {
    icon: IconPhone,
    label: "Telefone",
    value: site.phoneDisplay,
    href: `tel:+${site.whatsapp}`,
    external: false,
  },
  {
    icon: IconMail,
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
];

export default function ContatoPage() {
  return (
    <>
      {/* Abertura */}
      <section className="bg-ink py-20 text-center md:py-24">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="eyebrow">Contato</p>
            <h1 className="mt-5 font-display text-display-xl font-medium text-paper">
              Vamos conversar sobre o seu caso
            </h1>
            <div className="hairline mx-auto mt-6" />
            <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-paper/70">
              Preencha o formulário ou escolha o canal de sua preferência.
              Todo contato é tratado com discrição e sigilo profissional.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Formulário + canais */}
      <section className="section bg-paper">
        <div className="container grid gap-16 lg:grid-cols-5 lg:gap-20">
          {/* Formulário */}
          <Reveal className="lg:col-span-3">
            <h2 className="font-display text-display-md font-medium text-ink">
              Envie sua mensagem
            </h2>
            <div className="hairline mt-4" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          {/* Canais diretos */}
          <Reveal delay={150} className="lg:col-span-2">
            <h2 className="font-display text-display-md font-medium text-ink">
              Canais diretos
            </h2>
            <div className="hairline mt-4" />
            <ul className="mt-8 space-y-4">
              {contactChannels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-5 border border-ink/10 p-6 transition-all duration-300 ease-premium hover:border-gold"
                  >
                    <channel.icon size={24} className="shrink-0 text-gold" />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-smoke">
                        {channel.label}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-ink transition-colors duration-300 group-hover:text-gold">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Endereço */}
            <div className="mt-8 border border-ink/10 p-6">
              <div className="flex items-start gap-5">
                <IconMapPin size={24} className="mt-1 shrink-0 text-gold" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-smoke">
                    Escritório
                  </p>
                  <p className="mt-2 text-sm font-light leading-relaxed text-ink">
                    {site.address.street}
                    <br />
                    {site.address.city} — {site.address.state}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-smoke">
                    Atendimento presencial com hora marcada
                    <br />e atendimento on-line para todo o Brasil.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs leading-relaxed text-smoke">
              Horário de atendimento: segunda a sexta, das 9h às 18h.
              <br />
              Retornamos todas as mensagens em até 1 dia útil.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
