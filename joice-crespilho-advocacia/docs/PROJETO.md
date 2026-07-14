# Joice Crespilho Advocacia — Documentação do Projeto

Site institucional premium. Este documento é a especificação completa: conceito criativo, design system, arquitetura da informação, wireframes, SEO e engenharia.

---

## 1. Conceito Criativo

### Direção: "Autoridade Serena"

O site traduz os arquétipos **Sábio** (principal) e **Governante** (secundário) em uma experiência que transmite: *"Estou diante de uma advogada experiente, confiável e preparada para resolver questões complexas com profissionalismo."*

| Arquétipo | Tradução em design |
|---|---|
| **Sábio** — conhecimento, estratégia, orientação | Tipografia serifada editorial; blog educativo; copy que explica antes de vender; FAQ transparente; hierarquia clara que "orienta" o olhar |
| **Governante** — autoridade, liderança, segurança | Fundos pretos profundos; composição simétrica e ordenada; grid rígido; detalhes dourados como "selo" de excelência; cantos retos (nada arredondado/informal) |

### Princípios visuais
1. **Ritmo preto/branco** — as seções alternam fundo `#111111` (autoridade) e `#FFFFFF` (clareza), criando cadência editorial. O dourado nunca é fundo: é sempre **detalhe** (linhas, eyebrows, ícones, molduras) — escassez que gera valor.
2. **Linha fina dourada** — elemento gráfico assinatura: hairline de 1px sob títulos, molduras deslocadas nas fotos, marcadores losangulares na timeline.
3. **Espaço em branco generoso** — seções com 80–128px de respiro vertical; máximo de 2 colunas de texto; largura de leitura limitada (65–72ch).
4. **Simetria** — grids 2/3/4 colunas centrados, heroes com composição 50/50.
5. **Movimento discreto** — apenas fade + translate sutil (24px) ao rolar; nada que "performe".

**O que foi deliberadamente evitado:** balança/martelo como clichê central (a balança existe apenas como ícone de linha na área Civil), cores vibrantes, gradientes, cantos arredondados, stock photos genéricas, excesso de texto, carrosséis automáticos.

---

## 2. Design System

### 2.1 Tokens de cor (paleta fechada — nunca criar novas cores)

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#111111` | Fundos de autoridade, texto principal, botão hover |
| `paper` | `#FFFFFF` | Fundos claros, texto sobre preto |
| `gold` | `#B08A3C` | **Somente detalhe**: linhas, eyebrows, ícones, CTAs, hover |
| `smoke` | `#7C7C7C` | Texto secundário sobre branco |

Variações permitidas: **apenas opacidade** das cores acima (`paper/70`, `ink/10`, `gold/40`...). Isso mantém a paleta fechada e gera toda a escala de cinzas necessária.

Regras de contraste (WCAG AA):
- Texto sobre `ink`: `paper` ou `paper/70` (mínimo /70 para corpo).
- Texto sobre `gold`: sempre `ink` (5,9:1). Nunca branco sobre dourado em texto (3,2:1 — reprova).
- `smoke` sobre `paper`: 4,6:1 — aprovado para corpo de texto.

### 2.2 Tipografia

| Papel | Fonte | Pesos | Uso |
|---|---|---|---|
| Display | **Cormorant Garamond** (`--font-display`) | 400/500/600 + itálico | Títulos, logo, citações, números |
| Texto | **Montserrat** (`--font-sans`) | 300/400/500/600 | Corpo, navegação, botões, labels |

Escala fluida (tokens em `tailwind.config.ts`):
- `text-display-xl` → clamp(2.5rem–4.25rem) — H1 de heroes
- `text-display-lg` → clamp(2rem–3rem) — H2 de seções
- `text-display-md` → clamp(1.5rem–2rem) — H3 destacados
- Corpo: 16px `font-light`, `leading-relaxed`
- **Eyebrow** (classe `.eyebrow`): 12px, uppercase, tracking 0.28em, dourado — abre toda seção
- Botões/labels: 12px, uppercase, tracking 0.15–0.2em

Itálico serifado é usado como recurso de ênfase emocional ("*o seu futuro*", citações) — o toque "humano" dentro da sobriedade.

### 2.3 Espaçamento e grid
- Base 4px (escala padrão Tailwind).
- Container: **1200px** máx., padding lateral 24px (mobile) / 32px (md+), sempre centrado.
- Seções: classe `.section` = `py-20 md:py-28 lg:py-32`.
- Grids: 1 col (mobile) → 2 (sm/md) → 3–4 (lg). Gap 32–48px. Grids "colados" usam `gap-px` com fundo `paper/10` (linhas finas divisórias — identidade).

### 2.4 Componentes e estados

**Botões** (`ui/Button.tsx`) — cantos retos, uppercase, tracking amplo, padding 32×16:
- `gold` (primário): fundo dourado + texto preto → hover: fundo preto + texto branco
- `outline-light`: borda `paper/40` + texto branco → hover: borda e texto dourados
- `outline-dark`: borda `ink/25` + texto preto → hover: borda e texto dourados
- Estados: hover (300ms ease-premium), focus-visible (outline dourado 2px offset 3px), disabled (opacity).

**Cards**: fundo da seção + borda `1px` de baixa opacidade; hover eleva sombra (`shadow-card` → `shadow-card-hover`) ou acende a borda dourada; a hairline interna cresce de 40→64px no hover.

**Formulários** (`forms/ContactForm.tsx`): labels uppercase pequenas, inputs de borda fina `ink/20` com cantos retos, foco = borda dourada (sem glow), asterisco de obrigatório em dourado, checkbox LGPD, mensagens de estado com `role="status"`.

**Ícones** (`ui/icons.tsx`): sistema próprio de linha fina (stroke 1.25, 24px grid, `currentColor`) — consistente com as "linhas finas" da identidade. Nunca ícones sólidos/preenchidos.

**Sombras**: apenas 2 níveis (`card`, `card-hover`), sempre `rgba(17,17,17,…)` de baixíssima opacidade — percepção de papel sobre papel, não "material design".

**Bordas**: 1px em tudo; nunca raio de borda (cantos retos em todo o site).

### 2.5 Animações (todas discretas)
| Animação | Onde | Especificação |
|---|---|---|
| Reveal on scroll | Todas as seções | fade + translateY(24px), 900ms, `cubic-bezier(0.22,1,0.36,1)`, dispara 1× via IntersectionObserver, stagger 60–120ms |
| Hairline que cresce | Cards, nav | width 40→64px, 500ms |
| Underline da nav | Header | after: width 0→100%, 300ms |
| Hover de botão | Botões | troca de cor de fundo/borda, 300ms |
| Seta que desliza | "Saiba mais" | translateX(4px) no hover do card |
| Header ao rolar | Header | ganha `backdrop-blur` + hairline dourada inferior |

`prefers-reduced-motion: reduce` desativa tudo (implementado em `globals.css`).

---

## 3. Arquitetura da Informação

### Mapa do site
```
/                              Home (funil completo)
├── /sobre                     Sobre a advogada
├── /areas-de-atuacao          Hub das áreas
│   ├── /direito-empresarial
│   ├── /direito-previdenciario
│   ├── /direito-de-familia
│   └── /direito-civil
├── /blog                      Listagem de artigos
│   └── /blog/[slug]           Artigo individual
├── /contato                   Formulário + canais diretos
├── /politica-de-privacidade
├── sitemap.xml · robots.txt  (gerados pelo App Router)
└── 404 personalizada
```

### Fluxo de conversão (UX)
1. **Descoberta** → Hero responde em 3s "quem é, para quem, por quê" + prova (20+ anos).
2. **Confiança** → Sobre (rosto e história) → Áreas (competência) → Diferenciais (por que ela) → Processo (remove o medo do "como funciona") → Depoimentos (prova social) → FAQ (objeções: honorários, prazos, sigilo).
3. **Ação** → CTA persistente no header ("Agendar conversa"), CTA de rodapé em toda página, WhatsApp como caminho de menor atrito. **Máximo 2 cliques até o contato de qualquer ponto do site.**

Cada página de área é uma *landing page* completa (intro → dor → solução → diferencial → CTA), pronta para receber tráfego direto de Google/anúncios.

---

## 4. Wireframes em texto

### Home
```
┌──────────────────────────────────────────────────────┐
│ HEADER fixo (preto) — logo | nav | [Agendar conversa]│
├──────────────────────────────────────────────────────┤
│ HERO (preto)                                         │
│ ┌──────────────────────┐  ┌──────────────────────┐  │
│ │ EYEBROW dourado      │  │                      │  │
│ │ H1 serifado 2 linhas │  │   RETRATO 3:4        │  │
│ │ subtítulo cinza      │  │   moldura dourada    │  │
│ │ [CTA] [CTA outline]  │  │   deslocada          │  │
│ │ ── 20+ | 4 | 1:1 ──  │  │                      │  │
│ └──────────────────────┘  └──────────────────────┘  │
├──────────────────────────────────────────────────────┤
│ SOBRE (branco)   foto esq. | narrativa + citação dir.│
├──────────────────────────────────────────────────────┤
│ ÁREAS (preto)    heading central + 4 cards divididos │
│                  por linhas finas [ícone/título/txt] │
├──────────────────────────────────────────────────────┤
│ DIFERENCIAIS (branco)  grid 3×2 numerado 01–06       │
├──────────────────────────────────────────────────────┤
│ PROCESSO (preto)  timeline horizontal ◆──◆──◆──◆     │
├──────────────────────────────────────────────────────┤
│ DEPOIMENTOS (branco)  3 cards com aspas douradas     │
├──────────────────────────────────────────────────────┤
│ BLOG (preto)     3 artigos editoriais + [ver todos]  │
├──────────────────────────────────────────────────────┤
│ FAQ (branco)     acordeão centralizado máx. 768px    │
├──────────────────────────────────────────────────────┤
│ CTA FINAL        painel preto com moldura dourada    │
│                  [Agendar] [WhatsApp]                │
├──────────────────────────────────────────────────────┤
│ FOOTER (preto)   4 colunas + barra legal             │
└──────────────────────────────────────────────────────┘
```

### Página de área
```
Breadcrumb → ícone + H1 central + subtítulo itálico (preto)
→ Introdução 2 §§, 1º em serifa itálica (branco)
→ "Situações comuns": grid 2 col c/ marcadores ◆ (preto)
→ "Como atuamos": 4 blocos com borda superior (branco)
→ Diferenciais: caixa com moldura dourada (branco)
→ CTA da área (preto)
→ Outras áreas: 3 links cruzados (branco)
```

### Responsividade (mobile-first)
| Breakpoint | Comportamento |
|---|---|
| `< 640px` | 1 coluna; hero empilha (texto → foto); menu hambúrguer em tela cheia; botões full-width; stats em 3 col compactas |
| `640–1023` | grids passam a 2 col; timeline 2×2 |
| `≥ 1024` | layout completo: heroes 50/50, áreas 4 col, diferenciais 3 col, nav horizontal |
Tipografia fluida via `clamp()` — sem saltos. Alvos de toque ≥ 44px.

---

## 5. Estratégia de SEO

### Palavras-chave por página
| Página | Primárias | Secundárias/long-tail |
|---|---|---|
| Home | advogada [cidade], escritório de advocacia | advocacia estratégica, consultoria jurídica |
| Empresarial | advogado empresarial, consultoria jurídica para empresas | contratos empresariais, acordo de sócios, assessoria jurídica empresarial |
| Previdenciário | advogado previdenciário, aposentadoria INSS | planejamento previdenciário, revisão de benefício, aposentadoria negada |
| Família | advogado de família, divórcio | guarda de filhos, pensão alimentícia, partilha de bens |
| Civil | advogado cível | inventário, planejamento sucessório, indenização, contratos |
| Blog | (long-tail educacional) | "como funciona…", "o que fazer quando…", "quanto tempo demora…" |

### Implementação técnica (já no código)
- **Títulos/meta descriptions** individuais por página via `generateMetadata`; template `%s | Joice Crespilho Advocacia`.
- **URLs semânticas** em português (`/areas-de-atuacao/direito-de-familia`), canônicas em todas as rotas.
- **Headings**: 1 único H1 por página; H2 por seção; hierarquia nunca pulada.
- **Schema.org**: `LegalService` (global), `FAQPage` (home), `BreadcrumbList` (áreas), `Article` (posts).
- **Open Graph + Twitter Card** globais e por artigo (criar `public/og-image.jpg` 1200×630).
- **Sitemap.xml e robots.txt** dinâmicos (`app/sitemap.ts`, `app/robots.ts`).
- **Linkagem interna**: home→áreas→áreas irmãs; blog→contato; footer lista tudo; breadcrumbs.
- **Performance/CWV**: SSG (tudo estático), `next/font` com `display:swap` (zero CLS de fonte), `next/image` AVIF/WebP + lazy loading (a foto do hero usa `priority` para LCP), JS mínimo (3 client components: Header, Reveal, Form).

### Ações externas recomendadas
Google Business Profile (advocacia é busca local), diretórios OAB/jurídicos, 2 artigos/mês no blog respondendo dúvidas reais de clientes, Search Console desde o dia 1.

---

## 6. Árvore de componentes

```
RootLayout (fonts, metadata, JsonLd LegalService)
├── Header (client) ─ Logo · NavDesktop · MobileMenu
├── main
│   ├── HomePage: Hero → About → PracticeAreas → Differentials →
│   │             Process → Testimonials → BlogPreview → Faq → ContactCta
│   ├── SobrePage · AreasPage · AreaPage[slug] · BlogPage ·
│   │   PostPage[slug] · ContatoPage (→ ContactForm client) · Privacidade
│   └── (todas usam) SectionHeading · Reveal (client) · Button ·
│       ImageFrame · JsonLd · icons
└── Footer
```
Client components: **apenas** `Header`, `Reveal`, `ContactForm`. Todo o resto é Server Component (HTML estático).

## 7. Estrutura de pastas

```
joice-crespilho-advocacia/
├── docs/PROJETO.md            ← este documento
├── public/images/             ← fotos reais (substituir placeholders)
├── src/
│   ├── app/                   ← rotas (App Router) + sitemap/robots
│   ├── components/
│   │   ├── layout/  (Header, Footer)
│   │   ├── sections/ (9 seções da home, reutilizadas nas internas)
│   │   ├── ui/       (Button, SectionHeading, Reveal, ImageFrame, icons)
│   │   ├── forms/    (ContactForm)
│   │   └── seo/      (JsonLd)
│   ├── content/     ← TODO o texto do site (areas, posts, faq, testimonials)
│   └── lib/site.ts  ← dados do escritório (1 lugar só)
└── tailwind.config.ts ← design tokens
```
**Princípio:** conteúdo separado de apresentação — o texto inteiro do site edita-se em `src/content/` sem tocar em componente.

## 8. Direção fotográfica (para a produção das fotos reais)

- **Estilo**: iluminação natural suave, ambientes de escritório elegantes, roupas sociais, fundo limpo; foco sempre na profissional.
- **Tratamento**: alto contraste, saturação reduzida (~-35%, já aplicado via CSS `grayscale-[35%]`), tons neutros.
- **Necessárias**: retrato principal 3:4 (hero, fundo escuro), retrato ambiente 3:4 (sobre), detalhe do escritório 4:3, og-image 1200×630.
- Salvar em `public/images/` e passar `src` ao componente `ImageFrame`.

## 9. Justificativa da stack

**Next.js 14 (App Router) + TypeScript + Tailwind** — exatamente a stack pedida, e a correta para o caso: site 100% estático (SSG) = performance máxima e hospedagem barata (Vercel); Server Components = JS mínimo no cliente; metadata/sitemap/robots nativos = SEO técnico sem plugins; Tailwind = design tokens auditáveis (paleta fechada é *enforçada* pelo config); TypeScript = conteúdo tipado (impossível criar área sem CTA, por exemplo).

## 10. Recomendações de evolução

1. **Imediato (antes do go-live)**: substituir os `[PLACEHOLDER]` em `src/lib/site.ts` (telefone, endereço, OAB, domínio); fotos profissionais; validar depoimentos com a seccional da OAB (Provimento 205/2021) — alternativa segura: trocar a seção por "Formação e Reconhecimento"; revisar a política de privacidade.
2. **Curto prazo**: conectar o formulário a uma API Route + Resend/SendGrid (hoje usa `mailto:`); Google Business Profile; Search Console; analytics respeitoso (Plausible/Umami, sem banner de cookies).
3. **Médio prazo**: CMS headless para o blog (Sanity/Contentlayer + MDX) quando a produção de conteúdo escalar; página de artigos por categoria; testes E2E (Playwright) do fluxo de contato.
4. **Longo prazo**: agendamento on-line integrado (Cal.com) na página de contato; newsletter jurídica; versão em inglês se houver clientes internacionais.
