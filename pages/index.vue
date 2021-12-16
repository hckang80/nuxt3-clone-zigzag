<script setup lang="ts">
import { ref } from 'vue'

const foo = ref({})

const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')

foo.value = await data.json()
</script>

<template>
  <div>
    {{ foo }}
  </div>
</template>
