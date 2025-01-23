<template>
  <!-- Container principale -->
  <div class="relative w-full">
    <div class="overlay bg-black opacity-70 absolute inset-0 z-10"></div>
    <!-- Container per l'immagine di sfondo -->
    <div
        class="container-fluid relative w-full bg-cover bg-center py-32"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <!-- Contenuto principale -->
      <div class="max-w-7xl mx-auto px-4 relative z-20">
        <h1 class="text-4xl font-bold text-center text-white mb-4 font-montserrat">
          {{ title }}
        </h1>

        <!-- Componente Breadcrumbs -->
        <Breadcrumbs :title="title" />
      </div>

      <!-- Elementi decorativi inferiori -->
      <span class="absolute left-0 bottom-0 w-full h-1 bg-primary opacity-50"></span>
      <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-header-icon"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Definizione delle props
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

// Ref per l'immagine di sfondo
const backgroundImage = ref('')

// Caricamento dell'immagine al mount del componente
onMounted(() => {
  // Utilizziamo direttamente il path alla cartella public
  backgroundImage.value = `/images/${props.image}.webp`
})
</script>