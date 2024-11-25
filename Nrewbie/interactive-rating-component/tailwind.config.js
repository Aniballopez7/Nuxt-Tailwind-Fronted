/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors:{
      white: '#fff',
      black: '#000',
      orange: '#FB7413',
      grey: '#959EAC',
      'dark-blue': '#252D37',
      dark: '#121417'
    },
    extend: {},
  },
  plugins: [],
}

