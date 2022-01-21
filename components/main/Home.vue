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
    const supEl = sup && `<sup>${sup}</sup>`
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
          <base-svg
            width="12"
            height="12"
            color="#868e96"
            viewBox="0 0 32 32"
          >
            <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
          </base-svg>
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
      auto-height
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
