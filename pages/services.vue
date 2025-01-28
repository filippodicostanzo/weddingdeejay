<template>
  <div>
    <Title title="Services" image="header-services"/>
    <div class="bg-third">
      <div class="container mx-auto py-24">
        <div>

          <div v-if="loading">
            <LoadSpinner/>
          </div>
          <div v-else-if="error">Error loading service data: {{ error.message }}</div>
          <div v-else>
            <div class="grid grid-cols-1 space-y-10 lg:px-0 px-6">
              <div v-for="service in servicesData" :key="service.id" >
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 bg-white">
                  <div class="col-span-1">
                    <img :src="service.cover.url" alt="service.name" class="w-full h-full object-cover"/>
                  </div>
                  <div class="col-span-1 p-6">
                    <h3 class="text-4xl font-black font-montserrat text-secondary">{{ service.name }}</h3>
                    <div class="text-gray-500 mt-2 font-montserrat space-y-4 text-justify" v-html="service.description"></div>
                    <div class="mt-2"><nuxt-link to="/quote"><button class="btn-primary mt-2">Request a Quote</button></nuxt-link></div>
                  </div>
                  <div class="md:col-span-2 lg:col-span-1 p-5">
                    <PhotoGrid :item="service" v-if="service.carousel" />
                  </div>
                </div>
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
import {ref, onMounted, watch} from "vue";
import {useServiceService} from "~/api/services/services";
import PhotoGrid from "~/components/PhotoGrid.vue";

const loading = ref(true);
const error = ref(null);


const {getServices} = useServiceService();

const servicesData = ref([]);

const fetchServiceData = async () => {
  loading.value = true;
  try {
    servicesData.value = await getServices();
    useServicesSeo(servicesData.value);
  } catch (err) {
    console.error('Error loading service data:', err);
    error.value = err;
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchServiceData();
});

// Aggiorniamo la SEO quando cambiano i servizi
watch(servicesData, (newServices) => {
  if (newServices?.length) {
    useServicesSeo(newServices);
  }
});

</script>

<style scoped>

</style>