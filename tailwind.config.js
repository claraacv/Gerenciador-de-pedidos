/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      primary: "#1d948a",
      secondary: "#039d2d",
      accent: "#28f2fb",
      background: "#001513",
      navBackground: "#021B19",

      white: "#ffffff",
      black: "#000000",
    },
  },
  plugins: [],
};
