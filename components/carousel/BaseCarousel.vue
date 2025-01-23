<!-- components/carousel/BaseCarousel.vue -->
<template>
  <div class="carousel-container w-full ml-auto relative">
    <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :loop="true"
        :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
        :pagination="{
        el: `.swiper-pagination-${paginationType}`,
        clickable: true
      }"
        :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
        :breakpoints="breakpointsConfig || defaultBreakpoints"
        @swiper="onSwiper"
        class="w-full"
    >
      <slot></slot>

      <template #container-end>
        <div :class="`swiper-pagination-${paginationType} absolute text-center z-20`"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </template>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const modules = [Navigation, Pagination, Autoplay]

const props = defineProps({
  paginationType: {
    type: String,
    required: true
  },
  breakpointsConfig: {
    type: Object,
    default: null
  }
})

const swiper = ref(null)

const onSwiper = (swiperInstance) => {
  swiper.value = swiperInstance
  nextTick(() => {
    swiper.value.update()
  })
}

const defaultBreakpoints = {
  768: {
    slidesPerView: 2,
    spaceBetween: 50,
    loopedSlides: 2
  },
  1240: {
    slidesPerView: 4,
    spaceBetween: 50,
    loopedSlides: 4
  }
}

onMounted(() => {
  nextTick(() => {
    if (swiper.value) {
      swiper.value.update()
    }
  })
})
</script>

<style scoped>
.carousel-container {
  overflow: hidden;
  position: relative;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #dc2751;
}

:deep(.swiper-pagination) {
  position: relative;
  margin-top: 20px;
}

:deep(.swiper-pagination-bullet) {
  background: #dc2751;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

:deep(.swiper-slide) {
  width: auto;
  height: auto;
}

.swiper-wrapper {
  display: flex;
}
</style>