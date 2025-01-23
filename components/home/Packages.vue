<template>
  <section class="py-24">
    <div class="container mx-auto px-4">
      <!-- Header Section -->
      <div class="mb-12 text-center">
        <h4 class="text-xl font-semibold text-primary mb-2 font-architects">
          Discover our
        </h4>
        <h2 class="text-4xl font-bold text-gray-900">Packages</h2>
      </div>

      <div class="w-full text-center">
        <LoadSpinner v-if="data.length === 0" />

        <div v-else class="w-full">
          <!-- Tab Headers -->
          <div class="flex flex-wrap gap-4 mb-8 border-gray-200 justify-center">
            <button
                v-for="(pack, index) in data"
                :key="pack.identifier"
                class="px-6 py-2 rounded-full transition-all duration-300 focus:outline-none font-montserrat"
                :class="{
                'bg-primary text-white border-1': activeTab === index,
                'text-primary border-[1px] border-primary hover:bg-primary hover:text-white': activeTab !== index
              }"
                @click="switchTab(index)"
            >
              {{ pack.name }}
            </button>
          </div>

          <!-- Tab Content -->
          <div class="relative min-h-[200px]">
            <div
                v-for="(pack, index) in data"
                :key="pack.identifier"
                class="transition-all duration-500 ease-in-out"
                :class="{
                'opacity-100 relative': activeTab === index,
                'opacity-0 absolute top-0 left-0 right-0 pointer-events-none': activeTab !== index
              }"
            >
              <div
                  class="prose max-w-none mb-8 font-montserrat"
                  v-html="pack.details"
              ></div>
              <div class="text-center">
                <NuxtLink
                    :to="{ path: '/quote', query: { package: pack.identifier }}"
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
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LoadSpinner from '../LoadSpinner.vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

const activeTab = ref(0)
const contentHeight = ref('auto')

const switchTab = (index) => {
  if (activeTab.value !== index) {
    activeTab.value = index
  }
}
</script>

<style scoped>
.tab-enter-active,
.tab-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.tab-enter-from,
.tab-leave-to {
  opacity: 0;
}

:deep(span) {
  color: #dc2751;
  font-weight: bold;
}

:deep(.prose h2) {
  color: #dc2751;
  font-weight: bold;
  font-size: 20pt;
  margin: 10px 0;
}

:deep(.prose ul li) {
  font-size: 12pt;
  margin: 10px 0;
}

/* Assicurati che il contenuto non venga tagliato */
.prose {
  overflow: visible;
}
</style>