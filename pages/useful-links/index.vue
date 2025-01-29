<template>
  <div>
    <Title title="Useful Links" image="header-playlists"/>

    <div class="bg-third">
      <div class="container mx-auto py-24 font-montserrat">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <nuxt-link to="/useful-links/siae-tax">
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-semibold text-gray-800 mb-4">SIAE TAX</h2>
              <p class="text-gray-600 leading-relaxed">
                Essential information about Italian music copyright fees for weddings
              </p>
            </div>
          </nuxt-link>

          
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import Title from "~/components/Title.vue";
</script>


<style scoped>

</style>