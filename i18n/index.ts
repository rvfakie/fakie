import en from './locales/en.json';
import ru from './locales/ru.json';

// Options type generation I18n is available as experimetnal feature in v9
// https://i18n.nuxtjs.org/docs/api/options#typedoptionsandmessages
// but it is not typesafe so we redeclare
type StringKey<T> = Extract<keyof T, string>;

type GenerateKeyPaths<T, Prefix extends string = ''> = T extends object
  ? {
    [K in StringKey<T>]: T[K] extends object
      ? GenerateKeyPaths<T[K], `${Prefix}${K}.`>
      : `${Prefix}${K}`;
  }[StringKey<T>]
  : Prefix;

type Locale = typeof en;

declare global {
  type I18nKeys = GenerateKeyPaths<Locale>;
}

// https://youtrack.jetbrains.com/issue/WEB-59818/Vue-custom-global-properties-added-by-augmenting-vue-are-not-resolved
// We have to provide the second typing for the global properties to make it work in the JetBrains IDEs

declare module 'vue' {
  interface ComponentCustomProperties {
    $t(key: I18nKeys): string;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t(key: I18nKeys): string;
  }
}

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  locale: 'en',
  warnHtmlMessage: 'warn',
  messages: {
    en,
    ru,
  },
}));
