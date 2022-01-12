<script setup lang="ts">
interface Props {
  modelValue: number[]
  id: number
  image: string
  title: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number[]): void
}>()

const model = computed<number[]>({
  get () {
    return props.modelValue
  },
  set (value) {
    return emit('update:modelValue', value)
  }
})
</script>

<template>
  <li class="main-products__item">
    <label class="main-products__wrap">
      <input
        v-model="model"
        :value="id"
        type="checkbox"
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