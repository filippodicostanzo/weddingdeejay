<template>
  <div class="w-full">
    <Swiper
        :modules="modules"
        :slides-per-view="3"
        :loop="true"
        :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
        :pagination="{ clickable: true }"
        :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
        :breakpoints="{
        320:  { slidesPerView: 1, spaceBetween: 20, loopedSlides: 1 },
        640:  { slidesPerView: 2, spaceBetween: 25, loopedSlides: 2 },
        768:  { slidesPerView: 2, spaceBetween: 25, loopedSlides: 2 },
        1024: { slidesPerView: 3, spaceBetween: 30, loopedSlides: 3 }
      }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="w-full ml-auto relative"
    >
      <!-- Qui le tue slide -->
      <SwiperSlide v-for="slide in processedSlides" :key="slide.id">
        <div class="bg-white rounded-lg shadow-md p-4 h-full">
          <img
              :src="slide.image"
              :alt="slide.name"
              class="w-full h-40 object-cover rounded-md mb-2"
          />
          <h3 class="text-lg font-semibold">{{ slide.name }}</h3>
        </div>
      </SwiperSlide>

      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </Swiper>
  </div>
</template>

<script setup>
import {ref, computed, onMounted, nextTick, defineProps} from 'vue'
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Autoplay, Pagination, Navigation} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [Autoplay, Pagination, Navigation]

const props = defineProps({
  services: {
    type: Array,
    required: true,
    default: () => []
  }
})

const defaultSlides = [
  {
    id: 1,
    name: 'Dj Set for Aperitif',
    image: 'https://via.placeholder.com/300x200?text=Aperitif'
  },
  {
    id: 2,
    name: 'Dj Set for Party',
    image: 'https://via.placeholder.com/300x200?text=Party'
  },
  {
    id: 3,
    name: 'Dj Set for Wedding',
    image: 'https://via.placeholder.com/300x200?text=Wedding'
  }
]

// Usa le slide passate via props se esistono, altrimenti usa quelle di default
const processedSlides = computed(() => {
  return props.services.length > 0 ? props.services : defaultSlides
})

const swiper = ref(null)

const onSwiper = (swiperInstance) => {
  swiper.value = swiperInstance
  nextTick(() => {
    swiper.value.update()
  })
}

const onSlideChange = () => {
  if (swiper.value) {
    swiper.value.updateProgress()
    swiper.value.updateSlidesClasses()
  }
}

onMounted(() => {
  nextTick(() => {
    if (swiper.value) {
      // Creiamo manualmente il loop e aggiorniamo
      swiper.value.loopCreate()
      swiper.value.update()
    }
  })
})
</script>

<style scoped>
.swiper-wrapper {
  display: flex;
}
</style>
