<template>
  <section>
    <h1 class="title">
      {{ $t('common.pronoun') }} <span>{{ $t('cv.title') }}</span>
    </h1>

    <h2 class="caption">
      Frontend Developer
    </h2>

    <p class="text">
      full-time, part-time, remote
    </p>

    <p class="text">
      I can work under a contract or as an individual entrepreneur
    </p>

    <p class="text">
      Work permit: Russia, Georgia (individual entrepreneur)
    </p>

    <h3 class="caption">
      Contacts
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

    <p class="subtitle journey">
      {{ $t('cv.description') }}
    </p>

    <CvTimeline />

    <p class="subtitle journey">
      I'm grateful for every part of my journey
    </p>

    <p class="text">
      Languages: Russian (native), English (C1)
    </p>

    <h3 class="caption">
      Links
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

<style lang="scss" scoped>
.journey {
  margin: 100px 0;
  font-weight: 500;
  white-space: pre-line;
}

.caption {
  margin: 32px 0;
}

.text {
  margin-bottom: 16px;
  font-size: 24px;

  @include typo-serif;

  a {
    @include typo-link;
  }
}
</style>
