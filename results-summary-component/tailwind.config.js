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
      black: '#000',
      transparent: 'transparent',
      'Pale-blue': 'hsl(221, 100%, 96%)',
      'Light-lavender': 'hsl(241, 100%, 89%)',
      'Dark-gray-blue': 'hsl(224, 30%, 27%)',
      'Light-red': 'hsl(0, 100%, 67%)',
      'Cobalt-blue': 'hsl(234, 85%, 45%)',
      'Orangey-yellow': 'hsl(39, 100%, 56%)',
      'Green-teal': 'hsl(166, 100%, 37%)',
      // background
      'Light-slate-blue': '#7857ff',
      'Light-royal-blue': '#2e2be9',
      // circle
      'Violet-blue': 'hsla(256, 72%, 46%, 1)',
      'Persian-blue': 'hsla(241, 72%, 46%, 0)',
    },
    extend: {},
  },
  plugins: [],
}