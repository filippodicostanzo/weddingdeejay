<template>


  <section class="relative py-24 bg-[#222]">
    <div class="absolute inset-0 top bg-cover bg-center opacity-35" style="background-image: url('/images/parallax-showcase.webp')"></div>
    <div class="container mx-auto px-4">
      <div class="mb-12">
        <div class="text-center">
          <h4 class="text-xl font-semibold text-primary mb-2 font-architects">Discover our</h4>
          <h2 class="text-4xl font-bold text-white font-montserrat">Playlists</h2>
        </div>
      </div>


      <LoadSpinner v-if="loading" />

      <div v-else-if="!data || data.length === 0"
           class="flex justify-center items-center min-h-[200px]">
        <div class="text-center">
          <p class="text-white text-lg">No playlists available at the moment.</p>
          <p class="text-gray-400 mt-2">Please check back later.</p>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-5">
        <div v-for="playlist in data"
             :key="playlist.id"
             class="group relative overflow-hidden transition-transform duration-300">
          <iframe :src="playlist.url" width="100%" height="380" frameBorder="0" allowtransparency="true"
                  allow="encrypted-media"></iframe>
        </div>
      </div>

    </div>
  </section>

</template>


<script setup>

import LoadSpinner from "~/components/LoadSpinner.vue";

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