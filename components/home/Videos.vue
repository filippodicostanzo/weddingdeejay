<template>
  <section class="relative py-24 bg-[#222]">
    <div class="absolute inset-0 top bg-cover bg-center opacity-35" style="background-image: url('/images/parallax-showcase.webp')"></div>
    <div class="container mx-auto px-4">
      <div class="mb-12">
        <div class="text-center">
          <h4 class="text-xl font-semibold text-primary mb-2 font-architects">What we do</h4>
          <h2 class="text-4xl font-bold text-white font-montserrat">Showcase</h2>
        </div>
      </div>

      <!-- Mostra LoadSpinner durante il caricamento -->
      <LoadSpinner v-if="loading" />

      <!-- Messaggio quando non ci sono dati -->
      <div v-else-if="!data || data.length === 0"
           class="flex justify-center items-center min-h-[200px]">
        <div class="text-center">
          <p class="text-white text-lg">No videos available at the moment.</p>
          <p class="text-gray-400 mt-2">Please check back later.</p>
        </div>
      </div>

      <!-- Mostra la griglia quando ci sono dati -->
      <div v-else class="grid md:grid-cols-2 gap-8">
        <div v-for="item in data"
             :key="item.uri"
             class="w-full">
          <div v-if="item?.embed?.html"
               v-html="item.embed.html"
               class="video-embed w-full aspect-video rounded-lg overflow-hidden">
          </div>
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
    required: true,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
/*
  Se necessario stilizzare l'iframe di Vimeo.
  Spesso è necessario per assicurarsi che l'iframe sia responsive
*/
.video-embed :deep(iframe) {
  width: 100%;
  height: 100%;
}
</style>