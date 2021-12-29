<script setup lang="ts">
import { ref, Ref } from 'vue'
import type { Categories, Product } from '@/types'

const { set } = useObject()

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

const saveMyStyles = () => {
  set(localStorage, 'myStyles', JSON.stringify(checkedProducts.value))
}
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
        :class="[
          'main-categories__item',
          { 'is-active': selectedCategory === category }
        ]"
      >
        <button @click="selectedCategory !== category && (selectedCategory = category)">
          {{ category }}
        </button>
      </li>
    </ul>

    <form @submit.prevent="saveMyStyles">
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
      <div class="head-button">
        <button>선택완료</button>
      </div>
    </form>
  </article>
</template>

<style lang="scss" scoped>
.select-my-style__header {
  margin: 0 0 2em;
  p {
    color: var(--color-gray);
    > strong {
      margin: 0 0 0.5em;
      font-size: 1.8rem;
      line-height: 1.2;
      color: var(--color-white);
    }
  }
}

.main-categories {
  overflow: auto;
  display: flex;
  position: sticky;
  top: 4em;
  z-index: 2;
  margin: 0 -1em 0 0;
  padding: 0 0 1em;
  gap: 0 1em;
  font-weight: bold;
  text-transform: capitalize;
  background: var(--color-dark);
  &__item {
    white-space: nowrap;
    color: var(--color-gray);
    &.is-active {
      color: inherit;
    }
    button {
      text-transform: capitalize;
    }
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
    background: var(--color-white);
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
    background-color: var(--color-white);
    &::before,
    &::after {
      background-color: var(--color-white);
    }
  }
  img {
    padding: 0.5em;
    max-height: 100%;
  }
}

.head-button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 4em;
  padding: 0 1em;
  background: var(--color-dark);
  button {
    padding: 0 0.5em;
    background: var(--color-white);
    color: var(--color-dark);
    height: 2em;
    border-radius: 15px;
  }
}
</style>
