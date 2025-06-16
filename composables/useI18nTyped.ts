import type { TranslateOptions } from '@intlify/core-base';

// Long story short: default function `t` from useI18n composable
// from vue-i18n allows us to enter any value as a parameter for
// translation object but we need to restrict the argument value
// according to the type of our translation object keys.
// Sad but we can't redaclare its type to allow only certain
// argument keys as `t` type is very low level and it is possible
// to redeclare only if redeclare the whole library :/
export const useI18nTyped = () => {
  const data = useI18n();

  const selectedLocaleObject = computed(() =>
    data.locales.value.find(l => l.code === data.locale.value));

  return {
    ...data,
    selectedLocaleObject,
    t: (
      key: I18nKeys,
      named?: Record<string, unknown>,
      options?: TranslateOptions,
    ) => data.t(key, named || {}, options || {}),
  };
};
