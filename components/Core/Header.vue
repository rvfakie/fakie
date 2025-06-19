<template>
  <header class="header">
    <button
      class="button"
      type="button"
      @click="toggleColorTheme"
    >
      {{ colorThemeText }}
    </button>

    <div class="languages">
      <button
        v-for="l in locales"
        :key="l.code"
        :class="['button', { 'active': l.code === locale }]"
        type="button"
        @click="setLocale(l.code)"
      >
        {{ l.name }}
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const { setLocale, locales, locale, t } = useI18nTyped();

const colorTheme = useCookie('color-theme');
const themeSwitchInProgress = ref(false);

useHead({
  htmlAttrs: {
    class: () => themeSwitchInProgress.value && 'color-theme-transition',
    'data-color-theme': () => colorTheme.value,
  },
});

onBeforeMount(() => {
  if (!colorTheme.value) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      colorTheme.value = 'dark';
    } else {
      colorTheme.value = 'light';
    }
  }
});

const colorThemeText = computed(
  () => colorTheme.value === 'light' ?
    t('common.color_theme_dark') :
    t('common.color_theme_light'),
);

const toggleColorTheme = () => {
  themeSwitchInProgress.value = true;
  colorTheme.value = colorTheme.value === 'light' ? 'dark' : 'light';

  setTimeout(() => (themeSwitchInProgress.value = false), 200);
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  gap: 16px;
  justify-content: space-between;

  padding: 4px 16px;

  background: var(--colors-primary);
  border-bottom: 2px solid var(--colors-primary-border);
}

.languages {
  display: flex;
  gap: 16px;
}

.button {
  text-transform: uppercase;

  @include typo-24-20;
}

.button:not(.active) {
  @include ui-animated-thin-link;
  @include ui-default-hover;
}

.active {
  @include ui-animated-bold-link;
}
</style>
