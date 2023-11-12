/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      body: ["Roboto Regular", "Arial sans-serif"],
      headline: ["Bebas Neue", "Arial Black sans-serif"],
    },
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
      },
      textUnderlineOffset: {
        12: "12px",
      },
    },
  },
  plugins: [],
};
