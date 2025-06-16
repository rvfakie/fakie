<template>
  <button
    :class="['button', [kind]]"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  type?: 'button' | 'submit';
  kind?: 'primary' | 'secondary'
}>(), {
  type: 'button',
  kind: 'primary',
});
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;

  padding: 0 4px;

  font-family: inherit;
  font-size: 24px;
  color: inherit;
  text-transform: uppercase;

  appearance: none;
  background: transparent;
  border: none;
}

.primary {
  background: var(--colors-accent);
}
</style>
