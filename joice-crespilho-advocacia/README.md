# Joice Crespilho Advocacia — Site Institucional

Site institucional premium construído com **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

A especificação completa (conceito criativo, design system, wireframes, SEO, evolução) está em [`docs/PROJETO.md`](docs/PROJETO.md).

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção (SSG)
```

## Antes de publicar — checklist

- [ ] Substituir os `[PLACEHOLDER]` em `src/lib/site.ts` (telefone, WhatsApp, e-mail, endereço, OAB, domínio real)
- [ ] Adicionar as fotos reais em `public/images/` e passar `src` aos `ImageFrame` (especificações em `docs/PROJETO.md` §8)
- [ ] Criar `public/og-image.jpg` (1200×630)
- [ ] Validar/substituir os depoimentos ilustrativos (`src/content/testimonials.ts`) — ver nota sobre OAB no arquivo
- [ ] Revisar a política de privacidade
- [ ] Conectar o formulário de contato a um serviço de e-mail (hoje usa `mailto:`)

## Onde editar o quê

| O quê | Onde |
|---|---|
| Textos das áreas de atuação | `src/content/areas.ts` |
| Artigos do blog | `src/content/posts.ts` |
| FAQ | `src/content/faq.ts` |
| Depoimentos | `src/content/testimonials.ts` |
| Dados do escritório | `src/lib/site.ts` |
| Cores/tipografia (design tokens) | `tailwind.config.ts` |
