<template>
  <section class="section">
    <h1 class="title">
      {{ $t('common.pronoun') }} <span>{{ $t('cv.title') }}</span>
    </h1>

    <h2 class="caption">
      Frontend Developer
    </h2>

    <p class="text">
      {{ $t('cv.work_schedule') }}
    </p>

    <p class="text">
      {{ $t('cv.work_type') }}
    </p>

    <p class="text">
      {{ $t('cv.work_permit') }}
    </p>

    <h3 class="caption">
      {{ $t('cv.contacts') }}
    </h3>

    <p class="text">
      <a
        href="https://t.me/fakieltd"
        target="_blank"
      >
        t.me/fakieltd
      </a>
    </p>

    <p class="text">
      <a
        href="mailto:rvfakie@gmail.com"
      >
        rvfakie@gmail.com
      </a>
    </p>

    <p
      class="subtitle journey"
    >
      {{ $t('cv.description') }}

      <button
        type="button"
        class="order-button"
        @click="reverse = !reverse"
      >
        {{ reverse ? $t('cv.ascending') : $t('cv.descending') }}
      </button>
    </p>

    <CvTimeline :reverse="reverse" />

    <p class="subtitle journey">
      {{ $t('cv.journey') }}
    </p>

    <p class="text">
      {{ $t('cv.languages') }}
    </p>

    <h3 class="caption">
      {{ $t('cv.links') }}
    </h3>

    <p class="text">
      <a
        href="https://stackoverflow.com/users/7459994/fakie"
        target="_blank"
      >
        stackoverflow
      </a>
    </p>

    <p class="text">
      <a
        href="https://github.com/rvfakie"
        target="_blank"
      >
        github
      </a>
    </p>
  </section>
</template>

<script setup lang="ts">
const reverse = ref(false);
</script>

<style lang="scss" scoped>
.section {
  padding: 64px;

  @include mobile {
    padding: 32px 16px;
  }
}

.journey {
  margin: 100px 0;
  font-weight: 500;

  @include mobile {
    margin: 64px 0;
  }
}

.caption {
  margin: 32px 0;
}

.text {
  margin-bottom: 16px;

  a {
    @include ui-link;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @include typo-24-18;
  @include typo-serif;

  @include mobile {
    margin-bottom: 10px;
  }
}

.order-button {
  cursor: pointer;
  text-decoration: underline;

  @include typo-36-24;
  @include ui-default-hover;
}
</style>
