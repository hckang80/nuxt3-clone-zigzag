<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as TSwiper } from 'swiper/types'
import 'swiper/css'

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
      @swiper="onSwiper"
      @slideChange="onSlideChange">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </div>
</template>
