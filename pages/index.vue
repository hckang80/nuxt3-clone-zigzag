<script lang="ts">
import type { RouteLocationNormalized } from 'vue-router'

export default {
  beforeRouteEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: (arg: boolean | string) => void) => {
    const path = !!from.name || '/tutorial'
    next(path)
  }
}
</script>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as TSwiper } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/pagination'
import SwiperCore, {
  Pagination
} from 'swiper'

SwiperCore.use([Pagination])

const navItems = [
  {
    id: 1,
    title: '홈'
  },
  {
    id: 2,
    title: 'brand'
  },
  {
    id: 3,
    title: '베스트'
  },
  {
    id: 4,
    title: '세일',
    sup: 'N'
  },
]

const pagination = {
  clickable: true,
  renderBullet (index: number, className: string) {
    return `<span class="${className}">${navItems[index].title}</span>`
  }
}

const onSwiper = (swiper: TSwiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>

<template>
  <div>
    <swiper
      class="main-tabs"
      :pagination="pagination"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
      <swiper-slide
        v-for="({ id }) in navItems"
        :key="id">
        {{ id }}
      </swiper-slide>
    </swiper>
  </div>
</template>
