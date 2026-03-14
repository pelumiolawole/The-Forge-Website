import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#008E97",
        gold: "#C8963E",
        dark: "#0A0A0A",
        "off-white": "#F7F4EF",
        surface: "#F0FAFB",
        "mid-grey": "#6B7280",
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "marquee-left": "marquee-left 40s linear infinite",
        "marquee-right": "marquee-right 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};

export default config;
