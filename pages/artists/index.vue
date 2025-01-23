<template>
  <div>
    <Title title="Artists" image="header-artists"/>

    <div class="bg-third">
      <div class="container mx-auto py-24">
        <div v-if="loading">
          <LoadSpinner/>
        </div>
        <div v-else-if="error">Error loading artist data: {{ error.message }}</div>
        <div v-else>
          <ClientOnly>
            <ShuffleGrid :items="artistsData"/>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import {useRoute} from "#vue-router";
import {useArtistService} from "~/api/services/artists";
import Title from "~/components/Title.vue";

const loading = ref(true);
const error = ref(null);
const route = useRoute();
const {getArtists} = useArtistService();

const artistsData = ref([]);

const fetchArtistData = async () => {
  loading.value = true;
  try {
    artistsData.value = await getArtists();
  } catch (err) {
    console.error('Errore nel caricamento dei dati dell\'artista:', err);
    error.value = err;
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchArtistData();
});

</script>
