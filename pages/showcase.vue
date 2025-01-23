<template>

  <Title title="Showcase" image="header-showcase"/>

  <!-- Sezione Video -->
  <section class="bg-third">
    <div class="container mx-auto py-24">
      <div v-if="isLoading" class="flex justify-center items-center min-h-[200px]">
        <LoadSpinner/>
      </div>

      <div v-else-if="error" class="text-center p-4 bg-red-100 rounded-lg">
        <p class="text-red-600">{{ error.message }}</p>
        <button
            @click="retryFetch"
            class="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Riprova
        </button>
      </div>

      <div v-else-if="!videos.length" class="text-center p-4">
        <p>Nessun video disponibile al momento.</p>
      </div>

      <div v-else class="grid md:grid-cols-2 gap-8 lg:px-0 px-6">
        <div v-for="item in videos"
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

  <!-- Sezione Lavori Recenti -->
  <section class="bg-secondary">
    <div class="container mx-auto py-24 lg:px-0 px-6">
      <div class="text-center">
        <h2 class="font-montserrat text-4xl font-black text-white">Our Iconic Collaborations</h2>
        <p class="font-montserrat text-lg text-gray-200">
          Discover the magic of our recent events.
        </p>
        <p class="font-montserrat text-lg text-gray-200">
          Click on any venue to explore featured videos from our Instagram page.
        </p>
      </div>

      <div v-if="locations.length" class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-12">

        <div v-for="location in locations" :key="location.indentifier">
          <a
              :href="location.url"
              target="_blank"
              class="block"
          >
            <img
                :src="location.logo.url"
                :alt="location.identifier"
                class="w-[200px] h-auto mx-auto"
            >
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useVimeoService } from '~/api/services/vimeo'
import { useLocationService } from '~/api/services/locations'
import LoadSpinner from '~/components/LoadSpinner.vue'
import Title from '~/components/Title.vue'

// Stati
const isLoading = ref(true)
const error = ref(null)
const videos = ref([])
const locations = ref([])

// Servizi
const vimeoService = useVimeoService()
const locationService = useLocationService()

// Funzioni per il fetching dei dati
const fetchVimeoData = async () => {
  try {
    const response = await vimeoService.getVideos()
    videos.value = response.data || []
  } catch (err) {
    console.error('Errore nel caricamento dei video:', err)
    error.value = {
      message: 'Si è verificato un errore nel caricamento dei video. Riprova più tardi.'
    }
  }
}

const fetchLocationData = async () => {
  try {
    const response = await locationService.getLocations()
    locations.value = response || []
  } catch (err) {
    console.error('Errore nel caricamento delle locations:', err)
  }
}

// Funzione per ricaricare i dati in caso di errore
const retryFetch = async () => {
  error.value = null
  isLoading.value = true

  try {
    await Promise.all([
      fetchVimeoData(),
      fetchLocationData()
    ])
  } finally {
    isLoading.value = false
  }
}

// Caricamento iniziale dei dati
onMounted(async () => {
  await retryFetch()
})
</script>

<style scoped>
.video-embed :deep(iframe) {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}
</style>