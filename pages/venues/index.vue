<template>

  <Title title="Venues" image="header-venues"/>

  <div class="bg-third">
    <div class="container mx-auto py-24">
      <div v-if="loading">
        <LoadSpinner/>
      </div>
      <div v-else-if="error">Error loading playlist data: {{ error.message }}</div>
      <div v-else>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 lg:px-0 px-6">
          <div v-for="location in locationsData"
               :key="location.identifier"
               class="group relative lg:min-h-[500px] min-h-[400px] bg-cover bg-center overflow-hidden transition-transform duration-300 border-[20px] border-white"
               :style="`background-image: url(${location.cover.url})`">
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent top-1/2"></div>
            <nuxt-link :to="`/venues/${location.identifier}`" class="block relative z-10 h-full">
              <img
                  :src="location.logo.url"
                  :alt="location.identifier"
                  class="w-[200px] h-auto mx-auto absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>

import Title from "~/components/Title.vue";
import {useLocationService} from "~/api/services/locations";
import {onMounted, ref, watch} from "vue";

const loading = ref(true);
const error = ref(null);

const {getLocations} = useLocationService();
const locationsData = ref([]);

const fetchLocationData = async () => {
  loading.value = true;
  try {
    locationsData.value = await getLocations();
  } catch (err) {
    console.error('Error loading location data:', err);
    error.value = err;
  } finally {
    loading.value = false;
  }
}

watch(locationsData, (newLocations) => {
  if (newLocations?.length) {
    useVenuesSeo(newLocations);
  }
});

onMounted(() => {
  fetchLocationData();
  useVenuesSeo(locationsData.value, 'list');
});

</script>
<style scoped>

</style>