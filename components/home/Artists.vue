<!-- components/Artists.vue -->
<template>
  <section class="relative py-24 bg-[#222]">
    <div class="absolute inset-0 top bg-cover bg-center opacity-35" style="background-image: url('/images/parallax-artists.webp')"></div>
    <div class="container mx-auto px-4 relative">
      <div class="mb-12 text-center">
        <h4 class="text-xl font-semibold text-primary mb-2 font-architects">Our professional</h4>
        <h2 class="text-4xl font-bold text-white font-montserrat">Artists</h2>
      </div>

      <LoadSpinner v-if="loading"/>

      <div v-else-if="!data || data.length === 0"
           class="flex justify-center items-center min-h-[200px]">
        <div class="text-center">
          <p class="text-white text-lg">No artists available at the moment.</p>
          <p class="text-gray-400 mt-2">Please check back later.</p>
        </div>
      </div>
      <ArtistCarousel
          v-else
          :artists="data"
      />

    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import ArtistCarousel from "~/components/carousel/ArtistCarousel.vue";

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>