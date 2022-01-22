<script setup lang="ts">
// https://icomoon.io/app/#/select

interface Props {
  width?: number | string
  height?: number | string
  viewBox?: string
  name?: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: 18,
  height: 18,
  viewBox: '0 0 20 20',
  name: '',
  color: '#fff',
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
  >
    <title :id="name" lang="en">{{ name }}</title>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>
