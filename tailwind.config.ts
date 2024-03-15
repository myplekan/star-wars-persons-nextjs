import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/bg.jpg')",
        "persons": "url('/persons.jpg')",
        "starships": "url('/starships.jpg')",
        "planets": "url('/planets.jpeg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "persons-opacity-80": "rgba(22, 78, 99, 0.8)",
        "persons-opacity-100": "rgba(22, 78, 99, 1)",
      },
      height: {
        'main': 'calc(100vh - 56px)',
      },
    },
  },
  plugins: [],
};
export default config;
