import Image from "next/image";

type ImageFrameProps = {
  /** Caminho da imagem em /public. Sem `src`, renderiza um placeholder elegante. */
  src?: string;
  alt: string;
  aspect?: "portrait" | "landscape" | "square";
  /** Rótulo exibido apenas no placeholder (orienta a produção fotográfica). */
  placeholderLabel?: string;
  priority?: boolean;
  className?: string;
};

const aspects = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

/**
 * Moldura fotográfica da identidade: imagem com borda fina e uma segunda
 * moldura dourada deslocada — o detalhe gráfico assinatura do site.
 * Fotos: P&B ou dessaturadas, alto contraste, fundo limpo (ver docs/PROJETO.md).
 */
export function ImageFrame({
  src,
  alt,
  aspect = "portrait",
  placeholderLabel = "Fotografia profissional",
  priority = false,
  className = "",
}: ImageFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Moldura dourada deslocada */}
      <div
        aria-hidden
        className="absolute -bottom-4 -right-4 h-full w-full border border-gold/60 md:-bottom-6 md:-right-6"
      />
      <div
        className={`relative overflow-hidden border border-ink/10 bg-ink ${aspects[aspect]}`}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale-[35%] contrast-[1.05]"
          />
        ) : (
          <div
            role="img"
            aria-label={alt}
            className="flex h-full w-full flex-col items-center justify-center gap-4 bg-ink p-8 text-center"
          >
            <span className="hairline" aria-hidden />
            <span className="font-display text-lg italic text-paper/50">
              {placeholderLabel}
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-smoke">
              Substituir em /public/images
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
