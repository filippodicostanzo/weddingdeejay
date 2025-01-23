
<template>
  <div>


    <ul class="contacts-list">
      <li class="flex items-center justify-center my-8">
        <a :href="`tel:${config.public.phone_1}`" class="flex items-center font-montserrat text-xl ">
          <img src="/icons/phone.png" width="35" class="image-filter mr-3" alt="Phone">
          {{ config.public.phone_1 }}
        </a>
      </li>
      <li class="flex items-center justify-center my-8">
        <a :href="`https://wa.me/${config.public.whatsApp_1}?text=Send%20Message%20to%20Start%20the%20Chat`" target="_blank" class="flex items-center font-montserrat text-xl">
          <img src="/icons/whatsapp.png" width="30" class="image-filter mr-3" alt="WhatsApp">
          {{ config.public.phone_1 }}
        </a>
      </li>
      <li class="flex items-center justify-center my-8">
        <a :href="`mailto:${config.public.mail}`" class="flex items-center font-montserrat text-xl ">
          <img src="/icons/email.png" width="30" class="image-filter mr-3" alt="Email">
         Email
        </a>
      </li>
      <li class="flex items-center justify-center my-8">
        <a href="#" class="flex items-center font-montserrat text-xl ">
          <img src="/icons/globe.png" width="30" class="image-filter mr-3" alt="Website">
          Web Site
        </a>
      </li>
    </ul>

    <ul class="social-list flex justify-center items-center">
      <li class="flex items-center justify-center mx-2">
        <a :href="config.public.linkInstagram" target="_blank" class="flex items-center">
          <img src="/icons/instagram.png" width="30" class="image-filter" alt="Instagram">
        </a>
      </li>
      <li class="flex items-center justify-center mx-2">
        <a :href="config.public.linkFacebook" target="_blank" class="flex items-center">
          <img src="/icons/facebook.png" width="30" class="image-filter" alt="Facebook">
        </a>
      </li>
      <li class="flex items-center justify-center mx-2">
        <a :href="config.public.linkVimeo" target="_blank" class="flex items-center">
          <img src="/icons/vimeo.png" width="30" class="image-filter" alt="Vimeo">
        </a>
      </li>
      <li class="flex items-center justify-center mx-2">
        <a :href="config.public.linkTikTok" target="_blank" class="flex items-center">
          <img src="/icons/tiktok.png" width="30" class="image-filter" alt="TikTok">
        </a>
      </li>
    </ul>
  </div>

</template>
<script setup lang="ts">

import {useRuntimeConfig} from "#app";

const config = useRuntimeConfig();

</script>

<style scoped>

</style>