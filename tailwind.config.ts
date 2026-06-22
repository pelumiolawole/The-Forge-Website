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
        /* Design token map — mirrors CSS variables */
        brand: {
          DEFAULT: "#008e97",
          dark:    "#006e75",
          light:   "#b3dde0",
        },
        heading:  "#0f1f20",
        body:     "#3d5a5c",
        muted:    "#7a9ea1",
        "border-teal": "#d0e8ea",
        tint:     "#e6f6f7",
        subtle:   "#f4fafb",
        surface:  "#ffffff",

        /* Legacy aliases — kept so existing Tailwind classes still compile */
        teal:     "#008e97",
        dark:     "#0f1f20",
        "off-white": "#f4fafb",
        "mid-grey":  "#7a9ea1",
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        inter:    ["Inter", "sans-serif"],
      },
      animation: {
        "marquee-left":  "marquee-left 40s linear infinite",
        "marquee-right": "marquee-right 40s linear infinite",
        float:           "float 6s ease-in-out infinite",
        "fade-up":       "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        marquee:         "marquee 30s linear infinite",
      },
      keyframes: {
        "marquee-left": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
      },
      boxShadow: {
        brand:   "0 4px 20px rgba(0, 142, 151, 0.2)",
        "brand-lg": "0 8px 40px rgba(0, 142, 151, 0.25)",
        card:    "0 2px 16px rgba(0, 142, 151, 0.08)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
