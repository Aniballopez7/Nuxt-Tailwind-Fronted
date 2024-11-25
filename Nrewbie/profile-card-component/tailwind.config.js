/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors:{
      white: '#fff',
      black: '#000',
      gray: '#eee',
      'dark-gray': 'hsl(0, 0%, 59%)',
      'dark-grayish': 'hsl(227, 10%, 46%)',
      'dark-desaturated': 'hsl(229, 23%, 23%)',
      'dark-cyan': 'hsl(185, 75%, 39%)',
    },
    extend: {
      backgroundImage: {
        image: "url('/assets/images/bg-pattern-card.svg')"
      }
    },
  },
  plugins: [],
}

