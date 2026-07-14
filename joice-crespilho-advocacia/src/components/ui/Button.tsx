import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "gold" | "outline-light" | "outline-dark" | "ghost-gold";

/**
 * Botão do Design System.
 * Cantos retos, tipografia em caixa alta com tracking amplo e transições
 * suaves — sobriedade premium, sem elementos decorativos.
 */
const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink border border-gold hover:bg-ink hover:text-paper hover:border-ink",
  "outline-light":
    "bg-transparent text-paper border border-paper/40 hover:border-gold hover:text-gold",
  "outline-dark":
    "bg-transparent text-ink border border-ink/25 hover:border-gold hover:text-gold",
  "ghost-gold": "bg-transparent text-gold border border-transparent hover:text-ink",
};

const baseClasses =
  "inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ease-premium focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  external?: boolean;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({
  children,
  variant = "gold",
  href,
  external,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
