<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { t } = useI18nTyped();
const head = useLocaleHead();
const route = useRoute();

// It is safe to use route.meta['key'] as I18nKeys
// here as long as we declare route.meta in
// pages as typed I18nKeys object key
const meta = computed(() => ({
  title: t(route.meta.title as I18nKeys ?? 'home.meta.title'),
  description: t(route.meta.description as I18nKeys ?? 'home.meta.description'),
}));

useHead({
  htmlAttrs: ({
    lang: () => head.value.htmlAttrs.lang,
    dir: () => head.value.htmlAttrs.dir as 'ltr' | 'rtl' | 'auto',
  }),
  title: () => meta.value.title,
  link: head.value.link,
  meta: () => [
    { name: 'description', content: meta.value.description },
    { property: 'og:title', content: meta.value.title },
    { property: 'og:description', content: meta.value.description },
    ...head.value.meta,
  ],
});
</script>
