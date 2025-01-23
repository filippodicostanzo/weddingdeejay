# components/About.vue
<template>
  <section class="py-24">
    <div class="container mx-auto px-4">
      <!-- Header Section -->
      <div class="mb-12 text-center">
        <h4 class="text-xl font-semibold text-primary mb-2 font-architects">How we</h4>
        <h2 class="text-4xl font-bold text-gray-900 font-montserrat">Work</h2>
      </div>

      <div class="grid grid-cols-12 gap-8 font-montserrat">
        <!-- Left Column -->
        <div class="col-span-12 md:col-span-6 lg:col-span-3 space-y-8">
          <div v-for="(item, index) in leftItems" :key="'left-'+index"
               class="flex items-start space-x-4">
            <div class="w-12 h-12 flex-shrink-0">
              <img :src="`/icons/${item.icon}`" :alt="item.title" class="w-full h-full object-contain image-filter">
            </div>
            <div>
              <h6 class="font-semibold text-lg mb-2">{{ item.title }}</h6>
              <p class="text-gray-600">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <!-- Center Column - Image (Desktop) -->
        <div class="col-span-12 hidden lg:block lg:col-span-6 relative">
          <div class="relative w-full h-full flex items-center justify-center">
            <img src="/images/about-monitors.png" alt="DJ Equipment"
                 class="h-auto relative z-10">
            <div class="absolute inset-0 flex items-center justify-center">
              <img src="/images/about-waves.png" alt="Sound Waves"
                   class="absolute z-0 wave-animation">
            </div>
          </div>
        </div>

        <!-- Mobile/Tablet Center Image -->
        <div class="col-span-12 block md:hidden relative mb-8">
          <div class="relative w-full h-full flex items-center justify-center">
            <img src="/images/about-monitors.png" alt="DJ Equipment"
                 class="h-auto relative z-10">
            <div class="absolute inset-0 flex items-center justify-center">
              <img src="/images/about-waves.png" alt="Sound Waves"
                   class="absolute z-0 wave-animation">
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="col-span-12 md:col-span-6 lg:col-span-3 space-y-8">
          <div v-for="(item, index) in rightItems" :key="'right-'+index"
               class="flex items-start space-x-4">
            <div class="w-12 h-12 flex-shrink-0">
              <img :src="`/icons/${item.icon}`" :alt="item.title" class="w-full h-full object-contain image-filter">
            </div>
            <div>
              <h6 class="font-semibold text-lg mb-2">{{ item.title }}</h6>
              <p class="text-gray-600">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const leftItems = [
  {
    icon: 'dj.png',
    title: 'Professional DJs',
    description: 'Over 20 years of experience DJ\'ing in the wedding and events industry.'
  },
  {
    icon: 'disco-ball.png',
    title: 'Best Location',
    description: 'We work in all the top hotels and venues on the Amalfi Coast and throughout Italy.'
  },
  {
    icon: 'speaker.png',
    title: 'Professional Equipment',
    description: 'We use only top-of-the-line professional equipment; turntables, CDJ and controllers.'
  }
]

const rightItems = [
  {
    icon: 'sax.png',
    title: 'With Musicians',
    description: 'Enrich your DJ experience by adding in additional live musicians such as sax, percussion, electric violin and vocals.'
  },
  {
    icon: 'music.png',
    title: 'International Repertoire',
    description: 'We are experts in all types of musical repertoires and possess a vast musical knowledge.'
  },
  {
    icon: 'headphone.png',
    title: 'Real Support',
    description: 'We offer assistance in putting together the perfect custom playlist for your event.'
  }
]
</script>

<style lang="scss">
@import '@/assets/scss/_animations.scss';
</style>