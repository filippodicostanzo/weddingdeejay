<template>
  <nav>
    <ul :class="[
      props.mobile ? 'space-y-2' : 'flex flex-wrap justify-center lg:justify-end gap-4',
      'w-full'
    ]">
      <li v-for="item in mainmenu" :key="item.slug">
        <NuxtLink
            :to="'/' + item.slug"
            :class="[
              'text-white hover:text-gray-200 text-sm tracking-widest transition duration-150 ease-in-out uppercase font-montserrat block',
              isLinkActive(item.slug) ? 'font-black !text-primary' : ''
            ]"
            @click="props.mobile && closeSideMenu()"

        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useNuxtApp, useRoute } from '#app'
import mainMenuData from '~/static/data/menu.json'

const props = defineProps({
  mobile: Boolean
})

const route = useRoute()

const mainmenu = ref([])

const closeSideMenu = () => {
  const nuxtApp = useNuxtApp()
  nuxtApp.$emit('close-sidemenu')
}

// Simulating the fetch hook
const fetchMenu = () => {
  mainmenu.value = mainMenuData
}

const isLinkActive = (slug) => {
  // Array di slug che devono essere attivi anche nelle sottopagine
  const parentSlugs = ['venues', 'artists', 'livesets'] // aggiungi qui altri slug se necessario

  if (parentSlugs.includes(slug)) {
    return route.path.startsWith('/' + slug)
  }

  return route.path === '/' + slug
}

// Call fetchMenu immediately
onMounted(() => {
  fetchMenu()
})




</script>