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
      white: "#fff",
      yellow: "#F4D04E",
      "gray-500": "#6B6B6B",
      "gray-950": "#111111",
    },
    extend: {
      backgroundImage: {
        image: "url('/assets/images/illustration-article.svg')"
      }
    },
  },
  plugins: [],
};
