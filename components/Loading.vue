<template>
  <div>
    <Transition name="fade">
      <div v-if="isLoading" class="fixed inset-0 bg-[#222] z-50 flex items-center justify-center">
        <img src="/images/logo-loader.png" width="200" class="animate-pulse" alt="Wedding Deejay">
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  // Verifichiamo se è il primo caricamento
  if (!sessionStorage.getItem('firstLoad')) {
    // Se è il primo caricamento, mostriamo il loader
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
      // Settiamo il flag in sessionStorage
      sessionStorage.setItem('firstLoad', 'true')
    }, 500)
  } else {
    // Se non è il primo caricamento, non mostriamo il loader
    isLoading.value = false
  }

  document.body.classList.add('overflow-y-auto')
})
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>