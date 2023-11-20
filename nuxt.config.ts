// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css' }]
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})