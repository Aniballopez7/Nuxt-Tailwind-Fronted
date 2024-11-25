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
      white: "#fff",
      black: '#000',
      cyan: '#3C8067',
      cream: '#F2EBE3',
      'dark-blue': '#1C232B',
      'gray-blue': '#6C7289',

    },
    extend: {
      backgroundImage:{
        desktop: "url('/assets/css/images/image-product-desktop.jpg')",
        mobile: "url('/assets/css/images/image-product-mobile.jpg')"
      }
    },
  },
  plugins: [],
}

