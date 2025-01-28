<template>
  <Title title="Livesets" image="header-livesets"/>
  <div class="bg-third">
    <div class="container mx-auto py-24">

      <LoadSpinner v-if="loading"/>


      <div v-else-if="error">Error loading reviews data: {{ error.message }}</div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 lg:px-0 px-6">
        <div v-for="liveset in livesets"
             :key="liveset.id"
             class="group relative overflow-hidden transition-transform duration-300">
          <NuxtLink :to="`/livesets/${liveset.identifier}`">
            <img :src="liveset.cover.url" :alt="liveset.name">
          </NuxtLink>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import LoadSpinner from "~/components/LoadSpinner.vue";
import {useLiveSetService} from "~/api/services/livesets";
import Title from "~/components/Title.vue";

const loading = ref(true)
const error = ref(null)
const livesets = ref([])

const {getLiveSets} = useLiveSetService()

const fetchAllData = async () => {
  loading.value = true  // Settiamo loading a true all'inizio del fetch
  try {
    const [
      livesetsData,

    ] = await Promise.all([
      getLiveSets(),
    ])

    livesets.value = livesetsData

  } catch (err) {
    console.error('Errore nel caricamento dei dati:', err)
    error.value = err
  } finally {
    loading.value = false  // Settiamo loading a false sia in caso di successo che di errore
  }
}


onMounted(() => {
  fetchAllData()
  useLiveSetsSeo(livesets.value, 'list');
})

watch(livesets, (newLivesets) => {
  if (newLivesets?.length) {
    useLiveSetsSeo(newLivesets);
  }
});

</script>


<style scoped>

</style>