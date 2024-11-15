/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        kbenhavn: ["CustomFont", "sans-serif"],
        packman: ["PackmanFont", "sans-serif"],
        alata: ['"Alata"', "sans-serif"],
        schibsted: ["Schibsted-Grotesk", "sans-serif"],
      },
      screens: {
        "sm-custom": "546px",
        "md-custom": "768px",
        "lg-custom": "1024px",
        "xl-custom": "1440px",
        "xxl-custom": "2560px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
