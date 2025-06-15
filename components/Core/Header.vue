<template>
  <header>
    <nav>
      <ul>
        <li>
          Home
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
li {
  color: var(--colors-primary);

  @include text-26-14;

  @include mobile {
    color: var(--colors-secondary);
  }
}
</style>
