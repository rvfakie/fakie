<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const head = useLocaleHead();

useHead({
  htmlAttrs: ({
    lang: () => head.value.htmlAttrs.lang,
    dir: () => head.value.htmlAttrs.dir as 'ltr' | 'rtl' | 'auto',
  }),
});
</script>
