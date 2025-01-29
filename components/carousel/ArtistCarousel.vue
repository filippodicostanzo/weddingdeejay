<!-- components/carousel/ArtistCarousel.vue -->
<template>
  <base-carousel
      pagination-type="artists"
      :breakpoints-config="breakpointsConfig"
  >
    <SwiperSlide v-for="artist in artists" :key="artist.identifier" class="h-full mb-12">
      <div class="flex flex-col h-full">
        <NuxtLink :to="`artists/${artist.identifier}`" class="font-montserrat text-xs">
          <div class="image-layer" :style="{'background-image': `url(${artist.cover.url})`}">
          </div>
        </NuxtLink>
        <div class="box-container flex-1">
          <NuxtLink :to="`artists/${artist.identifier}`" class="font-montserrat text-xs">
            <h2 class="text-2xl font-black font-montserrat text-center">{{ artist.name }}</h2>
          </NuxtLink>
          <div class="category bg-primary px-4 text-white mx-auto rounded-3xl text-sm items-center py-1 flex mt-3">
            <span>{{ artist.category.name }}</span>
          </div>
          <div class="social">
            <ul>
              <li>
                <a :href="artist.social.facebook" target="_blank" rel="noopener noreferrer">
                  <font-awesome-icon :icon="['fab', 'facebook-f']"/>
                </a>
              </li>
              <li>
                <a :href="artist.social.instagram" target="_blank" rel="noopener noreferrer">
                  <font-awesome-icon :icon="['fab', 'instagram']"/>
                </a>
              </li>
              <li>
                <a :href="artist.social.youtube" target="_blank" rel="noopener noreferrer">
                  <font-awesome-icon :icon="['fab', 'youtube']"/>
                </a>
              </li>
              <li>
                <a :href="artist.contacts.website" target="_blank" rel="noopener noreferrer">
                  <font-awesome-icon :icon="['fab', 'chrome']"/>
                </a>
              </li>
            </ul>
          </div>
          <div v-html="truncateText(artist.biography, 120)"
               class="text-center font-montserrat font-light text-sm"></div>
          <div class="text-center">
          <span class="bg-primary text-white rounded-3xl py-2 px-5 max-w-[110px] mx-auto flex justify-center mt-5">
            <NuxtLink :to="`artists/${artist.identifier}`" class="font-montserrat text-xs">
              Read more
            </NuxtLink>
          </span>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </base-carousel>
</template>

<script setup>
import {SwiperSlide} from 'swiper/vue'
import BaseCarousel from "~/components/carousel/BaseCarousel.vue"

defineProps({
  artists: {
    type: Array,
    required: true
  }
})

const breakpointsConfig = {
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
    loopedSlides: 1
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 30,
    loopedSlides: 2
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
    loopedSlides: 3
  }
}

const truncateText = (text, length) => {
  if (!text) return ''
  return text.length <= length ? text : text.substring(0, length) + '...'
}
</script>

<style scoped>
.image-layer {
  height: 300px;
  background-size: cover;
  background-position: center;
}

.box-container {
  padding: 20px;
  background: white;
  display: flex;
  flex-direction: column;
}

.social ul {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0;
  list-style: none;
  margin: 15px 0;
}

.social ul li a {
  transition: color 0.3s ease;
}

.social ul li a:hover {
  color: #666;
}


.ltx-btn-wrap {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

/* Ottimizzazioni per Swiper */
:deep(.swiper-slide) {
  height: auto;
  display: flex;
}
</style>