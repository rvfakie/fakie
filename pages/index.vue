<template>
  <section class="section">
    <div class="texts">
      <h1 class="title">
        {{ $t('common.pronoun') }} <span>fakie</span>
      </h1>

      <p class="subtitle">
        {{ $t('home.description') }}
      </p>
    </div>

    <div class="image-container">
      <Illustration class="illustration" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Illustration from '~/assets/svg/fakie-3.svg?component';
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 64px 0 0 64px;

  @include mobile {
    padding: 32px 0 0;
  }
}

.texts {
  padding-right: 64px;

  @include mobile {
    padding: 0 16px;
  }
}

.image-container {
  position: relative;
  flex-grow: 1;
  width: 100%;
  height: 100%;
}

.illustration {
  position: absolute;
  width: 100%;
  height: 100%;
  color: var(--colors-primary-illustration);
}
</style>
