
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap' }
      ]
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@ant-design-vue/nuxt',
    '@nuxt/image',
    'nuxt-swiper'
  ],
  swiper: {
    modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  css: [
    "~/assets/css/global.css",
  ],
  image: {
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.ts'
  },
})
