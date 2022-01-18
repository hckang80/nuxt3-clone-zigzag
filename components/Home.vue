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
  <div>
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
  </div>
</template>
