<script setup lang="ts">
const [
  { data: categories },
  { data: products },
] = await Promise.all([
  useFetch('https://fakestoreapi.com/products/categories'),
  useFetch('https://fakestoreapi.com/products'),
])
</script>

<template>
  <article class="select-my-style">
    <header class="select-my-style__header">
      <h1 hidden>
        내 스타일 선택하기
      </h1>
      <strong>좋아하는 스타일을 알려주세요.</strong>
      매일 취향에 맞는 상품을 찾아올게요!
    </header>

    <ul class="main-categories">
      <li
        v-for="category in categories"
        :key="category"
        class="main-categories__item"
      >
        {{ category }}
      </li>
    </ul>

    <ul class="main-products">
      <li
        v-for="product in products"
        :key="product.id"
        class="main-products__item"
      >
        {{ product }}
      </li>
    </ul>
  </article>
</template>
