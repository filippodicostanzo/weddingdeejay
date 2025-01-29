<template>
  <section class="relative py-24 bg-[#222]">
    <div class="absolute inset-0 top bg-cover bg-center opacity-35"
         style="background-image: url('/images/parallax-showcase.webp')">
    </div>
    <div class="container mx-auto px-4">
      <div class="mb-12 text-center">
        <h4 class="text-xl font-semibold text-primary mb-2 font-architects">
          Listen our
        </h4>
        <h2 class="text-4xl font-bold text-white font-montserrat">
          Livesets
        </h2>
      </div>

      <LoadSpinner v-if="loading"/>

      <div v-else-if="!data || data.length === 0"
           class="flex justify-center items-center min-h-[200px]">
        <div class="text-center">
          <p class="text-white text-lg">No photo available at the moment.</p>
          <p class="text-gray-400 mt-2">Please check back later.</p>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <div v-for="liveset in data"
             :key="liveset.id"
             class="group relative overflow-hidden transition-transform duration-300 px-4">
          <nuxt-link :to="`/livesets/${liveset.identifier}`">

            <img :src="liveset.cover.url" :alt="liveset.name">
            <!--          <iframe
                          :src="getIframeSrc(liveset.iframe)"
                          width="100%"
                          height="380"
                          frameBorder="0"
                          allowtransparency="true"
                          allow="encrypted-media">
                      </iframe>-->
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import LoadSpinner from "~/components/LoadSpinner.vue";

const props = defineProps({
  data: {
    type: Array as () => any[],
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

// Funzione per estrarre l'URL sicuro dall'iframe string
const getIframeSrc = (iframeString: string): string => {
  const srcRegex = /src="([^"]+)"/
  const match = iframeString.match(srcRegex)
  return match ? match[1] : ''
}
</script>

<style scoped>
.top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>