import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark"; // dark = seção com fundo preto
  as?: "h1" | "h2";
  /** id do título, para uso com aria-labelledby na seção. */
  id?: string;
};

/**
 * Cabeçalho padrão de seção: sobrelinha dourada (eyebrow) + título serifado
 * + linha fina + descrição opcional. Garante consistência visual no site todo.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  as: Heading = "h2",
  id,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const titleColor = tone === "dark" ? "text-paper" : "text-ink";
  const descColor = tone === "dark" ? "text-paper/70" : "text-smoke";

  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <Heading
        id={id}
        className={`mt-4 font-display text-display-lg font-medium ${titleColor}`}
      >
        {title}
      </Heading>
      <div className={`hairline mt-6 ${isCenter ? "mx-auto" : ""}`} />
      {description && (
        <p className={`mt-6 text-base leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
