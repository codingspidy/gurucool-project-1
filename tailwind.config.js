/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#F9C933'
      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "360"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}