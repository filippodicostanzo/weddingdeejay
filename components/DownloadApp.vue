

<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="mb-12 text-center">
        <h4 class="text-xl font-semibold text-primary mb-2 font-architects">Download</h4>
        <h2 class="text-4xl font-bold font-montserrat">Our App</h2>
      </div>
      <div class="flex justify-center items-center">
        <a :href="config.public.linkAppStore" target="_blank" class="mx-4">
          <img src="/images/appstore.svg" width="150" alt="Available on App Store">
        </a>
        <a :href="config.public.linkPlayStore" target="_blank" class="mx-4">
          <img src="/images/googleplay.svg" width="150" alt="Available on Google Play">
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import {useRuntimeConfig} from '#app';

const config = useRuntimeConfig();

</script>

<style scoped>
</style>