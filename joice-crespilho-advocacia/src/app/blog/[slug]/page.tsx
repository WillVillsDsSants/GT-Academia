import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/content/posts";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactCta } from "@/components/sections/ContactCta";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.seoDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.seoDescription,
      publishedTime: post.date,
    },
  };
}

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.date,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: "Joice Crespilho",
      jobTitle: "Advogada",
    },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      {/* Cabeçalho do artigo */}
      <section className="bg-ink py-20 md:py-24">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <nav aria-label="Trilha de navegação" className="text-xs text-paper/50">
              <Link href="/" className="transition-colors hover:text-gold">
                Início
              </Link>
              <span aria-hidden className="mx-2 text-gold">
                /
              </span>
              <Link href="/blog" className="transition-colors hover:text-gold">
                Blog
              </Link>
            </nav>
            <p className="eyebrow mt-10">{post.category}</p>
            <h1 className="mt-5 font-display text-display-lg font-medium text-paper">
              {post.title}
            </h1>
            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-paper/50">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden className="h-px w-6 bg-gold/50" />
              <span>{post.readingTime}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Corpo do artigo */}
      <article className="section bg-paper">
        <div className="container max-w-2xl">
          <Reveal>
            <div className="space-y-6">
              {post.blocks.map((block, i) =>
                block.type === "h2" ? (
                  <h2
                    key={i}
                    className="pt-6 font-display text-3xl font-medium text-ink"
                  >
                    {block.text}
                  </h2>
                ) : (
                  <p
                    key={i}
                    className="text-base font-light leading-relaxed text-smoke"
                  >
                    {block.text}
                  </p>
                )
              )}
            </div>
          </Reveal>

          {/* Assinatura */}
          <Reveal delay={100}>
            <div className="mt-16 border-t border-ink/10 pt-8">
              <p className="font-display text-xl font-medium text-ink">
                Joice Crespilho
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-smoke">
                Advogada · {site.oab}
              </p>
            </div>
          </Reveal>

          {/* Nota de responsabilidade */}
          <Reveal delay={150}>
            <p className="mt-8 border-l border-gold pl-5 text-xs leading-relaxed text-smoke">
              Este conteúdo tem caráter exclusivamente informativo e não
              substitui a análise individualizada do seu caso por um advogado.
            </p>
          </Reveal>
        </div>
      </article>

      <ContactCta />
    </>
  );
}
