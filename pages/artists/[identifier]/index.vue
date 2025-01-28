<template>

  <div>

    <Title :title="artist.name" image="header-artists" v-if="artist"/>

    <div class="bg-third">
      <div class="container mx-auto py-24">
        <div v-if="loading">
          <LoadSpinner/>
        </div>
        <div v-else-if="error">Error loading artist data: {{ error.message }}</div>
        <div v-else-if="artist" class="lg:px-0 px-6">
          <div class="grid lg:grid-cols-3 grid-cols-1 gap-6 ">

            <div>
              <img :src="artist.cover.url" :alt="artist.name" class="h-[500px] object-cover object-center"/>
            </div>

            <div class="space-y-2">
              <h2 class="font-montserrat text-3xl font-black">{{ artist.name }}</h2>
              <h4 class="font-montserrat text-primary font-black text-2xl">{{ artist.category.name }}</h4>

              <div class="!mt-5">
                <ul class="contacts-list space-y-4">
                  <li>
                    <a href="tel:+393314042263" class="flex">
                      <img src="/icons/phone.png" class="image-filter mr-3" width="30" alt="Phone">
                      <p class="font-montserrat">Phone</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/393314042263?text=Send%20Message%20to%20Start%20the%20Chat" target="_blank"
                       class="flex">
                      <img src="/icons/whatsapp.png" class="image-filter mr-3" width="30" alt="Whatsapp">
                      <p class="font-montserrat">Whatsapp</p>
                    </a>
                  </li>

                  <li>
                    <a href="mailto:info@weddingdeejayamalficoast.com" class="flex">
                      <img src="/icons/email.png" class="image-filter mr-3" width="30" alt="Email">
                      <p class="font-montserrat">Email</p>
                    </a>
                  </li>
                  <li>
                    <a :href="artist.contacts.website" target="_blank" class="flex">
                      <img src="/icons/globe.png" class="image-filter mr-3" width="30" alt="Website">
                      <p class="font-montserrat">Website</p>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="w-full border-[1px] !my-8"></div>

              <div>
                <ul class="flex space-x-3">
                  <li v-for="(item, key) in filteredSocial" :key="key">
                    <a :href="item[1]" target="_blank">
                      <img :src="`/icons/${item[0]}.png`" class="image-filter" width="30" alt="Social">
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <PhotoGrid :item="artist" v-if="artist.carousel"/>
            </div>


          </div>

          <div class="grid grid-cols-1 mt-10">
            <h2 class="text-4xl text-center font-montserrat mb-5 font-black">Biography</h2>
            <div v-html="artist.biography" class="font-montserrat font-light space-y-4 text-justify"></div>
          </div>
          <!-- Add more artist details here -->
        </div>
        <div v-else>
          <p>Artist not found.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted, watch} from 'vue';
import {useRoute} from 'vue-router';
import {useArtistService} from '~/api/services/artists.ts';
import Title from '~/components/Title.vue';
import PhotoGrid from "~/components/PhotoGrid.vue";


const artist = ref(null);
const loading = ref(true);
const error = ref(null);
const route = useRoute();
const {getArtists} = useArtistService();

const fetchArtistData = async () => {
  loading.value = true;
  try {
    const artistsData = await getArtists();
    const artistIdentifier = route.params.identifier;
    artist.value = artistsData.find(a => a.identifier === artistIdentifier);
    useArtistsSeo(artist.value, 'single');
  } catch (err) {
    console.error('Errore nel caricamento dei dati dell\'artista:', err);
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const filteredSocial = computed(() => {
  if (artist.value && artist.value.social) {
    return Object.entries(artist.value.social).filter(([key]) => key !== 'id');
  }
  return [];
});

watch(artist, (newArtist) => {
  if (newArtist) {
    useArtistsSeo(newArtist, 'single');
  }
});

onMounted(() => {
  fetchArtistData();
});


</script>

<style scoped>

</style>