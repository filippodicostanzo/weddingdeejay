<template>
  <Slider />
  <HomeServices :data="services" :loading="loading" />
  <HomeAbout />
  <HomeArtists :data="artists" :loading="loading" />
  <HomePackages :data="packages" :loading="loading" />
  <HomeYoutube :data="youtube" :loading="loading" />
  <HomeLocations :data="locations" :loading="loading" />
  <HomeInstagram :data="instagram" :loading="loading" />
  <HomePlaylists :data="playlists" :loading="loading" />
  <HomeGoogleReviews :data="googleReviews" :loading="loading" />
  <HomeLivesets :data="livesets" :loading="loading" />
  <HomeContacts />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useArtistService } from '~/api/services/artists'
import { useInstagramService } from "~/api/services/instagram"
import { useLiveSetService } from "~/api/services/livesets";
import { useLocationService } from "~/api/services/locations"
import { usePackageService } from '~/api/services/packages'
import { usePlaylistService } from "~/api/services/playlists"
import { useServiceService } from "~/api/services/services"
import { useYoutubeService } from '~/api/services/youtube'
import { useGoogleReviewsService } from '~/api/services/googlereviews'


const artists = ref([])
const instagram = ref([])
const livesets = ref([])
const locations = ref([])
const packages = ref([])
const playlists = ref([])
const googleReviews = ref([])
const services = ref([])
const youtube = ref([])
const loading = ref(true)  // Inizia come true
const error = ref(null)

const { getArtists } = useArtistService()
const { getPosts } = useInstagramService()
const { getLiveSets } = useLiveSetService()
const { getLocations } = useLocationService()
const { getPackages } = usePackageService()
const { getPlaylists } = usePlaylistService()
const { getServices } = useServiceService()
const { getVideos: getYoutubeVideos } = useYoutubeService()
const { getReviews: getGoogleReviews } = useGoogleReviewsService()

const fetchAllData = async () => {
  loading.value = true  // Settiamo loading a true all'inizio del fetch
  try {
    const [
      artistsData,
      instagramData,
      livesetsData,
      locationsData,
      packagesData,
      playlistsData,
      googleReviewsData,
      serivcesData,
      youtubeData
    ] = await Promise.all([
      getArtists(),
      getPosts(),
      getLiveSets(),
      getLocations(),
      getPackages(),
      getPlaylists(),
      getGoogleReviews(),
      getServices(),
      getYoutubeVideos()
    ])

    artists.value = artistsData
    instagram.value = instagramData
    livesets.value = livesetsData
    locations.value = locationsData
    packages.value = packagesData
    playlists.value = playlistsData
    googleReviews.value = googleReviewsData
    services.value = serivcesData
    youtube.value = youtubeData?.data ? youtubeData.data.slice(0, 6) : []

    console.log('📺 YouTube Data received:', youtubeData)
    console.log('📺 YouTube videos assigned:', youtube.value)
    console.log('📺 YouTube videos count:', youtube.value?.length)

  } catch (err) {
    console.error('Errore nel caricamento dei dati:', err)
    error.value = err
  } finally {
    loading.value = false  // Settiamo loading a false sia in caso di successo che di errore
  }
}

watch([artists, instagram, livesets, locations, packages, playlists, googleReviews, services, youtube],
  ([newArtists, newInstagram, newLivesets, newLocations, newPackages, newPlaylists, newGoogleReviews, newServices, newYoutube]) => {
    if (!loading.value && newArtists?.length) {
      useHomeSeo();
    }
  });

onMounted(() => {
  console.log('Component mounted, starting packages fetch...')
  fetchAllData()
})
</script>

<style scoped></style>