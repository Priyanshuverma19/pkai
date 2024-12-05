/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require('tailwind-scrollbar')],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "scroll-thumb": "#2c2937",
        "scroll-track": "#1e1d29",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
}