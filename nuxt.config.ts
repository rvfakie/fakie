export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
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
        file: 'en.json',
      },
      {
        code: 'ru',
        language: 'ru-RU',
        name: 'Русский',
        file: 'ru.json',
      },
    ],
    compilation: {
      // allow html in locales
      strictMessage: false,
    },
    vueI18n: './i18n/index.ts',
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
  },
});
