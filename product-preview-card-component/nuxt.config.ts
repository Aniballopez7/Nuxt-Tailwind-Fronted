// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/icon'],

  googleFonts: {
    families: {
      'Poppins': ['400', '500', '600', '700'],
      'Montserrat': ['100..900'],
      'Fraunces': ['100..900'],
    },
    display: 'swap',
  }
})