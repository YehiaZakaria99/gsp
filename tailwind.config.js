/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true,
      },
      colors: {
        primary: "#292C62",
        hover: "#55E9FC",
        active: "#55E9FC",
        navbar: "#F8F9FA",
        hero: "#F0F1F5",
      },
      screens: {
        xs: "360px",
      },
    },
  },

  plugins: [],
};
