<script setup lang="ts">
import { ref, Ref } from 'vue'
import type { Categories, Product } from '@/types'

const [
  { data: categories },
  { data: products },
]: [
  { data: Ref<Categories[]> },
  { data: Ref<Product[]> },
] = await Promise.all([
  useFetch('https://fakestoreapi.com/products/categories'),
  useFetch('https://fakestoreapi.com/products'),
])

const ALL = 'all'

const allCategories: Categories[] = [ALL, ...categories.value]

const selectedCategory = ref<Categories>(ALL)

const filteredProducts = computed<Product[]>(() => selectedCategory.value !== ALL
  ? products.value.filter(({ category }) => category === selectedCategory.value)
  : products.value,
)

const checkedProducts = ref<number[]>([])
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
        v-for="category in allCategories"
        :key="category"
        class="main-categories__item"
      >
        <button @click="selectedCategory !== category && (selectedCategory = category)">
          {{ category }}
        </button>
      </li>
    </ul>

    <ul class="main-products">
      <li
        v-for="{
          id,
          image,
          title
        } in filteredProducts"
        :key="id"
        class="main-products__item"
      >
        <label>
          <input
            v-model="checkedProducts"
            type="checkbox"
            :value="id"
          >
          <span class="backdrop">
            <i class="icon-heart" />
          </span>
          <img
            :src="image"
            :alt="title"
            loading="lazy"
          >
        </label>
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
  margin: 0 -1em 1em 0;
  gap: 0 1em;
  font-weight: bold;
  text-transform: capitalize;
  &__item {
    white-space: nowrap;
  }
}

.main-products {
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  gap: 1px;
  border-radius: 5px;
  &__item {
    position: relative;
    flex-basis: calc((100% / 3) - 1px);
    padding: 0 0 40%;
    background: #fff;
  }
  .is-checked {
    .backdrop {
      background: rgba(0, 0, 0, .5)
    }
    [class^=icon] {
      top: 0;
    }
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  input {
    position: absolute;
    z-index: 4;
    opacity: 0;
    &:checked + .backdrop {
      background: rgba(0, 0, 0, .5);
      [class^=icon] {
        top: 0;
        opacity: 1;
      }
    }
  }
  .backdrop {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  [class^=icon] {
    transition: top .3s ease-in-out;
    opacity: 0;
    top: 70%;
    font-size: 1.8rem;
    background-color: #fff;
    &::before,
    &::after {
      background-color: #fff;
    }
  }
  img {
    padding: 0.5em;
    max-height: 100%;
  }
}
</style>
