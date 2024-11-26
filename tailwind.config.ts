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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(180deg, #182934 0%, #030B10 100%)",
        "keynoteSpeakers-gradient": "linear-gradient(90deg, #f84438 0%, #0c141a 70%)"
      },
      colors: {
        'custom-dark' : '#111D25',
        'custom-color': '#213441',
        'workshop-color': '#00B0F9',
        'palestra-color': '#FF6F66',
        'barra-color': '#213441',
        'background-page': '#030b10',
      }
    },
  },
  plugins: [],
};
export default config;
