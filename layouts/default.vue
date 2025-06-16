<template>
  <CoreHeader />

  <main class="content">
    <slot />
  </main>

  <CoreFooter />
</template>

<style lang="scss">
.title {
  margin-bottom: 32px;
  font-weight: 400;

  span {
    font-weight: 900;
    text-transform: uppercase;
  }
}

.subtitle {
  margin-bottom: 32px;
  font-weight: 100;

  @include typo-serif;

  @include typo-36;
}
</style>

<style lang="scss" scoped>
.content {
  flex: 1;
  padding: 32px 16px 32px 64px;
}
</style>
