<script setup lang="ts">
interface Props {
  id: number | string
  image: string
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <li class="main-products__item">
    <label class="main-products__wrap">
      <slot></slot>
      <img
        :src="image"
        :alt="title || ''"
        loading="lazy"
      >
    </label>
  </li>
</template>