/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fb: {
          main: "#2374e1",
          gray: {
            main: "#242526",
            light: "#3a3b3c"
          },
          black: "#000000"
        }
      }
    },
  },
  plugins: [],
}