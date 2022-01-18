<script setup lang="ts">
// https://www.toptal.com/designers/htmlarrows/symbols/

interface Props {
  code: string
  plain?: boolean
  size?: string
}

const props = defineProps<Props>()
</script>

<template>
  <i
    :data-code="code"
    :class="[
      'text-icon',
      { 'is-plain': plain }
    ]"
    :style="{
      'font-size': size
    }"
  ></i>
</template>

<style lang="scss">
.text-icon {
  font-size: 2rem;
  &::before {
    display: inline-block;
    content: attr(data-code);
    font-size: inherit;
    line-height: 1;
    color: var(--color-white);
  }
  &.is-plain:before {
    -webkit-text-stroke: 1px var(--color-white);
    color: transparent;
  }
}
</style>
