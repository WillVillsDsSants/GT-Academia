export type PostBlock = { type: "p" | "h2"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingTime: string;
  seoDescription: string;
  blocks: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "planejamento-previdenciario-por-que-comecar-antes",
    title: "Planejamento previdenciário: por que começar muito antes da aposentadoria",
    excerpt:
      "Decidir quando e como se aposentar sem um estudo técnico pode custar caro. Entenda o que é o planejamento previdenciário e por que ele deve começar anos antes do pedido.",
    category: "Direito Previdenciário",
    date: "2026-06-15",
    readingTime: "6 min de leitura",
    seoDescription:
      "Entenda o que é planejamento previdenciário, por que ele deve começar anos antes da aposentadoria e como um estudo técnico evita perdas irreversíveis no benefício.",
    blocks: [
      {
        type: "p",
        text: "A aposentadoria é uma das decisões financeiras mais importantes da vida — e, paradoxalmente, uma das que mais se toma sem orientação técnica. Muitos segurados descobrem apenas depois da concessão que poderiam ter recebido um benefício maior se tivessem aguardado alguns meses, recolhido de forma diferente ou comprovado períodos que ficaram de fora do cálculo.",
      },
      { type: "h2", text: "O que é o planejamento previdenciário" },
      {
        type: "p",
        text: "O planejamento previdenciário é um estudo técnico e individualizado do histórico contributivo do segurado. Ele analisa todos os vínculos, contribuições e atividades exercidas, identifica pendências e inconsistências no CNIS e simula os cenários possíveis de aposentadoria em cada regra vigente.",
      },
      {
        type: "p",
        text: "O resultado é um mapa claro: quando o segurado pode se aposentar, por qual regra, com qual valor estimado — e, principalmente, o que pode ser feito desde já para melhorar esse resultado.",
      },
      { type: "h2", text: "Por que a antecedência faz diferença" },
      {
        type: "p",
        text: "Períodos de atividade especial, trabalho rural, contribuições em atraso e vínculos não registrados exigem documentação que se torna mais difícil de obter com o passar dos anos. Quanto antes essas pendências são identificadas, maiores as chances de regularizá-las adequadamente.",
      },
      {
        type: "p",
        text: "Além disso, pequenas decisões — como o valor da contribuição de um autônomo ou a data do requerimento — podem alterar de forma significativa o valor do benefício por décadas. Um estudo feito com antecedência permite ajustar a rota a tempo.",
      },
      { type: "h2", text: "Quando procurar orientação" },
      {
        type: "p",
        text: "O momento ideal é antes de qualquer requerimento: idealmente entre cinco e dez anos antes da aposentadoria pretendida. Mas mesmo quem está próximo de se aposentar — ou já recebeu uma resposta negativa do INSS — se beneficia de uma análise técnica antes de tomar a próxima decisão.",
      },
      {
        type: "p",
        text: "Cada história contributiva é única. Se você deseja entender a sua situação previdenciária com clareza, agende uma análise individualizada do seu caso.",
      },
    ],
  },
  {
    slug: "contratos-empresariais-clausulas-que-protegem-sua-empresa",
    title: "Contratos empresariais: cláusulas que protegem — ou expõem — a sua empresa",
    excerpt:
      "Grande parte dos litígios empresariais nasce de contratos mal redigidos. Conheça os pontos que merecem atenção antes de qualquer assinatura.",
    category: "Direito Empresarial",
    date: "2026-05-20",
    readingTime: "5 min de leitura",
    seoDescription:
      "Saiba quais cláusulas contratuais mais geram litígios empresariais e como a revisão jurídica preventiva protege sua empresa antes da assinatura.",
    blocks: [
      {
        type: "p",
        text: "Na rotina empresarial, contratos são assinados todos os dias — com fornecedores, clientes, prestadores e parceiros. E é justamente nessa rotina que mora o risco: cláusulas genéricas, obrigações mal definidas e omissões importantes costumam passar despercebidas até o momento em que o conflito surge.",
      },
      { type: "h2", text: "Onde nascem os litígios" },
      {
        type: "p",
        text: "A experiência mostra que a maior parte das disputas contratuais envolve pontos previsíveis: definição imprecisa do objeto e do escopo, ausência de critérios claros de reajuste e pagamento, penalidades desproporcionais, regras frágeis de rescisão e omissão sobre responsabilidade em caso de inadimplemento.",
      },
      {
        type: "p",
        text: "Em todos esses casos, o problema não é a existência do conflito — divergências são naturais nos negócios —, mas a falta de um contrato que estabeleça, com antecedência, como ele será resolvido.",
      },
      { type: "h2", text: "O papel da revisão preventiva" },
      {
        type: "p",
        text: "A revisão jurídica preventiva analisa o contrato sob a ótica dos riscos concretos daquela operação: o que acontece se a outra parte atrasar, entregar com defeito, romper o vínculo ou descumprir a confidencialidade. Cada resposta deve estar no texto — antes da assinatura.",
      },
      {
        type: "p",
        text: "Para empresas com volume relevante de contratações, a padronização de minutas e a consultoria contínua reduzem custos e criam consistência jurídica em toda a operação.",
      },
      { type: "h2", text: "Um investimento, não um custo" },
      {
        type: "p",
        text: "O valor investido na estruturação adequada de um contrato é, invariavelmente, muito inferior ao custo de um litígio — em dinheiro, tempo e desgaste. Se a sua empresa assina contratos relevantes sem análise jurídica, este é o momento de rever essa prática.",
      },
    ],
  },
  {
    slug: "inventario-e-planejamento-sucessorio-o-que-saber",
    title: "Inventário e planejamento sucessório: o que toda família precisa saber",
    excerpt:
      "A ausência de planejamento sucessório é uma das maiores fontes de conflito familiar e perda patrimonial. Entenda como organizar a sucessão em vida.",
    category: "Direito Civil e Família",
    date: "2026-04-10",
    readingTime: "6 min de leitura",
    seoDescription:
      "Entenda como funcionam o inventário e o planejamento sucessório, por que a falta de organização gera conflitos familiares e como proteger o patrimônio em vida.",
    blocks: [
      {
        type: "p",
        text: "Falar sobre sucessão ainda é um tabu para muitas famílias. O resultado desse silêncio, porém, é conhecido: inventários longos e custosos, patrimônio bloqueado por anos e conflitos que fragilizam vínculos familiares de forma, muitas vezes, definitiva.",
      },
      { type: "h2", text: "O que acontece sem planejamento" },
      {
        type: "p",
        text: "Sem organização prévia, a sucessão segue integralmente as regras legais e depende do inventário — judicial ou extrajudicial — para que os bens sejam partilhados. Nesse período, contas podem ficar bloqueadas, imóveis não podem ser vendidos e empresas familiares podem ter sua gestão comprometida.",
      },
      {
        type: "p",
        text: "Somam-se a isso os custos do processo e do imposto de transmissão, que surpreendem famílias que não se prepararam financeiramente para esse momento.",
      },
      { type: "h2", text: "Instrumentos de planejamento sucessório" },
      {
        type: "p",
        text: "O planejamento sucessório organiza, em vida, a forma como o patrimônio será transmitido. Entre os instrumentos mais utilizados estão o testamento, a doação com reserva de usufruto, o seguro de vida e, em contextos empresariais e patrimoniais mais complexos, a constituição de holding familiar.",
      },
      {
        type: "p",
        text: "Não existe fórmula única: o instrumento adequado depende da composição do patrimônio, da estrutura familiar e dos objetivos de quem planeja. Por isso, o primeiro passo é sempre um diagnóstico individualizado.",
      },
      { type: "h2", text: "E quando o inventário já é necessário" },
      {
        type: "p",
        text: "Quando o falecimento já ocorreu, a condução técnica do inventário faz toda a diferença: a escolha entre a via judicial e a extrajudicial, a correta avaliação dos bens e a mediação entre herdeiros aceleram a partilha e reduzem custos e conflitos.",
      },
      {
        type: "p",
        text: "Se a sua família precisa organizar uma sucessão — ou conduzir um inventário — busque orientação jurídica de confiança para tomar decisões seguras em um momento sensível.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
