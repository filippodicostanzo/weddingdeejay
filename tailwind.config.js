/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'architects': ['Architects Daughter'],
        'poppins': ['Poppins'],
        'montserrat': ['Montserrat'],
      },
      colors:{
        primary: {
          DEFAULT: '#dc2751',
          dark: '#b31e41', // Darker shade of primary color
        },
        secondary:'#222',
        third:'#f0f0f3',
        fourth:'#282834',
        fifth:'#044580',
      }
    },
  },
  plugins: [],
}