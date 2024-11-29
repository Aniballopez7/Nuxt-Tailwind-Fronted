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
      red: 'hsl(0, 100%, 74%) ',
      green: 'hsl(154, 59%, 51%)',
      blue: 'hsl(248, 32%, 49%)',
      'dark-blue': 'hsl(249, 10%, 26%) ',
      'grayish-blue': 'hsl(246, 25%, 77%)'
    },
    extend: {
      backgroundImage:{
        desktop: "url('/assets/images/bg-intro-desktop.png')",
        mobile: "url('/assets/images/bg-intro-mobile.png')",
      }
    },
  },
  plugins: [],
}

