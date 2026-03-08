import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#008E97",
          50: "#E6F7F8",
          100: "#CCF0F1",
          500: "#008E97",
          600: "#007A82",
          700: "#00666D",
        },
        gold: {
          DEFAULT: "#C8963E",
          50: "#FBF6EB",
          100: "#F7ECD7",
          500: "#C8963E",
          600: "#B08535",
        },
        dark: "#0A0A0A",
        offwhite: "#F7F4EF",
        surface: "#F0FAFB",
        midgrey: "#6B7280",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
