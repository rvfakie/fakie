<template>
  <NuxtLayout name="default">
    <section class="section">
      <h1 class="title">
        {{ $t('common.pronoun') }} <span>{{ error?.statusCode }}</span>
      </h1>

      <p class="subtitle">
        <template v-if="error?.statusCode === 404">
          {{ $t('error.not_found') }}
        </template>

        <template v-else>
          {{ $t('error.default') }}

          <NuxtLinkLocale to="/">
            {{ $t('error.main_page_link') }}
          </NuxtLinkLocale>
        </template>
      </p>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const { error = null } = defineProps({
  error: Object as () => NuxtError,
});

const { t } = useI18nTyped();

useHead({
  title: () => error?.statusCode === 404 ?
    t('error.meta.not_found_title') :
    t('error.meta.default_title'),
});
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;

  padding: 64px;

  text-align: center;

  @include mobile {
    padding: 48px 16px;
  }
}

.subtitle {
  white-space: pre-line;

  a {
    @include ui-link;
  }
}
</style>
