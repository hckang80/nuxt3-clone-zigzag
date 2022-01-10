<script setup lang="ts">
useMeta({
  title: 'Nuxt3 Clone ZIGZAG',
  htmlAttrs: {
    lang: 'ko',
  },
})

const route = useRoute()

const isTutorial = computed(() => {
  const [root] = route.path.split('/').slice(1)
  return root === 'tutorial'
})
</script>

<template>
  <main
    :class="['main-container', { 'main-container--tutorial': isTutorial }]">
    <slot />
  </main>
</template>
