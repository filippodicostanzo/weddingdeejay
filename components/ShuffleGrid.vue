<template>
  <div>
    <!-- Filtri -->
    <div class=" gap-2 mb-6 text-center space-x-4 space-y-4 mx-2">
      <button
          @click="handleFilter('all')"
          class="px-6 py-2 rounded-full transition-all duration-300 font-montserrat"
          :class="currentFilter === 'all'
      ? 'bg-primary text-white'
      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'"
      >
        All
      </button>
      <button
          v-for="category in orderedCategories"
          :key="category"
          @click="handleFilter(category)"
          class="px-6 py-2 rounded-full transition-all duration-300 font-montserrat capitalize"
          :class="currentFilter === category
      ? 'bg-primary text-white'
      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'"
      >
        {{ category }}
      </button>
    </div>

    <!-- Grid -->
    <!-- Grid -->
    <div class="grid-wrapper max-w-7xl mx-auto px-4">
      <div class="inner-wrapper">
        <div ref="grid" class="shuffle-container">
          <div
              v-for="item in props.items"
              :key="item.id"
              :class="['shuffle-item', item.category.identifier]"
              :data-groups="[item.category.identifier]"

          >
            <nuxt-link :to="`/artists/${item.identifier}`">
              <div class="item-inner pb-10">
                <img :src="item.cover.url" :alt="item.title" class="w-full h-80 object-cover object-center mb-4"/>
                <h3 class="text-2xl font-bold font-montserrat text-center mb-4">{{ item.name }}</h3>
                <div class="text-center mb-4"><span
                    class="bg-primary py-1 px-3 text-white font-montserrat  rounded-full">{{
                    item.category.name
                  }}</span>
                </div>

                <div class="social mb-4">
                  <ul class="flex justify-center space-x-4 text-fifth">
                    <li><a :href="item.social.facebook" target="_blank">
                      <font-awesome-icon :icon="['fab', 'facebook-f']"/>
                    </a></li>
                    <li><a :href="item.social.instagram" target="_blank">
                      <font-awesome-icon :icon="['fab', 'instagram']"/>
                    </a></li>
                    <li><a :href="item.social.youtube" target="_blank">
                      <font-awesome-icon :icon="['fab', 'youtube']"/>
                    </a></li>
                    <li><a :href="item.contacts.website" target="_blank">
                      <font-awesome-icon :icon="['fab', 'chrome']"/>
                    </a></li>
                  </ul>
                </div>

                <div v-html="truncateText(item.biography, 120)"
                     class="mb-4 px-10 text-gray-600 font-montserrat text-sm text-center font-light"></div>

                <div class="text-center">
                  <nuxt-link :to="`/artists/${item.identifier}`"
                             class="bg-primary text-white py-2 px-4 rounded-full font-montserrat text-sm">Read More
                  </nuxt-link>
                </div>


              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted, nextTick, watch} from 'vue'
import {truncateText} from "~/utils/truncate.js";

const grid = ref(null)
let shuffleInstance = null
const currentFilter = ref('all')

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

// Extract unique categories from items

// Definisci l'ordine delle categorie
const categoryOrder = ['deejay', 'saxophonist', 'percussionist', 'vocalist', 'performer']

// Calcola le categorie ordinate
const orderedCategories = computed(() => {
  const availableCategories = [...new Set(props.items.map(item => item.category.identifier))]
  return categoryOrder.filter(category => availableCategories.includes(category))
})


const initShuffle = async () => {
  try {
    const Shuffle = (await import('shufflejs')).default

    if (shuffleInstance) {
      shuffleInstance.destroy()
    }

    await nextTick()

    if (!grid.value) return

    shuffleInstance = new Shuffle(grid.value, {
      itemSelector: '.shuffle-item',
      sizer: null,
      speed: 400,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      useTransforms: true,
      isRTL: false,
      roundTransforms: true,
      gutterWidth: 0, // Rimuoviamo il gutter qui perché lo gestiamo con i margini CSS
      columnThreshold: 0.01,
      columns: 3,
      buffer: 1,
    })

    // Forza un re-layout dopo l'inizializzazione
    setTimeout(() => {
      shuffleInstance.layout()
    }, 100)
  } catch (error) {
    console.error('Errore nell\'inizializzazione di Shuffle:', error)
  }
}

// Handle filter button click
const handleFilter = (value) => {
  currentFilter.value = value;
  if (shuffleInstance) {
    const filterFn = value === 'all'
        ? null
        : (element) => {
          const groups = element.getAttribute('data-groups');
          return groups && groups.includes(value);
        };
    shuffleInstance.filter(filterFn);
  }
};

onMounted(async () => {
  await initShuffle()

  window.addEventListener('resize', () => {
    if (shuffleInstance) {
      shuffleInstance.update()
    }
  })
})
// Pulisci quando il componente viene distrutto
onUnmounted(() => {
  if (shuffleInstance) {
    shuffleInstance.destroy()
  }
})

watch(() => props.items, () => {
  nextTick(() => {
    if (shuffleInstance) {
      shuffleInstance.update()
    }
  })
}, {deep: true})
</script>

<style scoped>
.grid-wrapper {
  width: 100%;
  position: relative;
}

.shuffle-container {
  position: relative;
  width: 100%;
  margin: 0 auto;
  /* rimuoviamo display: flex e flex-wrap: wrap */
}


.item-inner {
  background: white;
  height: 100%;
  transition: all 0.3s ease;
}

.shuffle-item {
  width: 31% !important; /* Invece di calc((100% - 40px) / 3) */
  margin: 1%;
  visibility: visible !important;
  will-change: transform;

}

/* Modifica i breakpoint responsive */
@media (max-width: 1024px) {
  .shuffle-item {
    width: calc((100% - 40px) / 2) !important;
  }
}

@media (max-width: 640px) {
  .shuffle-item {
    width: calc(100% - 20px) !important;
  }
}

/* Animazioni */
.shuffle-item {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.shuffle-item--hidden {
  opacity: 0;
  transform: scale(0.9);
}

.shuffle-item--visible {
  opacity: 1;
  transform: scale(1);
}
</style>