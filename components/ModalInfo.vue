<!-- components/InfoModal.vue -->
<template>
  <Transition name="modal">
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
      <!-- Overlay scuro -->
      <div class="fixed inset-0 bg-black bg-opacity-80 transition-opacity" @click="closeModal"></div>

      <!-- Contenitore del modal -->
      <div class="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl"
          @click.stop>
          <!-- Header -->
          <div class="flex justify-between items-center p-6 border-b">
            <h3 class="text-xl font-semibold">
              {{ data?.name }}
            </h3>
            <button @click="closeModal" class="text-gray-400 hover:text-gray-500 focus:outline-none">
              <span class="sr-only">Close</span>
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Contenuto -->
          <div class="p-6">
            <!-- Se è un pacchetto -->
            <template v-if="type === 'package'">
              <div class="relative h-64 mb-6">
                <img :src="data?.cover?.url" :alt="data?.name" class="w-full h-full object-cover rounded-lg" />
              </div>
              <div v-html="data?.details" class="text-gray-600 mb-4 prose prose-sm max-w-none"></div>
              <div v-if="data?.features?.length" class="mt-4">
                <h4 class="font-semibold mb-2">Features:</h4>
                <ul class="list-disc list-inside">
                  <li v-for="feature in data.features" :key="feature" class="text-gray-600">
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </template>

            <!-- Se è un artista -->
            <template v-else-if="type === 'artist'">
              <div class="relative h-64 mb-6">
                <img :src="data?.cover?.url" :alt="data?.name" class="w-full h-full object-cover rounded-lg" />
              </div>
              <div v-html="data?.biography" class="text-gray-600 mb-4 prose prose-sm max-w-none"></div>
              <div v-if="data?.skills?.length" class="mt-4">
                <h4 class="font-semibold mb-2">Skills:</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in data.skills" :key="skill"
                    class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch } from 'vue'
import type { Package, Artist } from '~/api/types'

interface Props {
  isOpen: boolean
  type: 'package' | 'artist'
  data: Package | Artist | null
}

const props = defineProps<Props>()
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

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

/* Stili per il contenuto del package */
:deep(.package) {
  font-family: inherit;
}

:deep(.package p) {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #4b5563;
}

:deep(.package p span) {
  color: #dc2626;
  font-weight: 600;
}

:deep(.package h2) {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: #1f2937;
}

:deep(.package ul) {
  list-style: none;
  padding-left: 0;
  margin-bottom: 1rem;
}

:deep(.package ul li) {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.5;
}

:deep(.package ul li::before) {
  content: "✓";
  position: absolute;
  left: 0;
  color: #dc2626;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>