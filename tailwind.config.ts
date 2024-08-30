import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gold: "#F5C044",
        green: "#4CA154",
        offgray: "#D4D4D8",
        eggshell: "#FAFAF9",
        white: "#FFFFFF",
        black: "#18181B",
        darkgray: "#52525A",
      },
      fontSize: {
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "36px",
      },
    },
  },
  plugins: [],
};
export default config;
