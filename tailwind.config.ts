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
        vedic: {
          saffron: "#E05A1B",
          saffronDark: "#B83D07",
          gold: "#D97706",
          goldLight: "#FBBF24",
          sandstone: "#FFFDF7",
          maroon: "#4A0E17",
          dark: "#1C1917",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
