import type { SVGProps } from "react";

/**
 * Ícones de linha fina (stroke 1.25) — desenhados na própria paleta via currentColor.
 * Estilo: minimalista, elegante, consistente com as "linhas finas" da identidade.
 */
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 24) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const IconBuilding = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 21V5.5L12 3v18M12 21h8V9l-8-2.5" />
    <path d="M7.5 8.5h.01M7.5 12h.01M7.5 15.5h.01M15.5 12h.01M15.5 15.5h.01" />
    <path d="M2 21h20" />
  </svg>
);

export const IconShield = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3l7.5 3v5.5c0 4.5-3 8-7.5 9.5-4.5-1.5-7.5-5-7.5-9.5V6L12 3z" />
    <path d="M9 12l2 2 4-4.5" />
  </svg>
);

export const IconFamily = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="8" cy="7.5" r="2.5" />
    <circle cx="16.5" cy="9" r="2" />
    <path d="M3.5 20v-2.5A4.5 4.5 0 0 1 8 13a4.5 4.5 0 0 1 4.5 4.5V20" />
    <path d="M14.5 20v-1.5a3.5 3.5 0 0 1 6 0V20" />
  </svg>
);

export const IconScale = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3v18M8 21h8M12 6H6.5M12 6h5.5" />
    <path d="M6.5 6L4 12a2.8 2.8 0 0 0 5 0L6.5 6zM17.5 6L15 12a2.8 2.8 0 0 0 5 0l-2.5-6z" />
  </svg>
);

export const IconArrowRight = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export const IconMenu = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconChevronDown = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const IconQuote = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M9.5 7C6.5 8.5 5 10.5 5 13.5V17h4.5v-4.5H7c0-2 1-3.5 2.5-4.5V7zM19 7c-3 1.5-4.5 3.5-4.5 6.5V17H19v-4.5h-2.5c0-2 1-3.5 2.5-4.5V7z" />
  </svg>
);

export const IconPhone = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 4h3.5L10 8.5 8 10a11 11 0 0 0 6 6l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const IconWhatsApp = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5z" />
    <path d="M9 8.5c-.5 2.5 3 6 5.5 6.5l1-1.5-2-1-1 .5c-1-.5-1.5-1-2-2l.5-1-1-2L9 8.5z" />
  </svg>
);

export const IconMail = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="1" />
    <path d="M3 7.5l9 6 9-6" />
  </svg>
);

export const IconMapPin = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 21s-6.5-5.5-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.5 12 21 12 21z" />
    <circle cx="12" cy="10.5" r="2.25" />
  </svg>
);

export const IconInstagram = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M16.75 7.25h.01" />
  </svg>
);

export const IconLinkedIn = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="1" />
    <path d="M8 10.5V17M8 7.5h.01M12 17v-3.75a2.25 2.25 0 0 1 4.5 0V17M12 10.5V17" />
  </svg>
);

export const IconCheck = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4.5 12.5l5 5L19.5 7" />
  </svg>
);

export const areaIcons = {
  building: IconBuilding,
  shield: IconShield,
  family: IconFamily,
  scale: IconScale,
} as const;
