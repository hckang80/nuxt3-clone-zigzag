<script setup lang="ts">
import { ref } from 'vue'
import type { Categories, Product } from '@/types'

const { set } = useObject()
const router = useRouter()

const [
  { data: categories },
  { data: products },
] = await Promise.all([
  useFetch<string, Categories[]>('https://fakestoreapi.com/products/categories'),
  useFetch<string, Product[]>('https://fakestoreapi.com/products'),
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
  router.push('/tutorial/my-store')
}
</script>

<template>
  <article class="select-my-style">
    <header class="select-my-style__header">
      <h1 hidden>
        내 스타일 선택하기
      </h1>
      <div class="icon-heart"></div> 
      <p>
        <strong block>좋아하는 스타일을<br> 알려주세요.</strong>
        매일 취향에 맞는 상품을 찾아올게요!
      </p>
    </header>

    <ul class="main-categories">
      <li
        v-for="category in allCategories"
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
        <BaseListItem
          v-for="{
            id,
            image,
            title
          } in filteredProducts"
          :key="id"
          :id="id"
          :image="image"
          :title="title">
          <input
            v-model="checkedProducts"
            :value="id"
            type="checkbox"
          >
          <span class="backdrop">
            <div class="icon-heart"></div>
          </span>
        </BaseListItem>
      </ul>
      <div class="head-button">
        <button>선택완료</button>
      </div>
    </form>
  </article>
</template>
