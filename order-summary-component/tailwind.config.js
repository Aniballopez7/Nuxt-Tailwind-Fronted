/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      white: "#fff",
      "Pale blue": "hsl(225, 100%, 94%)",
      "Bright-blue": "hsl(245, 75%, 52%)",
      "Very-pale-blue": " hsl(225, 100%, 98%)",
      "Desaturated-blue": "hsl(224, 23%, 55%)",
      "Dark-blue": "hsl(223, 47%, 23%)",
    },
    extend: {
      backgroundImage:{
        'desktop': "url('/assets/images/pattern-background-desktop.svg)",
        'mobile': "url('/assets/images/pattern-background-mobile.svg)",
      }
    },
  },
  plugins: [],
};
