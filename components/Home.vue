<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, {
  Pagination,
} from 'swiper'

SwiperCore.use([Pagination])

const navItems = [
  {
    id: 1,
    title: '홈',
  },
  {
    id: 2,
    title: 'brand',
  },
  {
    id: 3,
    title: '베스트',
  },
  {
    id: 4,
    title: '세일',
    sup: 'N',
  },
]

const pagination = {
  clickable: true,
  renderBullet(index: number, className: string) {
    const { title, sup = '' } = navItems[index]
    const supEl = sup && `<sup>${sup}<sup>`
    return `<span class="${className}">${title}${supEl}</span>`
  },
}
</script>

<template>
  <section>
    <header>
      <div class="util-menu">
        <h1 class="util-menu__title">
          ZIGZAG
        </h1>
        <button class="search-form">
          검색어를 입력해주세요
        </button>
        <aside class="util-menu__aside">
          <button>
            <base-svg
              width="20"
              height="20"
              color="#ff63ab"
            >
              <IconCart />
            </base-svg>
          </button>
        </aside>
      </div>
    </header>

    <swiper
      class="main-home"
      :pagination="pagination"
    >
      <swiper-slide
        v-for="({ title }) in navItems"
      >
        {{ title }}
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
        content<br><br>
      </swiper-slide>
    </swiper>
  </section>
</template>
