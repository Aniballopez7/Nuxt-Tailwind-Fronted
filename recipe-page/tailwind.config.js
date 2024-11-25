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
    extend: {
      screens: {
        xs: { min: "50px", max: "449px" },
        // => @media (min-width: 50px and max-width: 449px) { ... }

        sm: { min: "450px", max: "767px" },
        // => @media (min-width: 450px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl:{ min: "1280px", max: "1366px"}, 

        '2xl': { min: "1367px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "3xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
    },

      colors: {
        bg_pink: "hsl(30, 54%, 90%)",
        Stone_100: 'hsl(30, 54%, 90%)',
        Stone_150: 'hsl(30, 18%, 87%)',
        Stone_600: 'hsl(30, 10%, 34%)',
        Stone_900: 'hsl(24, 5%, 18%)',
        Brown_800: 'hsl(14, 45%, 36%)',
        Rose_800: 'hsl(332, 51%, 32%)',
        Rose_50:  'hsl(330, 100%, 98%)',
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],

        young: ['Young Serif'],
        outfit: ["Outfit"],
      },
    },
  },
  plugins: [],
}