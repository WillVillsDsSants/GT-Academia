/**
 * DEPOIMENTOS — CONTEÚDO ILUSTRATIVO [PLACEHOLDER]
 * Substituir por depoimentos reais e autorizados.
 *
 * NOTA ÉTICA (OAB): o Provimento 205/2021 do CFOAB impõe limites à publicidade
 * na advocacia. Recomenda-se validar o uso de depoimentos de clientes com a
 * seccional da OAB antes da publicação; uma alternativa segura é substituir
 * esta seção por "Reconhecimento" (formação, atuação, publicações).
 */
export type Testimonial = { quote: string; author: string; context: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Encontrei mais do que uma advogada: encontrei alguém que entendeu o momento da minha empresa e apresentou soluções antes mesmo dos problemas aparecerem.",
    author: "M. R.",
    context: "Empresária — consultoria empresarial",
  },
  {
    quote:
      "Depois de anos de dúvidas sobre minha aposentadoria, recebi pela primeira vez uma explicação clara do que eu tinha direito. Conduziu tudo com precisão e me manteve informado em cada etapa.",
    author: "A. S.",
    context: "Cliente — planejamento previdenciário",
  },
  {
    quote:
      "Em um dos momentos mais difíceis da minha vida, fui atendida com respeito, discrição e firmeza. Sempre soube exatamente o que estava acontecendo no meu processo.",
    author: "C. L.",
    context: "Cliente — direito de família",
  },
];
