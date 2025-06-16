<template>
  <header class="header">
    <button
      v-for="l in locales"
      :key="l.code"
      :value="l.code"
      :class="['language', { 'active': l.code === locale }]"
      type="button"
      @click="setLocale(l.code);"
    >
      {{ l.name }}
    </button>
  </header>
</template>

<script setup lang="ts">
const { setLocale, locales, locale } = useI18n();
</script>

<style lang="scss" scoped>
@keyframes active-link {

  from {
    font-weight: 100;
  }

  to {
    font-weight: 900;
  }
}

@keyframes inactive-link {

  from {
    font-weight: 900;
  }

  to {
    font-weight: 100;
  }
}

.header {
  display: flex;
  gap: 16px;
  justify-content: flex-end;

  padding: 4px 16px;

  background: var(--colors-primary);
  border-bottom: 2px solid var(--colors-primary-text);
}

.language {
  padding: 0;

  font-family: inherit;
  font-size: 24px;
  color: inherit;
  text-transform: uppercase;

  appearance: none;
  background: transparent;
  border: none;

  animation: inactive-link var(--transition-short) ease-in forwards;
}

.active {
  animation: active-link var(--transition-short) ease-in forwards;
}
</style>
