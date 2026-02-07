import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5C2C7',
          dark: '#E89BA3',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
        },
        gray: {
          light: '#F7F7F7',
        },
      },
    },
  },
  plugins: [],
};
export default config;
