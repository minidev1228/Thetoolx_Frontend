/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors:{
      green:"#98b912",
      brown: "#b29063",
      dark: "#14203a",
      light_dark:"#25324f",
      orange: "#e08611",
      white: "#f0ede8",
      realWhite: "#ffffff",
      hover: "#ded2c2"
    }
  },
  plugins: [],
}

