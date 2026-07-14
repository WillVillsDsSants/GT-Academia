/**
 * Configuração central do site.
 * ATENÇÃO: os dados marcados como [PLACEHOLDER] devem ser substituídos
 * pelos dados reais do escritório antes da publicação.
 */
export const site = {
  name: "Joice Crespilho Advocacia",
  shortName: "Joice Crespilho",
  tagline: "Advocacia estratégica com atendimento humanizado",
  url: "https://www.joicecrespilho.adv.br", // [PLACEHOLDER] domínio real
  email: "contato@joicecrespilho.adv.br", // [PLACEHOLDER]
  phoneDisplay: "(11) 0000-0000", // [PLACEHOLDER]
  whatsapp: "5511900000000", // [PLACEHOLDER] apenas dígitos, com DDI
  oab: "OAB/SP 000.000", // [PLACEHOLDER]
  address: {
    street: "Endereço do escritório", // [PLACEHOLDER]
    city: "São Paulo",
    state: "SP",
  },
  instagram: "https://www.instagram.com/joicecrespilho", // [PLACEHOLDER]
  linkedin: "https://www.linkedin.com/in/joicecrespilho", // [PLACEHOLDER]
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
