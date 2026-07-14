import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/posts";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import { IconArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Blog Jurídico | Artigos sobre Direito Empresarial, Previdenciário, Família e Civil",
  description:
    "Artigos claros e objetivos sobre temas jurídicos que impactam a sua empresa, o seu patrimônio e a sua família — escritos por quem tem mais de 20 anos de experiência.",
  alternates: { canonical: "/blog" },
};

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export default function BlogPage() {
  return (
    <>
      <section className="bg-ink py-20 text-center md:py-28">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="eyebrow">Blog jurídico</p>
            <h1 className="mt-5 font-display text-display-xl font-medium text-paper">
              Conhecimento que orienta decisões
            </h1>
            <div className="hairline mx-auto mt-6" />
            <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-paper/70">
              Conteúdo educativo, em linguagem clara, sobre os temas que
              impactam a sua empresa, o seu patrimônio e a sua família.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container max-w-4xl">
          <div className="space-y-0">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <article className="group border-b border-ink/10 py-12 first:pt-0 last:border-b-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                    {post.category}
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-ink">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors duration-300 hover:text-gold"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-smoke">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-6 text-xs text-smoke">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden className="h-px w-6 bg-gold/50" />
                    <span>{post.readingTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
                  >
                    Ler o artigo completo
                    <IconArrowRight
                      size={14}
                      className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
