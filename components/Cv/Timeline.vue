<template>
  <div class="timeline-container">
    <div class="pointer">
      <div class="circle" />

      <span class="its">{{ $t('common.pronoun') }}</span>
    </div>

    <div class="timeline">
      <div
        v-for="partOfMyLife in timeline"
        :key="partOfMyLife.id"
        class="part"
      >
        <p>
          <span class="date">{{ partOfMyLife.date }} {{ }}</span>

          <span class="i-am">
            {{ $t('cv.and_I_am') }} {{ partOfMyLife.preposition }}

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
        </p>

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
            {{ $t('cv.stack') }} {{ partOfMyLife.stack }}
          </span>

          <template v-if="partOfMyLife.tasks?.length">
            <span class="subtext tasks">
              {{ $t('cv.tasks') }}
            </span>

            <ul class="list">
              <li
                v-for="(task, index) in partOfMyLife.tasks"
                :key="`${partOfMyLife.id}-task-${index}`"
              >
                {{ task }}
              </li>

              <li v-if="partOfMyLife.achievements?.length">
                {{ $t('cv.achievements') }}

                <ul class="inner-list">
                  <li
                    v-for="(achievement, index) in partOfMyLife.achievements"
                    :key="`${partOfMyLife.id}achievement-${index}`"
                  >
                    {{ achievement }}
                  </li>
                </ul>
              </li>
            </ul>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { monthMedium, dateMedium } from '~/utils/formatDate.js';

const { t } = useI18nTyped();

const timeline = ref([
  {
    id: '1',
    date: dateMedium(new Date()),
    title: t('cv.current'),
    preposition: '',
    short: true,
  },
  {
    id: '2',
    date: `${monthMedium(new Date('2020-12-01'))} – ${monthMedium(new Date('2025-03-01'))}`,
    title: 'Stork club',
    preposition: t('cv.at_the'),
    country: t('cv.usa'),
    position: 'Senior Frontend Engineer',
    stack: 'vue 3, nuxt 3, react, pinia, typesctipt, sass, vite',
    tasks: [
      t('cv.storkclub_task_1'),
      t('cv.storkclub_task_2'),
      t('cv.storkclub_task_3'),
    ],
    achievements: [
      t('cv.storkclub_achievement_1'),
      t('cv.storkclub_achievement_2'),
      t('cv.storkclub_achievement_3'),
      t('cv.storkclub_achievement_4'),
      t('cv.storkclub_achievement_5'),
      t('cv.storkclub_achievement_6'),
    ],
    website: 'joinstorkclub.com',
    url: 'https://joinstorkclub.com',
  },
  {
    id: '3',
    date: `${monthMedium(new Date('2019-09-01'))} – ${monthMedium(new Date('2020-12-01'))}`,
    title: 'Oboz',
    preposition: t('cv.at_the'),
    country: t('cv.russia'),
    position: 'Senior Frontend Developer',
    stack: 'vue 2, vuex, javascript, sass, webpack',
    tasks: [
      t('cv.oboz_task_1'),
      t('cv.oboz_task_2'),
      t('cv.oboz_task_3'),
      t('cv.oboz_task_4'),
      t('cv.oboz_task_5'),
    ],
    achievements: [
      t('cv.oboz_achievement_1'),
      t('cv.oboz_achievement_2'),
      t('cv.oboz_achievement_3'),
    ],
    website: 'oboz.com',
    url: 'https://oboz.com',
  },
  {
    id: '4',
    date: `${monthMedium(new Date('2017-03-01'))} – ${monthMedium(new Date('2019-08-01'))}`,
    title: 'Look At Media',
    preposition: t('cv.at_the'),
    country: t('cv.russia'),
    position: 'Frontend Developer',
    stack: 'vue 2, angular 1, react, javascript, jquery, ruby on rails, sass, canvas, Google Maps API, Yandex Maps API',
    tasks: [
      t('cv.lam_task_1'),
      t('cv.lam_task_2'),
    ],
    achievements: [
      t('cv.lam_achievement_1'),
      t('cv.lam_achievement_2'),
      t('cv.lam_achievement_3'),
    ],
    website: 'lookatme.ru',
    url: 'http://www.lookatme.ru',
  },
  {
    id: '5',
    date: `${monthMedium(new Date('2018-02-01'))} – ${monthMedium(new Date('2018-05-01'))}`,
    title: 'Setka',
    preposition: t('cv.at_the'),
    country: t('cv.russia'),
    position: 'Frontend Developer',
    stack: 'react 14, redux-saga, javascript, sass',
    tasks: [
      t('cv.setka_task_1'),
      t('cv.setka_task_2'),
      t('cv.setka_task_3'),
      t('cv.setka_task_4'),
    ],
    website: 'setka.io',
    url: 'https://setka.io',
  },
  {
    id: '6',
    date: `${monthMedium(new Date('2016-07-01'))} – ${monthMedium(new Date('2017-02-01'))}`,
    title: 'InRight',
    preposition: t('cv.at_the'),
    country: t('cv.russia'),
    position: 'Frontend Developer',
    stack: 'javascript, jquery, ajax, html, sass',
    tasks: [
      t('cv.inright_task_1'),
    ],
  },
  {
    id: '7',
    date: `${monthMedium(new Date('2015-12-01'))} – ${monthMedium(new Date('2016-06-01'))}`,
    title: 'Flexcore',
    preposition: t('cv.at_the'),
    country: t('cv.russia'),
    position: 'Integrator',
    stack: 'javascript, jquery, php, html, css',
    tasks: [
      t('cv.flexcore_task_1'),
      t('cv.flexcore_task_2'),
      t('cv.flexcore_task_3'),
    ],
    achievements: [
      t('cv.flexcore_achievement_1'),
    ],
    website: 'flexcore.ru',
    url: 'https://flexcore.ru',
  },
  {
    id: '15',
    date: `${monthMedium(new Date('2013-09-01'))} – ${monthMedium(new Date('2017-08-01'))}`,
    title: t('cv.university'),
    preposition: t('cv.at_the'),
    country: t('cv.russia'),
    position: t('cv.university_position'),
    stack: t('cv.university_stack'),
    tasks: [
      t('cv.university_task_1'),
      t('cv.university_task_2'),
    ],
    website: 'mirea.ru',
    url: 'https://www.mirea.ru',
    thin_title: true,
  },
  {
    id: '25',
    date: `${monthMedium(new Date('2002-09-01'))} – ${monthMedium(new Date('2013-06-01'))}`,
    title: t('cv.school'),
    preposition: t('cv.at'),
    short: true,
  },
]);
</script>

<style lang="scss" scoped>
.journey {
  margin-bottom: 100px;
  white-space: pre-line;
}

.timeline-container {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;

  margin: 100px 0;

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
  font-weight: 900;

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

  @include typo-link;
}

.tasks {
  margin-top: 16px;
}

.list,
.inner-list {
  display: flex;
  flex-direction: column;
  gap: 4px;

  @include typo-serif;
}

.list {

  > li {
    list-style: inside;
    list-style-type: disc;
  }
}

.inner-list {
  margin: 8px 0 0 32px;

  > li {
    list-style: inside;
    list-style-type: circle;
  }
}
</style>
