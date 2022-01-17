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
import type {
  Swiper as TSwiper,
  PaginationOptions
} from 'swiper/types'
import SwiperCore, {
  Pagination
} from 'swiper'

SwiperCore.use([Pagination])

const navItems = [
  {
    id: 1,
    title: '홈',
    el: 'Home'
  },
  {
    id: 2,
    title: '스토어',
    el: 'Store'
  },
  {
    id: 3,
    title: '모아보기',
    el: 'Collection'
  },
  {
    id: 4,
    title: '찜',
    el: 'Pick'
  },
  {
    id: 5,
    title: '마이페이지',
    el: 'Mypage'
  },
]

const pagination: PaginationOptions = {
  modifierClass: 'main-swiper-',
  clickable: true,
  renderBullet (index: number, className: string) {
    const { title } = navItems[index]
    return `<span class="${className}">${title}</span>`
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
      :allowTouchMove="false"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
      <swiper-slide
        v-for="({ title, el }) in navItems">
        <component
          :is="el"
          :title="title"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
