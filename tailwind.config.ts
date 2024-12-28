import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/hero-bg.svg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#25DAC5",
        secondary: "#1E0E62",
        'primary-gray': "#151439",
        
      },
    },
  },
  plugins: [],
} satisfies Config;
