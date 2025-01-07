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
    colors: {
      white: '#fff',
      blue: "hsl(223, 87%, 63%)",
      "Pale-Blue": "hsl(223, 100%, 88%)",
      "Light-Red": "hsl(354, 100%, 66%)",
      gray: "hsl(0, 0%, 59%)",
      'Very-Dark-Blue': 'hsl(209, 33%, 12%)'
    },
    extend: {},
  },
  plugins: [],
};