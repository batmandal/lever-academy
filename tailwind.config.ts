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
        textprimary: "#02010f",
        textsecondary: "#41404b",
        button: "#6928EA",
      },
      backgroundImage: {
        bgImg: "url('/public/background.avif')",
      },

      // keyframes: {
      //   "fade-in-down": {
      //     "0%": {
      //       opacity: "0",
      //       transform: "translateY(-10px)",
      //     },
      //     "100%": {
      //       opacity: "1",
      //       transform: "translateY(0)",
      //     },
      //   },
      // },
      // animation: {
      //   "fade-in-down": "fade-in-down 0.5s ease-out forwards",
      // },
    },
  },
  plugins: [],
} satisfies Config;
