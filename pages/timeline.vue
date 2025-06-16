<template>
  <section>
    <h1 class="title">
      {{ $t('common.pronoun') }} <span>{{ $t('timeline.title') }}</span>
    </h1>

    <p class="subtitle journey">
      {{ $t('timeline.description') }}
    </p>

    <div class="timeline-container">
      <div class="pointer">
        <div class="circle" />

        <span class="its">{{ $t('common.pronoun') }}</span>
      </div>

      <div class="timeline">
        <div
          v-for="(partOfMyLife, index) in timeline"
          :key="partOfMyLife.id"
          class="part"
        >
          <div>
            <span class="date">
              {{ monthMedium(partOfMyLife.date) }} {{ index === 0 ? `(${$t('timeline.till_present')}) ` : '' }}
            </span>

            <span class="i-am">
              {{ $t('timeline.and_I_am') }} {{ partOfMyLife.preposition }}

              <strong v-if="partOfMyLife.thin_title || partOfMyLife.short">
                {{ partOfMyLife.title }}
              </strong>

              <span
                v-else
                class="company"
              >
                {{ partOfMyLife.title }}
              </span>
            </span>
          </div>

          <div
            v-if="!partOfMyLife.short"
            class="info"
          >
            <span class="subtext">
              {{ partOfMyLife.country }}
            </span>

            <span class="subtext">
              {{ partOfMyLife.position }}<span v-if="partOfMyLife.url">, </span>

              <a
                v-if="partOfMyLife.url"
                :href="partOfMyLife.url"
                class="link"
                target="_blank"
              >
                {{ partOfMyLife.website }}
              </a>
            </span>

            <span class="serif-subtext">
              {{ $t('timeline.stack') }} {{ partOfMyLife.stack }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { monthMedium } from '~/utils/formatDate.js';

const { t } = useI18nTyped();

const timeline = ref([
  {
    id: '1',
    date: new Date('2025-03-01'),
    title: t('timeline.current'),
    preposition: '',
    short: true,
  },
  {
    id: '2',
    date: new Date('2020-12-01'),
    title: 'Stork club',
    preposition: t('timeline.at_the'),
    country: t('timeline.usa'),
    position: 'Senior Frontend Engineer',
    stack: 'Vue 3, Nuxt 3, Pinia, TypeScript, Sass, React, Vite',
    website: 'joinstorkclub.com',
    url: 'https://joinstorkclub.com',
  },
  {
    id: '3',
    date: new Date('2019-09-01'),
    title: 'Oboz',
    preposition: t('timeline.at_the'),
    country: t('timeline.russia'),
    position: 'Senior Frontend Developer',
    stack: 'Vue 2, Vuex, JavaScript, Sass, Webpack',
    website: 'oboz.com',
    url: 'https://oboz.com',
  },
  {
    id: '15',
    date: new Date('2014-09-01'),
    title: t('timeline.university'),
    preposition: t('timeline.at_the'),
    country: t('timeline.russia'),
    position: t('timeline.university_position'),
    stack: t('timeline.university_stack'),
    website: 'mirea.ru',
    url: 'https://www.mirea.ru',
    thin_title: true,
  },
  {
    id: '25',
    date: new Date('2012-06-01'),
    title: t('timeline.school'),
    preposition: 'at',
    short: true,
  },
]);
</script>

<style lang="scss" scoped>
.journey {
  margin-bottom: 200px;
  white-space: pre-line;
}

.timeline-container {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;

  margin-bottom: 500px;

  border-left: 2px solid var(--colors-primary-text);
}

.pointer {
  position: sticky;
  top: 50vh;

  display: flex;
  gap: 16px;
  align-items: center;

  margin-left: -17px;
}

.circle {
  width: 32px;
  height: 32px;
  background: var(--colors-primary-text);
  border-radius: 50%;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.date {
  font-weight: 900;

  @include typo-serif;
}

.company {
  font-weight: 700;

  @include typo-20;
  @include typo-sans-serif;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 16px;
  padding-left: 32px;
}

.its,
.i-am {
  @include typo-serif;
}

.i-am {
  font-weight: 300;
}

.part {
  display: flex;
  flex-direction: column;

  &:first-child {
    margin: 6px 0 0;
  }

  &:last-child {
    margin: 0 0 5px;
  }
}

.subtext,
.link {
  @include typo-20;
}

.subtext {
  font-weight: 600;
}

.serif-subtext {
  @include typo-serif;
  @include typo-18;
}

.link {
  font-weight: 400;
  color: var(--colors-link);
}
</style>
