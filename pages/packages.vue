<template>
  <div>
    <Title title="Packages" image="header-packages"/>
    <div class="bg-third">
      <div class="container mx-auto py-24">
        <div v-if="loading">
          <LoadSpinner/>
        </div>
        <div v-else-if="error">Error loading packages data: {{ error.message }}</div>
        <div v-else>
          <div class="flex flex-col md:flex-row gap-5 my-5 bg-white p-10" v-for="item in packagesData"
               :key="item.identifier">
            <!-- Colonna immagine -->
            <div class="w-full md:w-1/2 lg:w-1/3">
              <img :src="item.cover.url" class="w-full h-auto object-cover">
            </div>

            <!-- Colonna contenuto -->
            <div class="w-full md:w-1/2 lg:w-2/3 pt-3 md:pt-0">
              <h2 class="text-4xl font-black mb-3 font-montserrat">{{ item.name }}</h2>
              <div v-html="item.details" class="font-montserrat"></div>
              <div class="mt-4">
                <NuxtLink
                    :to="{ path: '/quote', query: { package: item.identifier }}"
                    class="btn-primary"
                >
                  Request a quote
                </NuxtLink>
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
import {ref, onMounted} from "vue";
import {usePackageService} from "~/api/services/packages";

const loading = ref(true);
const error = ref(null);

const {getPackages} = usePackageService();

const packagesData = ref([]);

const fetchPackageData = async () => {
  loading.value = true;
  try {
    packagesData.value = await getPackages();
  } catch (err) {
    console.error('Error loading package data:', err);
    error.value = err;
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchPackageData();
});

</script>

<style scoped>

:deep(span) {
  color: #dc2751;
  font-weight: 900;
}

:deep(.package) {
  h2 {
    font-size: 1.5rem;
    margin: 5px 0;
    font-weight: 900;
    color: #dc2751;
  }

  ul {
    list-style-type: disc;
    margin-left: 16px;


    li {
      padding: 10px 0;
    }
  }
}

</style>