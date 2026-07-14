import type { Config } from "tailwindcss";

/**
 * Design Tokens — Joice Crespilho Advocacia
 * Paleta restrita (identidade oficial): apenas estas 4 cores + variações de opacidade.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", md: "2rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        ink: "#111111", // Preto — autoridade, exclusividade
        paper: "#FFFFFF", // Branco — clareza, transparência
        gold: "#B08A3C", // Dourado — prestígio, excelência
        smoke: "#7C7C7C", // Cinza — neutro de apoio
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4.25rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.25" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(17,17,17,0.05), 0 12px 32px rgba(17,17,17,0.07)",
        "card-hover": "0 2px 4px rgba(17,17,17,0.06), 0 20px 48px rgba(17,17,17,0.12)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
