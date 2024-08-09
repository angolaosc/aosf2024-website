import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "smaller": { "max": "320px" },
        "small": { "max": "599px" },
        // @media screen (max-width: 599px) { @content }

        "retrato-tablet": "600px",
        // @media screen (min-width: 600px) { @content }

        "paisagem-tablet": "900px",
        // @media screen (min-width: 900px) { @content }

        "desktop": "1200px",
        // @media screen (min-width: 1200px) { @content }

        "large": "1800px",
        // @media screen (min-width: 1800px) { @content }
        },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(180deg, rgba(3, 11, 16, 0.23) 2.2%, rgba(71, 86, 94, 0.23) 100%)"
      },
      colors: {
        'custom-dark' : '#111D25'
      }
    },
  },
  plugins: [],
};
export default config;
