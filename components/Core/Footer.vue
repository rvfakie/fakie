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
            to="/projects"
          >
            {{ $t('common.menu.projects') }}
          </NuxtLinkLocale>
        </li>

        <li>
          <NuxtLinkLocale
            class="link"
            to="/timeline"
          >
            {{ $t('common.menu.timeline') }}
          </NuxtLinkLocale>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
@keyframes active-link {

  from {
    font-weight: 100;
  }

  to {
    font-weight: 900;
  }
}

@keyframes inactive-link {

  from {
    font-weight: 900;
  }

  to {
    font-weight: 100;
  }
}

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

.link {
  animation: inactive-link var(--transition-short) ease-in forwards;
}

.router-link-active,
.router-link-exact-active {
  animation: active-link var(--transition-short) ease-in forwards;
}
</style>
