<script setup lang="ts">
  interface Props {
    code: string
    plain?: boolean
  }

  const props = defineProps<Props>()
  const { code } = props
</script>

<template>
  <i
    :data-code="code"
    :class="[
      'text-icon',
      { 'is-plain': plain }
    ]">
  </i>
</template>

<style lang="scss">
.text-icon {
  &::before {
    display: inline-block;
    content: attr(data-code);
    font-size: 2rem;
    line-height: 1;
    color: var(--color-white);
  }
  &.is-plain:before {
    -webkit-text-stroke: 1px var(--color-white);
    color: transparent;
  }
}
</style>