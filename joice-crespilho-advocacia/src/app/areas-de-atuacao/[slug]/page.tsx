import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areas, getArea } from "@/content/areas";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactCta } from "@/components/sections/ContactCta";
import { areaIcons, IconCheck } from "@/components/ui/icons";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const area = getArea(params.slug);
  if (!area) return {};
  return {
    title: area.seo.title,
    description: area.seo.description,
    alternates: { canonical: `/areas-de-atuacao/${area.slug}` },
    openGraph: {
      title: `${area.title} | ${site.name}`,
      description: area.seo.description,
    },
  };
}

export default function AreaPage({ params }: Props) {
  const area = getArea(params.slug);
  if (!area) notFound();

  const Icon = areaIcons[area.icon];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Áreas de Atuação",
        item: `${site.url}/areas-de-atuacao`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.title,
        item: `${site.url}/areas-de-atuacao/${area.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Abertura */}
      <section className="bg-ink py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <nav aria-label="Trilha de navegação" className="text-xs text-paper/50">
              <Link href="/" className="transition-colors hover:text-gold">
                Início
              </Link>
              <span aria-hidden className="mx-2 text-gold">
                /
              </span>
              <Link
                href="/areas-de-atuacao"
                className="transition-colors hover:text-gold"
              >
                Áreas de Atuação
              </Link>
              <span aria-hidden className="mx-2 text-gold">
                /
              </span>
              <span className="text-paper/80">{area.title}</span>
            </nav>
            <Icon size={44} className="mx-auto mt-10 text-gold" />
            <h1 className="mt-6 font-display text-display-xl font-medium text-paper">
              {area.heroTitle}
            </h1>
            <div className="hairline mx-auto mt-6" />
            <p className="mx-auto mt-8 max-w-2xl font-display text-xl italic leading-relaxed text-paper/80">
              {area.heroSubtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Introdução */}
      <section className="section bg-paper" aria-label="Introdução">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="space-y-6 text-base font-light leading-relaxed text-smoke">
              {area.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="first:font-display first:text-xl first:italic first:leading-relaxed first:text-ink">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problemas comuns */}
      <section className="section bg-ink" aria-labelledby="problemas-titulo">
        <div className="container max-w-4xl">
          <Reveal className="text-center">
            <p className="eyebrow">Situações comuns</p>
            <h2
              id="problemas-titulo"
              className="mt-4 font-display text-display-lg font-medium text-paper"
            >
              {area.problemsTitle}
            </h2>
            <div className="hairline mx-auto mt-6" />
          </Reveal>
          <ul className="mt-14 grid gap-px bg-paper/10 sm:grid-cols-2">
            {area.problems.map((problem, i) => (
              <Reveal key={problem} delay={(i % 2) * 80} className="bg-ink">
                <li className="flex h-full items-start gap-4 p-6 lg:p-8">
                  <span
                    aria-hidden
                    className="mt-2 block h-[7px] w-[7px] shrink-0 rotate-45 border border-gold"
                  />
                  <span className="text-sm font-light leading-relaxed text-paper/70">
                    {problem}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Soluções */}
      <section className="section bg-paper" aria-labelledby="solucoes-titulo">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Soluções</p>
            <h2
              id="solucoes-titulo"
              className="mt-4 font-display text-display-lg font-medium text-ink"
            >
              {area.solutionsTitle}
            </h2>
            <div className="hairline mx-auto mt-6" />
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {area.solutions.map((solution, i) => (
              <Reveal key={solution.title} delay={(i % 2) * 100}>
                <article className="h-full border-t border-ink/10 pt-8 transition-colors duration-500 hover:border-gold">
                  <h3 className="font-display text-2xl font-medium text-ink">
                    {solution.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-smoke">
                    {solution.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais da área */}
      <section className="section bg-paper pt-0" aria-labelledby="dif-area-titulo">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="border border-gold/40 p-10 lg:p-12">
              <p className="eyebrow">Por que este escritório</p>
              <h2
                id="dif-area-titulo"
                className="mt-4 font-display text-display-md font-medium text-ink"
              >
                Diferenciais na condução do seu caso
              </h2>
              <ul className="mt-8 space-y-4">
                {area.differentials.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <IconCheck size={20} className="mt-0.5 shrink-0 text-gold" />
                    <span className="text-sm font-light leading-relaxed text-smoke">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA da área */}
      <section className="bg-ink py-20 text-center md:py-24">
        <div className="container max-w-2xl">
          <Reveal>
            <h2 className="font-display text-display-lg font-medium text-paper">
              {area.cta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-paper/70">
              {area.cta.text}
            </p>
            <div className="mt-10">
              <Button href="/contato">Agendar uma conversa</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outras áreas — linkagem interna */}
      <section className="section bg-paper" aria-labelledby="outras-areas">
        <div className="container">
          <Reveal className="text-center">
            <h2 id="outras-areas" className="font-display text-display-md font-medium text-ink">
              Outras áreas de atuação
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-3">
            {areas
              .filter((a) => a.slug !== area.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/areas-de-atuacao/${other.slug}`}
                  className="group bg-paper p-8 text-center transition-colors duration-300 hover:bg-ink"
                >
                  <span className="font-display text-xl font-medium text-ink transition-colors duration-300 group-hover:text-paper">
                    {other.title}
                  </span>
                  <span className="mx-auto mt-3 block h-px w-8 bg-gold/50 transition-all duration-300 group-hover:w-14 group-hover:bg-gold" />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
