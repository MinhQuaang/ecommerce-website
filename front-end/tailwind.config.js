/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "767px",
      lg: "1026px",
      xl: "1300px",
    },
    extend: {
      colors: {
        primary: "#86bbbf",
      },
    },
  },
  plugins: [],
};
