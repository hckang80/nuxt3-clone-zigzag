<template>
  <div>
    {{ foo }}
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'

export default {
  setup () {
    const foo = ref({})

    onMounted(async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
      foo.value = data
    })

    return {
      foo
    }
  }
}
</script>
