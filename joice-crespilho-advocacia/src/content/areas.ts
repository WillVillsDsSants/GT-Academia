export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: "building" | "shield" | "family" | "scale";
  excerpt: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  problemsTitle: string;
  problems: string[];
  solutionsTitle: string;
  solutions: { title: string; text: string }[];
  differentials: string[];
  cta: { title: string; text: string };
  seo: { title: string; description: string };
};

export const areas: PracticeArea[] = [
  {
    slug: "direito-empresarial",
    title: "Direito Empresarial",
    shortTitle: "Empresarial",
    icon: "building",
    excerpt:
      "Consultoria jurídica estratégica, contratos sólidos e proteção para empresas que desejam crescer com segurança.",
    heroTitle: "Direito Empresarial",
    heroSubtitle:
      "Segurança jurídica para decisões de negócio — da estruturação da empresa à resolução de conflitos complexos.",
    intro: [
      "Toda decisão empresarial relevante tem uma dimensão jurídica. Contratos, sociedades, negociações e expansões envolvem riscos que, quando não são mapeados a tempo, transformam-se em passivos capazes de comprometer anos de trabalho.",
      "A atuação em Direito Empresarial da Joice Crespilho Advocacia é essencialmente consultiva e preventiva: antecipamos riscos, estruturamos operações e oferecemos ao empresário a tranquilidade de decidir com respaldo técnico — sem abrir mão da atuação firme quando o conflito é inevitável.",
    ],
    problemsTitle: "Situações que levam empresários a nos procurar",
    problems: [
      "Contratos assinados sem análise jurídica que geram prejuízos ou disputas.",
      "Conflitos entre sócios por ausência de acordo de sócios ou regras claras de governança.",
      "Inadimplência de clientes e fornecedores sem instrumentos eficazes de cobrança.",
      "Responsabilização pessoal de sócios por falhas na estruturação societária.",
      "Negociações relevantes conduzidas sem assessoria, em desvantagem técnica.",
      "Crescimento da empresa sem a estrutura jurídica acompanhar a operação.",
    ],
    solutionsTitle: "Como atuamos",
    solutions: [
      {
        title: "Consultoria preventiva contínua",
        text: "Acompanhamento jurídico permanente da operação, identificando riscos antes que se tornem litígios e apoiando decisões estratégicas do dia a dia.",
      },
      {
        title: "Contratos empresariais",
        text: "Elaboração, revisão e negociação de contratos com fornecedores, clientes e parceiros, com cláusulas que protegem efetivamente os interesses da empresa.",
      },
      {
        title: "Estruturação e questões societárias",
        text: "Constituição de sociedades, acordos de sócios, alterações societárias e prevenção de conflitos entre sócios, com visão de longo prazo.",
      },
      {
        title: "Negociação e resolução de conflitos",
        text: "Condução estratégica de negociações, mediações e, quando necessário, ações judiciais, sempre priorizando o resultado com o menor desgaste para o negócio.",
      },
    ],
    differentials: [
      "Mais de 20 anos de experiência em consultoria jurídica estratégica.",
      "Visão de negócio: pareceres claros e orientados à decisão, não apenas ao problema.",
      "Atendimento direto e personalizado — a empresária ou empresário fala com a advogada.",
      "Absoluta confidencialidade no tratamento de informações sensíveis.",
    ],
    cta: {
      title: "Sua empresa merece decidir com segurança.",
      text: "Agende uma conversa e descubra como a consultoria jurídica estratégica pode proteger e impulsionar o seu negócio.",
    },
    seo: {
      title: "Advogada de Direito Empresarial | Consultoria Jurídica para Empresas",
      description:
        "Consultoria jurídica estratégica para empresas: contratos, questões societárias e prevenção de conflitos. Mais de 20 anos de experiência. Agende uma conversa.",
    },
  },
  {
    slug: "direito-previdenciario",
    title: "Direito Previdenciário",
    shortTitle: "Previdenciário",
    icon: "shield",
    excerpt:
      "Aposentadorias, benefícios e planejamento previdenciário conduzidos com técnica, clareza e proximidade.",
    heroTitle: "Direito Previdenciário",
    heroSubtitle:
      "O benefício que você construiu ao longo da vida merece ser conquistado da forma correta — e no valor correto.",
    intro: [
      "Poucas áreas do Direito tocam tão diretamente a vida das pessoas quanto a previdenciária. Uma aposentadoria concedida com valor menor do que o devido, um benefício negado indevidamente ou a falta de planejamento podem representar perdas significativas — e, muitas vezes, irreversíveis.",
      "Atuamos para que cada cliente compreenda exatamente a sua situação previdenciária e tome a melhor decisão possível: com análise minuciosa de documentos, cálculos criteriosos e uma comunicação clara, sem juridiquês.",
    ],
    problemsTitle: "Situações mais comuns",
    problems: [
      "Pedido de aposentadoria negado ou concedido com valor abaixo do devido.",
      "Tempo de contribuição ou atividade especial não reconhecidos pelo INSS.",
      "Dúvida sobre o melhor momento e a melhor regra para se aposentar.",
      "Benefício por incapacidade negado ou cessado indevidamente.",
      "Pensão por morte e benefícios a dependentes com exigências indevidas.",
      "Necessidade de revisão de benefício já concedido.",
    ],
    solutionsTitle: "Como atuamos",
    solutions: [
      {
        title: "Planejamento previdenciário",
        text: "Estudo completo do histórico contributivo com simulação de cenários, para identificar a regra mais vantajosa e o momento ideal da aposentadoria.",
      },
      {
        title: "Concessão de benefícios",
        text: "Condução de requerimentos administrativos junto ao INSS com documentação sólida, reduzindo o risco de indeferimentos e atrasos.",
      },
      {
        title: "Revisão de benefícios",
        text: "Análise técnica de benefícios já concedidos para identificar erros de cálculo e períodos não computados, buscando as diferenças devidas.",
      },
      {
        title: "Atuação judicial",
        text: "Quando a via administrativa não é suficiente, conduzimos a ação judicial com estratégia e acompanhamento próximo em todas as fases.",
      },
    ],
    differentials: [
      "Análise individualizada — cada caso recebe um estudo próprio, nunca uma solução padronizada.",
      "Comunicação clara sobre prazos, chances e etapas do processo.",
      "Experiência de mais de duas décadas em casos previdenciários complexos.",
      "Atendimento humanizado em um momento sensível da vida do cliente.",
    ],
    cta: {
      title: "Entenda o que você realmente tem direito a receber.",
      text: "Agende uma análise do seu caso e tome sua decisão previdenciária com base em informação técnica e confiável.",
    },
    seo: {
      title: "Advogada Previdenciária | Aposentadorias, Benefícios e Planejamento",
      description:
        "Planejamento previdenciário, aposentadorias, revisões e benefícios do INSS com análise técnica individualizada. Mais de 20 anos de experiência. Agende uma análise.",
    },
  },
  {
    slug: "direito-de-familia",
    title: "Direito de Família",
    shortTitle: "Família",
    icon: "family",
    excerpt:
      "Questões familiares conduzidas com sensibilidade, discrição e a firmeza técnica que o momento exige.",
    heroTitle: "Direito de Família",
    heroSubtitle:
      "Momentos delicados pedem mais do que técnica jurídica: pedem escuta, discrição e uma condução que proteja o que realmente importa.",
    intro: [
      "Questões de família raramente são apenas jurídicas. Divórcios, guarda de filhos, pensão e partilha de bens envolvem histórias, vínculos e emoções — e é exatamente por isso que precisam ser conduzidas com equilíbrio entre acolhimento e rigor técnico.",
      "Nossa atuação prioriza, sempre que possível, soluções consensuais que preservem relações e reduzam o desgaste emocional. Quando o consenso não é possível, atuamos com firmeza para proteger os direitos e os interesses de quem representamos.",
    ],
    problemsTitle: "Situações que acompanhamos",
    problems: [
      "Divórcio e dissolução de união estável, consensuais ou litigiosos.",
      "Definição de guarda, convivência e questões relativas aos filhos.",
      "Fixação, revisão ou execução de pensão alimentícia.",
      "Partilha de bens e proteção patrimonial na separação.",
      "Reconhecimento e dissolução de união estável.",
      "Planejamento familiar e sucessório para prevenir conflitos futuros.",
    ],
    solutionsTitle: "Como atuamos",
    solutions: [
      {
        title: "Solução consensual em primeiro lugar",
        text: "Buscamos acordos equilibrados por meio de negociação e mediação, preservando relações familiares e acelerando a resolução.",
      },
      {
        title: "Condução estratégica do litígio",
        text: "Quando o acordo não é possível, conduzimos o processo com estratégia, técnica e acompanhamento próximo em cada decisão.",
      },
      {
        title: "Proteção dos filhos",
        text: "Em questões de guarda, convivência e alimentos, o bem-estar das crianças e adolescentes orienta toda a condução do caso.",
      },
      {
        title: "Planejamento e prevenção",
        text: "Pactos antenupciais, contratos de convivência e planejamento sucessório para organizar o patrimônio e evitar disputas futuras.",
      },
    ],
    differentials: [
      "Atendimento reservado, com absoluta discrição e sigilo.",
      "Escuta atenta: antes da estratégia jurídica, compreendemos a história.",
      "Experiência em negociações delicadas e litígios de alta complexidade.",
      "Orientação clara para decisões que impactam toda a família.",
    ],
    cta: {
      title: "Você não precisa atravessar esse momento sem orientação.",
      text: "Agende uma conversa reservada e entenda seus direitos e caminhos com clareza e acolhimento.",
    },
    seo: {
      title: "Advogada de Família | Divórcio, Guarda, Pensão e Partilha",
      description:
        "Atuação em divórcio, guarda de filhos, pensão alimentícia e partilha de bens com sensibilidade, discrição e firmeza técnica. Agende uma conversa reservada.",
    },
  },
  {
    slug: "direito-civil",
    title: "Direito Civil",
    shortTitle: "Civil",
    icon: "scale",
    excerpt:
      "Contratos, responsabilidade civil, questões imobiliárias e sucessões com orientação preventiva e defesa consistente.",
    heroTitle: "Direito Civil",
    heroSubtitle:
      "Da assinatura de um contrato à proteção do seu patrimônio: orientação jurídica para as relações que estruturam a sua vida.",
    intro: [
      "O Direito Civil está presente nas relações mais importantes da vida: contratos, imóveis, patrimônio, heranças e reparação de danos. Nessas questões, a diferença entre uma boa e uma má condução jurídica costuma ser sentida por anos.",
      "Atuamos de forma preventiva — orientando antes da assinatura, da compra ou da decisão — e de forma contenciosa, com defesa técnica e consistente quando o conflito já está instalado.",
    ],
    problemsTitle: "Situações mais frequentes",
    problems: [
      "Contratos descumpridos, abusivos ou assinados sem a devida análise.",
      "Danos materiais e morais que exigem reparação.",
      "Compra, venda e locação de imóveis sem segurança jurídica.",
      "Cobranças indevidas e negativações irregulares.",
      "Inventários que se arrastam por falta de condução adequada.",
      "Ausência de planejamento sucessório, gerando conflitos entre herdeiros.",
    ],
    solutionsTitle: "Como atuamos",
    solutions: [
      {
        title: "Consultoria contratual",
        text: "Elaboração, análise e revisão de contratos civis, garantindo que cada cláusula proteja seus interesses antes da assinatura.",
      },
      {
        title: "Responsabilidade civil",
        text: "Atuação em ações de indenização por danos materiais e morais, tanto na defesa quanto na busca pela reparação devida.",
      },
      {
        title: "Direito imobiliário",
        text: "Assessoria em compra, venda, locação e regularização de imóveis, com análise documental completa e prevenção de riscos.",
      },
      {
        title: "Sucessões e inventários",
        text: "Condução de inventários judiciais e extrajudiciais e estruturação de planejamento sucessório para proteger o patrimônio familiar.",
      },
    ],
    differentials: [
      "Orientação preventiva que evita litígios longos e custosos.",
      "Análise documental minuciosa em operações patrimoniais relevantes.",
      "Atuação integrada com as áreas de família e empresarial quando o caso exige.",
      "Transparência sobre riscos, custos e expectativas desde a primeira conversa.",
    ],
    cta: {
      title: "Proteja hoje as decisões que definem o seu amanhã.",
      text: "Agende uma conversa e receba orientação jurídica clara para o seu contrato, imóvel ou questão patrimonial.",
    },
    seo: {
      title: "Advogada Cível | Contratos, Indenizações, Imóveis e Sucessões",
      description:
        "Atuação em contratos, responsabilidade civil, direito imobiliário, inventários e planejamento sucessório. Orientação preventiva e defesa consistente.",
    },
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
