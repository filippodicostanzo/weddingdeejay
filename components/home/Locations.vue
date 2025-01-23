<template>
  <section class="py-24 bg-primary">
    <div class="container mx-auto px-4">
      <div class="mx-auto relative">
        <Swiper v-bind="swiperConfig" class="!pb-12">
          <SwiperSlide
              v-for="location in data"
              :key="location.identifier"
          >
            <a
                :href="location.url"
                target="_blank"
                class="block"
            >
              <img
                  :src="location.logo.url"
                  :alt="location.identifier"
                  class="w-full h-auto"
              >
            </a>
          </SwiperSlide>

          <div class="swiper-pagination !bottom-0"></div>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<!-- components/Locations.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'


const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

// Configurazione Swiper
const swiperModules = [Pagination, Navigation, Autoplay]
const swiperConfig = {
  modules: swiperModules,
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 5000
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    499: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    999: {
      slidesPerView: 4,
      spaceBetween: 50
    },
    1240: {
      slidesPerView: 6,
      spaceBetween: 50
    }
  }
}

onMounted(() => {
  console.log(props.data)
})
</script>

<style scoped>
:deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

</style>
