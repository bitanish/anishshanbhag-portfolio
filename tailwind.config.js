/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#64ffda", // optional: your soft green
      },
      fontFamily: {
        sans: ["Calibre", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
