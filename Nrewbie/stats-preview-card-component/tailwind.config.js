/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors:{
      background : 'hsl(233, 47%, 7%)',
      card: ' hsl(244, 38%, 16%)',
      accent: 'hsl(277, 64%, 61%)',
      white: '#fff',
      black: '#000',
      'white-paragraph': 'hsla(0, 0%, 100%, 0.75)',
      'white-stat': 'hsla(0, 0%, 100%, 0.6)'
    },
    backgroundImage:{
      desktop: "url('/assets/css/images/image-header-desktop.jpg')",
      mobile: "url('/assets/css/images/image-header-mobile.jpg')"
    },
    extend: {},
  },
  plugins: [],
}

