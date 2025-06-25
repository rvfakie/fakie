import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  site: {
    url: process.env.BASE_URL,
    name: 'fakie',
  },

  app: {
    head: {
      title: 'fakie',
      meta: [
        // Other dynamic tags are set in app.vue
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'fakie' },
        { property: 'og:image', content: '/sharing.png' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      base_url: '',
    },
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  i18n: {
    baseUrl: 'https://localhost:3000',
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    experimental: {
      // type generation but not typesafe
      typedOptionsAndMessages: 'default',
    },
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.ts',
      },
      {
        code: 'ru',
        language: 'ru-RU',
        name: 'Русский',
        file: 'ru.ts',
      },
    ],
    compilation: {
      // allow html in locales
      strictMessage: false,
    },
    vueI18n: '~/i18n/index.ts',
  },

  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/variables.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/index.scss" as *;\n',
        },
      },
    },

    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
  },

  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
});
