<template>

  <section class="py-24 bg-third">
    <div class="container mx-auto px-4">
      <div class="mb-12 text-center">
        <h4 class="text-xl font-semibold text-primary mb-2 font-architects">Postcard from</h4>
        <h2 class="text-4xl font-bold text-gray-900 font-montserrat">Events</h2>
      </div>

      <LoadSpinner v-if="loading" />

      <div v-else-if="!data || data.length === 0"
           class="flex justify-center items-center min-h-[200px]">
        <div class="text-center">
          <p class="text-white text-lg">No photo available at the moment.</p>
          <p class="text-gray-400 mt-2">Please check back later.</p>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
        <div v-for="post in data"
             :key="post.link"
             class="group relative overflow-hidden transition-transform duration-300 shadow-2xl">
          <a :href="post.link"
             target="_blank"
             rel="noopener noreferrer"
             class="block aspect-square  shadow-xl">
            <div class="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 border-[20px] border-white"
                 :style="{ 'background-image': `url(${post.image})` }">
            </div>

          </a>
        </div>
      </div>


    </div>

  </section>

</template>

<script setup>
import {onMounted } from 'vue'
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

onMounted(() => {
  console.log(props.data)
})

</script>

<style scoped>

</style>