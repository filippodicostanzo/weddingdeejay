<!-- components/carousel/ServiceCarousel.vue -->
<template>
  <base-carousel
      pagination-type="services"
      :breakpoints-config="breakpointsConfig"
  >
    <SwiperSlide class="h-full bg-white shadow-md mb-10" v-for="service in services" :key="service.identifier">
      <NuxtLink to="/services" class="font-montserrat text-xs">

        <div class="image-layer h-[350px] bg-cover bg-center" :style="backgroundImage(service.cover.url)">
        </div>
        <div class="box-container p-10">
          <h2 class="text-center font-black font-montserrat text-4xl mb-5">{{ service.name }}</h2>
          <div v-html="truncateText(service.description, 106)" class="font-montserrat  font-light text-center"></div>
          <div class="text-center my-5">
          <span class="bg-primary text-white rounded-3xl py-2 px-5 max-w-[110px] mx-auto flex justify-center">
              Read more
          </span>
          </div>
        </div>
      </NuxtLink>
    </SwiperSlide>
  </base-carousel>
</template>

<script setup>
import BaseCarousel from "~/components/carousel/BaseCarousel.vue";
import {SwiperSlide} from "swiper/vue";

defineProps({
  services: {
    type: Array,
    required: true
  }
})


const backgroundImage = (url) => ({
  'background-image': `url(${url})`
})

const breakpointsConfig = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30
  }
}

const truncateText = (text, length) => {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}
</script>