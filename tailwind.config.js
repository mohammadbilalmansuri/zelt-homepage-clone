/** @type {import('tailwindcss').Config} */
export default {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#121718",
      white: "#ffffff",
      orange: "#fdba74",
      lightOrange: "#F6F3EF",
    },
    extend: {
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
