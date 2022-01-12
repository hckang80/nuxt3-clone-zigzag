<script setup lang="ts">
interface Props {
  id: number
  image: string
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <li class="main-products__item">
    <label class="main-products__wrap">
      <input
        type="checkbox"
        :value="id"
      >
      <span class="backdrop">
        <TextIcon code="&hearts;" />
      </span>
      <img
        :src="image"
        :alt="title"
        loading="lazy"
      >
    </label>
  </li>
</template>