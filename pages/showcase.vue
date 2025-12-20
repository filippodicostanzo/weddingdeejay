<template>

  <Title title="Showcase" image="header-showcase" />

  <!-- Sezione Video -->
  <section class="bg-third">
    <div class="container mx-auto py-24">
      <div v-if="isLoading" class="flex justify-center items-center min-h-[200px]">
        <LoadSpinner />
      </div>

      <div v-else-if="error" class="text-center p-4 bg-red-100 rounded-lg">
        <p class="text-red-600">{{ error.message }}</p>
        <button @click="retryFetch" class="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Retry
        </button>
      </div>

      <div v-else-if="!videos.length" class="text-center p-4">
        <p>No videos available at the moment.</p>
      </div>

      <div v-else class="grid md:grid-cols-2 gap-8 lg:px-0 px-6">
        <div v-for="item in videos" :key="item.video_id" class="w-full">
          <div class="video-embed w-full aspect-video rounded-lg overflow-hidden bg-black">
            <iframe :src="`https://www.youtube.com/embed/${item.video_id}`" :title="item.title" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="w-full h-full">
            </iframe>
          </div>
          <div class="mt-4">
            <h3 class="text-gray-900 font-semibold text-lg mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm mb-3 line-clamp-3">{{ item.description }}</p>
            <div class="flex items-center gap-4 text-sm text-gray-500">
              <div class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>{{ formatNumber(item.view_count) }} views</span>
              </div>
              <div class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd" />
                </svg>
                <span>{{ formatNumber(item.like_count) }} likes</span>
              </div>
            </div>
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
          <a :href="location.url" target="_blank" class="block">
            <img :src="location.logo.url" :alt="location.identifier" class="w-[200px] h-auto mx-auto">
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useYoutubeService } from '~/api/services/youtube'
import { useLocationService } from '~/api/services/locations'
import LoadSpinner from '~/components/LoadSpinner.vue'
import Title from '~/components/Title.vue'

// Stati
const isLoading = ref(true)
const error = ref(null)
const videos = ref([])
const locations = ref([])

// Servizi
const youtubeService = useYoutubeService()
const locationService = useLocationService()

const updateSeo = () => {
  if (videos.value.length || locations.value.length) {
    useShowcaseSeo(videos.value, locations.value);
  }
};

// Funzione per formattare i numeri (1000 -> 1K, 1000000 -> 1M)
const formatNumber = (num) => {
  if (!num) return '0'
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

// Funzioni per il fetching dei dati
const fetchYoutubeData = async () => {
  try {
    const response = await youtubeService.getVideos('UCbsFSdZDpD2vCNHD6Vyf-PQ', 20)
    videos.value = response.data || []
    updateSeo()
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
    updateSeo()
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
      fetchYoutubeData(),
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


// Aggiorniamo la SEO quando cambiano i dati
watch([videos, locations], () => {
  updateSeo()
}, { deep: true })
</script>

<style scoped>
.video-embed :deep(iframe) {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>