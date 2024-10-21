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
        grey:"#1b1c1e",
        green:"#6dbbaa",
        textColor:"#afb1b6",
        textColor2:"#2c2d2f",
      },
    },
  },
  plugins: [],
};
export default config;
