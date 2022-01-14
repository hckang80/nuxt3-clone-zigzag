<script setup lang="ts">
const router = useRouter()
const { compactNumber } = useParser()
const { set } = useObject()

const BASE_URI = 'https://cdn.imweb.me/thumbnail'

const storeList = [
  {
    id: 1,
    title: 'rorane.com',
    followers: 375000,
    image: `${BASE_URI}/20211217/82aa128ce1000.jpg`,
    products: [
      { image: `${BASE_URI}/20211206/984e01687749a.jpg`, title: '써지컬스틸] 아이스다이아 피어싱(귀걸이가능)' },
      { image: `${BASE_URI}/20211208/b48b4542b3050.jpg`, title: '써지컬스틸] 아이스큐빅바 피어싱(귀걸이가능)' },
      { image: `${BASE_URI}/20211124/fce4d812dcd1e.jpg`, title: '써지컬스틸] 아이스테디베어 피어싱(귀걸이가능)' },
    ],
  },
  {
    id: 2,
    title: '로라네 악세사리',
    followers: 100000,
    image: `${BASE_URI}/20211217/82aa128ce1000.jpg`,
    products: [
      { image: `${BASE_URI}/20211212/de855fd8acefc.jpg`, title: '실버925] 별빛티어즈블루 은침귀걸이 / 겨울스페셜 벨벳하트케이스증정' },
      { image: `${BASE_URI}/20211206/98e3a1d0b3c15.jpg`, title: '실버925] 투하트아이스목성 은침귀걸이 / 겨울스페셜 선물케이스함께증정' },
      { image: `${BASE_URI}/20211211/99626274c06a9.jpg`, title: '스와로브스키] 루피너스아이스 은침귀걸이 / 겨울스페셜 벨벳하트케이스증정' },
    ],
  },
  {
    id: 3,
    title: 'RoRaNe',
    followers: 100000000,
    image: `${BASE_URI}/20211217/82aa128ce1000.jpg`,
    products: [
      { image: `${BASE_URI}/20210730/ee1dd33ea5789.jpg`, title: '헤어끈 핑크/블루/블랙 12묶음 세트' },
      { image: `${BASE_URI}/20210802/3cd10d0ef470e.jpg`, title: '플라워리본헤어밴드' },
      { image: `${BASE_URI}/20210801/e3cebc27663fb.jpg`, title: '*HOTSALE*폰케이스 미니크로스백' },
    ],
  },
]

const selectedStores = ref<Map<number, true>>(new Map())

const selectAllStore = (list: typeof storeList) => {
  list.forEach(({ id }) => {
    selectedStores.value.set(id, true)
  })
}

const saveMyStores = () => {
  set(localStorage, 'myStores', JSON.stringify([...selectedStores.value.keys()]))
  router.push('/')
}

const selectStore = (id: number) => {
  selectedStores.value.has(id)
    ? selectedStores.value.delete(id)
    : selectedStores.value.set(id, true)
}

const selectedAllStore = computed(() => storeList.length === selectedStores.value.size)

const toggleAllStore = (list: typeof storeList) => {
  if (selectedAllStore.value) return selectedStores.value.clear()
  selectAllStore(list)
}
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
          @click="toggleAllStore(storeList)"
        >
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
          class="store-list__item"
        >
          <ul class="main-products">
            <BaseListItem
              v-for="{
                image,
                title
              } in products"
              :id="title"
              :image="image"
              :title="title">
            </BaseListItem>
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
              @click="selectStore(id)"
            >
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
