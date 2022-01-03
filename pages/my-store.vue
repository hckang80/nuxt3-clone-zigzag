<script setup lang="ts">
const { compactNumber } = useParser()
const { set } = useObject()

const saveMyStores = () => {
  set(localStorage, 'myStores', JSON.stringify([...selectedStores.value.keys()]))
}

const storeList = [
  {
    id: 1,
    title: 'RoRaNe',
    followers: 375000,
    image: 'https://cdn.imweb.me/thumbnail/20211217/82aa128ce1000.jpg',
    products: [
      'https://cdn.imweb.me/thumbnail/20211206/98e3a1d0b3c15.jpg',
      'https://cdn.imweb.me/thumbnail/20211211/99626274c06a9.jpg',
      'https://cdn.imweb.me/thumbnail/20211124/fce4d812dcd1e.jpg',
    ]
  },
  {
    id: 2,
    title: '로라네',
    followers: 100000,
    image: 'https://cdn.imweb.me/thumbnail/20211217/82aa128ce1000.jpg',
    products: [
      'https://cdn.imweb.me/thumbnail/20211212/de855fd8acefc.jpg',
      'https://cdn.imweb.me/thumbnail/20210730/ee1dd33ea5789.jpg',
      'https://cdn.imweb.me/thumbnail/20210801/e3cebc27663fb.jpg',
    ]
  }
]

const selectedStores = ref<Map<number, true>>(new Map())

const selectAllStore = (list: typeof storeList) => {
  list.forEach(({ id }) => {
    selectedStores.value.set(id, true)
  })
}

const toggleAllStore = (list: typeof storeList) => {
  if (selectedAllStore.value) return selectedStores.value.clear()
  selectAllStore(list)
}

const selectStore = (id: number) => {
  selectedStores.value.has(id)
    ? selectedStores.value.delete(id)
    : selectedStores.value.set(id, true)
}

const selectedAllStore = computed(() => storeList.length === selectedStores.value.size)
</script>

<template>
  <article class="select-my-style">
    <header class="select-my-style__header">
      <h1 hidden>
        내 스토어
      </h1>
      <p>
        <strong block>선택한 스타일의<br>스토어를 모아왔어요.</strong>
        즐겨찾기 하고 매일<br>
        인기상품과 신상을 모아보세요.
      </p>
    </header>

    <form @submit.prevent="saveMyStores">
      <header class="all-selector">
        <span class="all-selector__label">모두 즐겨찾기({{ selectedStores.size }})</span>
        <button
          type="button"
          @click="toggleAllStore(storeList)">
          <TextIcon
            code="&starf;"
            :plain="!selectedAllStore"
            :class="[
              'icon-star',
              { 'is-selected': selectedAllStore }
            ]"
          />
        </button>
      </header>
      <ul class="store-list">
        <li
          v-for="{
            id,
            image,
            followers,
            title,
            products
          } in storeList"
          :key="id"
          class="store-list__item"
        >
          <ul class="main-products">
            <li
              v-for="(src, index) in products"
              :key="index"
              class="main-products__item"
            >
              <div class="main-products__wrap">
                <img
                  :src="src"
                  alt=""
                  loading="lazy"
                >
              </div>
            </li>
          </ul>
          <div class="store-list__detail">
            <div class="store-list__summary">
              <div class="store-list__thumbnail">
                <img :src="image" alt="">
              </div>
              <dl>
                <dt>{{ title }}</dt>
                <dd>{{ compactNumber(followers) }}</dd>
              </dl>
            </div>
            <button
              type="button"
              @click="selectStore(id)">
              <TextIcon
                code="&starf;"
                :plain="!selectedStores.has(id)"
                :class="[
                  'icon-star',
                  { 'is-selected': selectedStores.has(id) }
                ]"
              />
            </button>
          </div>
        </li>
      </ul>
      <div class="head-button">
        <button>시작하기</button>
      </div>
    </form>
  </article>
</template>
