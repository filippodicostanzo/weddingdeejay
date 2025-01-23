<template>
  <Title :title="venue.name" image="header-venues" v-if="venue"/>

  <div class="bg-third">
    <div class="container mx-auto py-24">
      <div v-if="loading">
        <LoadSpinner/>
      </div>
      <div v-else-if="error">Error loading artist data: {{ error.message }}</div>
      <div v-else-if="venue">

        <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:px-0 px-6">

          <div class="relative">
            <img :src="venue.cover.url" :alt="venue.name" class="min-h-[500px] h-full object-cover object-center w-full"/>
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <img :src="venue.logo.url" class="w-64" alt="logo"/>
            </div>
          </div>

          <div class="space-y-4">

            <h2 class="font-montserrat text-3xl font-medium text-primary">
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="mr-2"/>
              {{ venue.city }}
            </h2>

            <div v-html="venue.description" class="font-montserrat space-y-4 text-sm"></div>

            <div>
              <a :href="venue.url" target="_blank">
                <button class="bg-primary py-2 px-6 rounded-full mt-2 text-white font-montserrat font-bold">
                  <font-awesome-icon :icon="['fas', 'play']" class="mr-2 "/>
                  <span>View Highliths Video</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Title from "~/components/Title.vue";
import {ref} from "vue";
import {useRoute} from "#vue-router";
import {useLocationService} from "~/api/services/locations";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const venue = ref(null);
const loading = ref(true);
const error = ref(null);
const route = useRoute();
const {getLocations} = useLocationService();

const fetchLocationsData = async () => {
  loading.value = true;
  try {
    const locationsData = await getLocations();
    const locationIdentifier = route.params.identifier;
    venue.value = locationsData.find(a => a.identifier === locationIdentifier);
    console.log(venue);
  } catch (err) {
    console.error('Errore nel caricamento dei dati dell\'artista:', err);
    error.value = err;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchLocationsData();
});

</script>

<style scoped>

</style>