
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
       white: 'hsl(0, 0%, 100%)',
      'light-pink': 'hsl(275, 100%, 97%)',
      'grayish-purple': 'hsl(292, 16%, 49%)',
      'dark-purple': 'hsl(292, 42%, 14%)',
    },
    extend: {
      backgroundImage: {
        'morado-desktop': "url('/assets/images/background-pattern-desktop.svg')",
        'morado-mobile': "url('/assets/images/background-pattern-mobile.svg')",
      },
      fontFamily: {
        'Work-Sans': ['Work-Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}