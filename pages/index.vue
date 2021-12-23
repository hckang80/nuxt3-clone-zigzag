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
      <p>
        <strong block>좋아하는 스타일을<br> 알려주세요.</strong>
        매일 취향에 맞는 상품을 찾아올게요!
      </p>
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
        v-for="{
          id,
          image,
          title
        } in products"
        :key="id"
        class="main-products__item"
      >
        <img
          :src="image"
          :alt="title"
          loading="lazy"
        >
      </li>
    </ul>
  </article>
</template>

<style lang="scss" scoped>
.select-my-style__header {
  margin: 0 0 2em;
  p {
    > strong {
      margin: 0 0 0.5em;
      font-size: 1.8rem;
      line-height: 1.2;
    }
  }
}

.main-categories {
  overflow: auto;
  display: flex;
  gap: 0 1em;
  font-weight: bold;
  text-transform: capitalize;
  &__item {
    white-space: nowrap;
  }
}

.main-products {
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  background: #000;
  &__item {
    flex-basis: calc((100% / 3) - 1px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  }
}
</style>
