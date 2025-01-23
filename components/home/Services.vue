<template>

  <section class="py-24 bg-third" id="services">
    <div class="container mx-auto px-4">
      <div class="mb-12 text-center">
        <h4 class="text-xl font-semibold text-primary mb-2 font-architects">What we do</h4>
        <h2 class="text-4xl font-bold text-gray-900 font-montserrat">Services</h2>
      </div>

      <LoadSpinner v-if="loading"/>

      <div v-else-if="!data || data.length === 0"
           class="flex justify-center items-center min-h-[200px]">
        <div class="text-center">
          <p class="text-white text-lg">No photo available at the moment.</p>
          <p class="text-gray-400 mt-2">Please check back later.</p>
        </div>
      </div>

       <ServiceCarousel :services="data"/>

    </div>

  </section>
</template>

<script setup lang="ts">

import ServiceCarousel from "~/components/carousel/ServiceCarousel.vue";
import ArtistCarousel from "~/components/carousel/ArtistCarousel.vue";
import CustomSlider from "~/components/carousel/CustomSlider.vue";

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

<style scoped>

</style>