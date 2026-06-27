import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Brand color tokens — swap these when you decide on a palette
      colors: {
        brand: {
          50:  "#f3eeff",
          100: "#e8dcff",
          200: "#d5beff",
          300: "#b899fc",
          400: "#9a6ef5",
          500: "#7f4fe6",
          600: "#6633d1", // LectureHead primary purple
          700: "#5226b0",
          800: "#3703a5",
          900: "#280079",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      // Prose typography for MDX playbooks
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
