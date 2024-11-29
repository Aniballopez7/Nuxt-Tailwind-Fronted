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
      cyan: 'hsl(179, 62%, 43%)',
      yellow: 'hsl(71, 73%, 54%)',
      'light-gray': 'hsl(204, 43%, 93%)',
      'grayish-blue': 'hsl(218, 22%, 67%)',
    },
    extend: {},
  },
  plugins: [],
}

