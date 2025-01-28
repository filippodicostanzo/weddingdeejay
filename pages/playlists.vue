<template>
  <div>
    <Title title="Playlists" image="header-playlists"/>

    <div class="bg-third">
      <div class="container mx-auto py-24">
        <div v-if="loading">
          <LoadSpinner/>
        </div>
        <div v-else-if="error">Error loading playlist data: {{ error.message }}</div>
        <div v-else>
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 lg:px-0 px-6">
            <div v-for="playlist in playlistsData"
                 :key="playlist.id"
                 class="group relative overflow-hidden transition-transform duration-300">
              <iframe :src="playlist.url" width="100%" height="415" frameBorder="0" allowtransparency="true"
                      allow="encrypted-media"></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import {onMounted, ref} from "vue";
import {usePlaylistService} from "~/api/services/playlists";
import Title from "~/components/Title.vue";


const loading = ref(true);
const error = ref(null);

const {getPlaylists} = usePlaylistService();

const playlistsData = ref([]);

const fetchPlaylistData = async () => {
  loading.value = true;
  try {
    playlistsData.value = await getPlaylists();
  } catch (err) {
    console.error('Error loading playlist data:', err);
    error.value = err;
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchPlaylistData();
  usePlaylistsSeo(playlistsData.value);
});

</script>

<style scoped>

</style>