

<template>
  <section class="py-24 bg-third" id="reviews">
    <div class="container mx-auto px-4">
      <div class="mb-12 text-center">
        <h4 class="text-xl font-semibold text-primary mb-2 font-architects">What our clients say</h4>
        <h2 class="text-4xl font-bold text-gray-900 font-montserrat">Reviews</h2>
      </div>

      <LoadSpinner v-if="loading"/>

      <div v-else-if="!data || data.length === 0"
           class="flex justify-center items-center min-h-[200px]">
        <div class="text-center">
          <p class="text-white text-lg">No reviews available at the moment.</p>
          <p class="text-gray-400 mt-2">Please check back later.</p>
        </div>
      </div>


      <ReviewsCarousel :reviews="data"/>

    </div>
  </section>
</template>


<script setup lang="ts">

import ReviewsCarousel from "~/components/carousel/ReviewsCarousel.vue";

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