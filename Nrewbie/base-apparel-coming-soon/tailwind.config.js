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
      'dark-grayish': 'hsl(0, 6%, 24%)',
      'desaturated-red': 'hsl(0, 36%, 70%)',
      'soft-red': 'hsl(0, 93%, 68%)'
    },
    extend: {
      backgroundImage: {
        desktop: "url('/assets/images/bg-pattern-desktop.svg')"
      }
    },
  },
  plugins: [],
}

