<template>
  <footer class="footer">
    <nav>
      <ul class="list">
        <li>
          <NuxtLinkLocale
            class="link"
            to="/"
          >
            {{ $t('common.menu.home') }}
          </NuxtLinkLocale>
        </li>

        <li>
          <NuxtLinkLocale
            class="link"
            to="/cv"
          >
            {{ $t('common.menu.cv') }}
          </NuxtLinkLocale>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 0 16px;

  font-size: 48px;
  font-weight: 100;
  color: var(--colors-secondary-text);
  text-transform: uppercase;

  background: var(--colors-secondary);
}

.list {
  display: flex;
  gap: 16px;
}

.link:not(.router-link-active) {
  @include ui-thin-link;
  @include ui-default-hover;
}

.router-link-active {
  @include ui-bold-link;
}
</style>
