<template>
  <Slider/>
  <HomeServices :data="services" :loading="loading"/>
  <HomeAbout/>
  <HomeArtists :data="artists" :loading="loading"/>
  <HomePackages :data="packages" :loading="loading"/>
  <HomeVideos :data="vimeo" :loading="loading"/>
  <HomeLocations :data="locations" :loading="loading"/>
  <HomeInstagram :data="instagram" :loading="loading"/>
  <HomePlaylists :data="playlists" :loading="loading"/>
  <HomeReviews :data="reviews" :loading="loading"/>
  <HomeLivesets :data="livesets" :loading="loading"/>
  <HomeContacts/>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {useArtistService} from '~/api/services/artists'
import {useInstagramService} from "~/api/services/instagram"
import {useLiveSetService} from "~/api/services/livesets";
import {useLocationService} from "~/api/services/locations"
import {usePackageService} from '~/api/services/packages'
import {usePlaylistService} from "~/api/services/playlists"
import {useReviewService} from "~/api/services/reviews";
import {useServiceService} from "~/api/services/services"
import {useVimeoService} from '~/api/services/vimeo'


const artists = ref([])
const instagram = ref([])
const livesets = ref([])
const locations = ref([])
const packages = ref([])
const playlists = ref([])
const reviews = ref([])
const services = ref([])
const vimeo = ref([])
const loading = ref(true)  // Inizia come true
const error = ref(null)

const {getArtists} = useArtistService()
const {getPosts} = useInstagramService()
const {getLiveSets} = useLiveSetService()
const {getLocations} = useLocationService()
const {getPackages} = usePackageService()
const {getPlaylists} = usePlaylistService()
const {getReviews} = useReviewService()
const {getServices} = useServiceService()
const {getVideos} = useVimeoService()

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
      reviewsData,
      serivcesData,
      vimeoData
    ] = await Promise.all([
      getArtists(),
      getPosts(),
      getLiveSets(),
      getLocations(),
      getPackages(),
      getPlaylists(),
      getReviews(),
      getServices(),
      getVideos(),
    ])

    artists.value = artistsData
    instagram.value = instagramData
    livesets.value = livesetsData
    locations.value = locationsData
    packages.value = packagesData
    playlists.value = playlistsData
    reviews.value = reviewsData
    services.value = serivcesData
    vimeo.value = vimeoData?.data ? vimeoData.data.slice(0, 6) : []

  } catch (err) {
    console.error('Errore nel caricamento dei dati:', err)
    error.value = err
  } finally {
    loading.value = false  // Settiamo loading a false sia in caso di successo che di errore
  }
}

watch([artists, instagram, livesets, locations, packages, playlists, reviews, services, vimeo],
    ([newArtists, newInstagram, newLivesets, newLocations, newPackages, newPlaylists, newReviews, newServices, newVimeo]) => {
      if (!loading.value && newArtists?.length) {
        useHomeSeo();
      }
    });

onMounted(() => {
  console.log('Component mounted, starting packages fetch...')
  fetchAllData()
})
</script>

<style scoped>
</style>