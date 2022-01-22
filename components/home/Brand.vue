<script setup lang="ts">
interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <section>
    <header>
      <h1>{{ title }}</h1>
    </header>
  </section>
</template>
