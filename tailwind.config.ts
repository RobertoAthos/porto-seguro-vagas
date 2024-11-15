import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        palette: {
          dark: "#1C1E1B",       // 01 - Dark
          charcoal: "#2F352B",   // 02 - Charcoal
          lime: "#7DEF70",       // 03 - Lime
          mint: "#CBF1B7",       // 04 - Mint
          ivory: "#F3F7EC",      // 05 - Ivory
          white: "#F9FAF8",      // 06 - White
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
