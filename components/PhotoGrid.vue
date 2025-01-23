<template>
  <!-- Grid container con Tailwind -->
  <div
      ref="galleryRef"
  >

    <!-- Iterazione sulle immagini -->
    <lightgallery
        :settings="{ speed: 500, plugins: plugins, selector:'.gallery-item' }"
        :onInit="onInit"
        :onBeforeSlide="onBeforeSlide"
    >
      <div class="grid grid-cols-3 gap-5">
        <div
            v-for="(image, index) in item.carousel"
            :key="index"
            :data-src="image.url"
            :class="[
        'relative overflow-hidden w-full',
        // Nascondi elementi specifici su mobile e tablet
        'md:block',
        { 'hidden': shouldHideImage(index) }
      ]"
        >
          <a
              class="gallery-item hover:cursor-zoom-in"
              :data-src="image.url"
              data-sub-html=""
          >
            <img
                :src="image.url"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
                alt="Gallery image"
            />
          </a>
        </div>
      </div>
    </lightgallery>
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount, watch} from 'vue'
import {defineAsyncComponent} from 'vue';
// Definisci Lightgallery come componente asincrono
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

const Lightgallery = defineAsyncComponent(() => import('lightgallery/vue'));

import lightGallery from 'lightgallery'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'


// Props
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

// Refs
const galleryRef = ref(null)
const windowWidth = ref(window.innerWidth);
let gallery = null

const plugins = [lgZoom, lgVideo];

// Proprietà calcolata




// Method to determine if an image should be hidden
const shouldHideImage = (index) => {
  const isMobile = windowWidth.value <= 767;
  const isTablet = windowWidth.value > 767 && windowWidth.value <= 991;
  if (isMobile && index >= 8) return true;
  if (isTablet && index >= 6) return true;
  return false;
};

const onResize = () => {
  windowWidth.value = window.innerWidth;
};

// Metodi
const onInit = () => {
  console.log('lightGallery has been initialized');
};

const onBeforeSlide = () => {
  console.log('calling before slide');
};

// Inizializzazione della galleria
// Add event listener on mount and remove on unmount
onMounted(() => {
  window.addEventListener('resize', onResize);
});



// Pulizia quando il componente viene distrutto
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);

  if (gallery) {
    gallery.destroy()
  }
})

watch(windowWidth, (newWidth) => {
  // Trigger reactivity by updating the windowWidth value
  windowWidth.value = newWidth;
});


</script>