import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
  },
  buildModules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  css: [
    'swiper/css',
    'swiper/css/pagination',
    '@/assets/css/index.scss',
  ],
  typescript: {
    strict: true,
  },
})
