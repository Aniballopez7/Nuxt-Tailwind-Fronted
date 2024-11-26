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
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
      'Desaturated-Dark-Blue': 'hsl(214, 17%, 51%)',
      'Very-Dark-Grayish-Blue': 'hsl(217, 19%, 35%)',
      'Light-Grayish-Blue': 'hsl(210, 46%, 95%)',
      'Grayish-Blue': 'hsl(212, 23%, 69%)'
    },
    extend: {},
  },
  plugins: [],
}

