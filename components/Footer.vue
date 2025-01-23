<script setup lang="ts">
import {useRuntimeConfig} from '#app';

const config = useRuntimeConfig();

</script>

<template>
  <footer class="bg-fourth pt-24 pb-48 footer-background">

    <div class="container mx-auto">

      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        <div class="text-center">
          <div class="w-full text-center">
            <Logo type="footer"/>
          </div>
          <p class="font-montserrat font-light text-l text-white mt-5 px-5 lg:pr-10 text-center">
            Wedding Deejay have over 20 years of experience DJ’ing in the wedding and events industry. Choose from the
            best DJs in the wedding scene.
          </p>
        </div>

        <div>
          <h2 class="text-primary font-bold text-4xl font-montserrat text-center lg:text-left">Sitemap</h2>
          <ul class="sitemap-list space-y-4">
            <li class="mt-4 flex items-center justify-center lg:justify-start">
              <font-awesome-icon :icon="['fas', 'forward']" class="text-primary mr-2"/>
              <nuxt-link to="/services" tag="a" class="text-white text-l font-montserrat">Services</nuxt-link>
            </li>
            <li class=" flex items-center justify-center lg:justify-start">
              <font-awesome-icon :icon="['fas', 'forward']" class="text-primary mr-2"/>
              <nuxt-link to="/artists" tag="a" class="text-white text-l font-montserrat">Artists</nuxt-link>
            </li>
            <li class=" flex items-center justify-center lg:justify-start">
              <font-awesome-icon :icon="['fas', 'forward']" class="text-primary mr-2"/>
              <nuxt-link to="/packages" tag="a" class="text-white text-l font-montserrat">Packages</nuxt-link>
            </li>
            <li class=" flex items-center justify-center lg:justify-start">
              <font-awesome-icon :icon="['fas', 'forward']" class="text-primary mr-2"/>
              <nuxt-link to="/playlists" tag="a" class="text-white text-l font-montserrat">Playlists</nuxt-link>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-primary font-bold text-4xl font-montserrat text-center lg:text-left">Contact</h2>
          <ul class="contacts-list space-y-4">
            <li class="mt-4 flex items-center justify-center lg:justify-start">
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="text-primary mr-2"/>
              <nuxt-link to="contacts" tag="a" class="text-white text-l font-montserrat">Amalfi Coast</nuxt-link>
            </li>
            <li class=" flex items-center justify-center lg:justify-start">
              <font-awesome-icon :icon="['fas', 'phone']" class="text-primary mr-2"/>
              <a :href="`tel:${config.public.phone_1}`" class="text-white text-l font-montserrat">{{ config.public.phone_1 }}</a>
            </li>
            <li class=" flex items-center justify-center lg:justify-start">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-primary mr-2"/>
              <a :href="`https://wa.me/${config.public.whatsApp_1}?text=Send%20Message%20to%20Start%20the%20Chat`" target="_blank"
                 class="text-white text-l font-montserrat">
                {{ config.public.phone_1 }}
              </a>
            </li>
            <li class=" flex items-center justify-center lg:justify-start">
              <font-awesome-icon :icon="['fas', 'envelope']" class="text-primary mr-2"/>
              <a :href="`mailto:${config.public.mail}`" class="text-white text-l font-montserrat">Email</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-primary font-bold text-4xl font-montserrat text-center lg:text-left">Social</h2>
          <ul class="social-list space-y-4">
            <li class=" flex items-center mt-4 justify-center lg:justify-start">
              <img src="/icons/instagram.png" class="image-filter mr-2" width="20">
              <a :href="config.public.linkInstagram" target="_blank" class="text-white text-l font-montserrat">
                @weddingdeejay
              </a>
            </li>
            <li class="flex items-center justify-center lg:justify-start">
              <img src="/icons/facebook.png" class="image-filter mr-2" width="20">
              <a :href="config.public.linkFacebook" target="_blank" class="text-white text-l font-montserrat">
                / weddingdeejay
              </a>
            </li>
            <li class=" flex items-center justify-center lg:justify-start">
              <img src="/icons/vimeo.png" class="image-filter mr-2" width="20">
              <a :href="config.public.linkVimeo" target="_blank" class="text-white text-l font-montserrat">
                / weddingdeejay
              </a>
            </li>
            <li class="flex items-center justify-center lg:justify-start">
              <img src="/icons/tiktok.png" class="image-filter mr-2" width="20">
              <a :href="config.public.linkTikTok" target="_blank" class="text-white text-l font-montserrat">
                @weddingdeejay
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>

  </footer>

</template>

<style scoped>

.footer-background {
  background-image: url('/images/footer-bg.png');
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: contain;
}

</style>