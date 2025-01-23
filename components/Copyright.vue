<template>
  <section class="bg-fourth py-3">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-3">
        <div class="text-center">
          <a class="cursor-pointer text-white font-montserrat text-sm hover:underline" @click="openModal('privacy')">Privacy Policy</a>
          <span class="text-white font-montserrat text-sm mx-3">|</span>
          <a class="cursor-pointer text-white font-montserrat text-sm hover:underline" @click="openModal('cookie')">Cookie Policy</a>
        </div>

        <div class="text-center">
          <p class="text-white font-montserrat text-sm">© {{currentYear}} Wedding Deejay Amalfi Coast</p>
        </div>

        <div class="text-center">
          <p class="text-white font-montserrat text-sm">VAT ID {{config.public.vatID}}</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Transition name="modal">
      <ModalPrivacy
          v-if="isModalOpen"
          :source="modalType"
          @close="closeModal"
      />
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ModalPrivacy from './ModalPrivacy.vue'
import {useRuntimeConfig} from '#app';


const currentYear = new Date().getFullYear();
const isModalOpen = ref(false);
const modalType = ref('');
const config = useRuntimeConfig();

const openModal = (type: string) => {
  modalType.value = type;
  isModalOpen.value = true;
  // Blocca lo scroll del body quando il modal è aperto
  document.body.style.overflow = 'hidden';
}

const closeModal = () => {
  isModalOpen.value = false;
  // Ripristina lo scroll del body quando il modal viene chiuso
  document.body.style.overflow = '';
}

// Gestione chiusura con tasto ESC
const handleEsc = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEsc);
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc);
  // Assicuriamoci di ripristinare lo scroll del body
  document.body.style.overflow = '';
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>