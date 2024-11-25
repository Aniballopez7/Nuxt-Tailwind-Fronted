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
    colors: {
      green: "hsl(75, 94%, 57%)",
      white: "hsl(0, 0%, 100%)",
      "grey-700": "hsl(0, 0%, 20%)",
      "grey-800": "hsl(0, 0%, 12%)",
      "grey-900": "hsl(0, 0%, 8%)",
    },
    extend: {},
  },
  plugins: [],
}