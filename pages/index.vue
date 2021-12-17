<script setup lang="ts">
const { data } = useFetch('https://jsonplaceholder.typicode.com/todos/1')
</script>

<template>
  <div>
    {{ data }}
  </div>
</template>
