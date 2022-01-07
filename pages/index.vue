<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as TSwiper } from 'swiper/types'
import 'swiper/css'

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
