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
        background: "var(--background)",
        foreground: "var(--foreground)",

        // template 5
        "5-custom-navbar": "rgb(47, 53, 58)",
        "5-custom-footer": "rgb(47, 53, 58)",
        "5-custom-orange": "rgb(242, 145, 53)",
      },
      fontFamily: {
        // template 5
        poppins: ['var(--font-poppins)', 'sans-serif'],
        openSans: ['var(--font-open-sans)', 'sans-serif'],
      },
      backgroundImage: {
        '5-custom-hero-banner': "url('../public/clio.jpeg')",
      },
    },
  },
  plugins: [],
};
export default config;
