<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLinkLocale to="/">
            {{ $t('common.menu.home') }}
          </NuxtLinkLocale>
        </li>

        <li>
          <NuxtLinkLocale to="/projects">
            {{ $t('common.menu.projects') }}
          </NuxtLinkLocale>
        </li>
      </ul>
    </nav>

    <select @change="onSelectChange">
      <option
        v-for="l in locales"
        :key="l.code"
        :value="l.code"
        :selected="l.code === locale"
      >
        {{ l.name }}
      </option>
    </select>
  </header>
</template>

<script setup lang="ts">
const { setLocale, locales, locale, defaultLocale } = useI18n();

const onSelectChange = (event: Event) => {
  const code = (event.target as HTMLSelectElement).value;

  setLocale(code as typeof defaultLocale);
};
</script>

<style lang="scss" scoped>
li {
  color: var(--colors-primary);

  @include text-26-14;

  @include mobile {
    color: var(--colors-secondary);
  }
}
</style>
