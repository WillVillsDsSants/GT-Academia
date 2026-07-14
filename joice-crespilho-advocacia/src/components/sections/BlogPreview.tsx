import Link from "next/link";
import { posts } from "@/content/posts";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/ui/icons";

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

/** Blog Jurídico — três artigos recentes em cards editoriais. */
export function BlogPreview() {
  const recent = posts.slice(0, 3);

  return (
    <section className="section bg-ink" aria-labelledby="blog-titulo">
      <div className="container">
        <SectionHeading
          id="blog-titulo"
          eyebrow="Blog jurídico"
          title="Conhecimento que orienta decisões"
          description="Artigos claros e objetivos sobre os temas que impactam a sua empresa, o seu patrimônio e a sua família."
          tone="dark"
        />

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {recent.map((post, i) => (
            <Reveal key={post.slug} delay={i * 120}>
              <article className="group flex h-full flex-col border-t border-paper/15 pt-8 transition-colors duration-500 hover:border-gold">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {post.category}
                </p>
                <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-paper">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors duration-300 group-hover:text-gold"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-paper/60">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between text-xs text-paper/40">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>{post.readingTime}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250} className="mt-14 text-center">
          <Button href="/blog" variant="outline-light">
            Ver todos os artigos
            <IconArrowRight size={16} />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
