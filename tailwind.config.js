/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueColor' : '#2a68ff',
        'greyIsh' : '#f1f4f8',
        'cardShadow' : '#252b36',
        'textColor': '#252b36',
      }
    },
  },
  plugins: [],
}

