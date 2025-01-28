<template>
  <div>
    <Title :title="liveSet.name" image="header-livesets" v-if="liveSet"/>

    <div class="bg-third">
      <div class="container mx-auto py-24">

        <div v-if="loading">
          <LoadSpinner/>
        </div>
        <div v-else-if="error">Error loading artist data: {{ error.message }}</div>
        <div v-else-if="liveSet">

          <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:px-0 px-6">

            <div class="space-y-4">
              <img :src="liveSet.cover.url" :alt="liveSet.name" class="h-[500px] object-cover object-center w-full "/>
              <div>
                <!-- Aggiungiamo qui il player -->
                <MixcloudPlayer
                    v-if="liveSet.url"
                    :mixcloud-url="liveSet.url"
                />
              </div>
            </div>

            <div class="space-y-4">
              <nuxt-link :to="`/artists/${liveSet.artists.identifier}`" class="block">
                <h2 class="font-montserrat text-2xl text-primary font-medium">
                  <font-awesome-icon :icon="['fas', 'headphones']" class="mr-2"/>
                  {{ liveSet.artists.name }}
                </h2>
              </nuxt-link>

              <h2 class="font-montserrat text-2xl text-secondary font-medium ">
                <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2"/>
                {{ liveSet.date }}
              </h2>

              <nuxt-link :to="`/venues/${liveSet.locations.identifier}`" class="block">
                <h2 class="font-montserrat text-2xl text-primary font-medium ">
                  <font-awesome-icon :icon="['fas', 'map-pin']" class="mr-2"/>
                  {{ liveSet.locations.name }}
                </h2>
              </nuxt-link>

              <div class="font-montserrat text-sm space-y-2" v-html="liveSet.description">
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>


</template>

<script setup>

import Title from "~/components/Title.vue";
import {ref, computed, onMounted} from 'vue';
import {useRoute} from "#vue-router";
import {useLiveSetService} from "~/api/services/livesets";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const liveSet = ref(null)
const loading = ref(true);
const error = ref(null);
const route = useRoute();

const {getLiveSets} = useLiveSetService();

const fetchLiveSetData = async () => {
  loading.value = true;
  try {
    const liveSetsData = await getLiveSets();
    console.log(liveSetsData);
    const liveSetIdentifier = route.params.identifier;
    liveSet.value = liveSetsData.find(a => a.identifier === liveSetIdentifier);

  } catch (err) {
    console.error('Errore nel caricamento dei dati dell\'artista:', err);
    error.value = err;
  } finally {
    loading.value = false;
  }


};

watch(liveSet, (newLiveSet) => {
  if (newLiveSet) {
    useLiveSetsSeo(newLiveSet, 'single');
  }
});

onMounted(() => {
  fetchLiveSetData();
});

</script>
<style scoped>

</style>