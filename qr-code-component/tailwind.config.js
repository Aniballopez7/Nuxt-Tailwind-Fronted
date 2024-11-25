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
    colors:{
      white: 'hsl(0, 0%, 100%)',
      'Slate-300': 'hsl(212, 45%, 89%)',
      'Slate-500': 'hsl(216, 15%, 48%)',
      'Slate-900': 'hsl(218, 44%, 22%)',
    },
    extend: {
    },
  },
  plugins: [],
}