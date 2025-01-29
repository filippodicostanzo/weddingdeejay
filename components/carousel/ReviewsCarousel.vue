<!-- components/carousel/ServiceCarousel.vue -->
<template>
  <base-carousel
      pagination-type="services"
      :breakpoints-config="breakpointsConfig"
  >
    <SwiperSlide class="h-full bg-white shadow-md mb-10" v-for="review in reviews" :key="review.identifier">

      <div class="box-container p-10">
        <h2 class="text-center font-black font-montserrat text-4xl mb-5">{{ review.couple }}</h2>
        <div class="flex justify-center mb-5">
          <font-awesome-icon
              v-for="n in 5"
              :key="n"
              :icon="n <= getStarCount(review.value) ? 'fas fa-star' : 'far fa-star'"
              class="text-primary"
          />
        </div>
        <div class="flex justify-center items-center mb-5">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="text-primary mr-2" />
          <span class="text-primary font-montserrat">{{ review.location }}</span>
          <font-awesome-icon :icon="['fas', 'calendar-alt']" class="text-primary ml-6 mr-2" />
          <span class="text-primary font-montserrat">{{ formatDate(review.date) }}</span>
        </div>
        <div class="flex justify-center items-center mb-5">
          <div v-for="artist in review.artists" :key="artist.name" class="flex items-center ml-4">
            <font-awesome-icon :icon="['fas', 'headphones']" class="text-primary mr-2" />
            <span class="text-primary font-montserrat">{{ artist.name }}</span>
          </div>
        </div>
        <div v-html="truncateText(review.review, 150)" class="font-montserrat  font-light text-center"></div>
        <div class="text-center my-5">
          <span class="bg-primary text-white rounded-3xl py-2 px-5 max-w-[110px] mx-auto flex justify-center">
            <NuxtLink to="/reviews" class="font-montserrat text-xs">
              Read more
            </NuxtLink>
          </span>
        </div>
      </div>
    </SwiperSlide>
  </base-carousel>
</template>

<script setup>
import BaseCarousel from "~/components/carousel/BaseCarousel.vue";
import {SwiperSlide} from "swiper/vue";
import { format } from 'date-fns';

defineProps({
  reviews: {
    type: Array,
    required: true
  }
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

const getStarCount = (value) => {
  switch (value) {
    case 'One':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    default:
      return 0;
  }
};

const formatDate = (date) => {
  return format(new Date(date), 'MM/dd/yyyy');
};

</script>