<template>
  <nav aria-label="Breadcrumb" class="py-2">
    <ol class="flex items-center  text-sm justify-center">
      <li class="flex items-center">
        <NuxtLink
            to="/"
            class="text-white hover:text-primary transition-colors font-montserrat"
        >
          Home
        </NuxtLink>
      </li>

      <li
          v-for="(item, index) in crumbs"
          :key="index"
          class="flex items-center"
      >
        <span class="mx-2 text-white">/</span>
        <NuxtLink
            :to="item.to"
            class="text-white hover:text-primary transition-colors font-montserrat"
            :class="{ 'font-bold !text-primary': index === crumbs.length - 1 }"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { startCase } from 'lodash-es'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const route = useRoute()

const crumbs = computed(() => {
  const path = route.path.replace(/\/$/, '')
  const pathArray = path.split('/').filter(Boolean)

  return pathArray.map((path, idx) => ({
    to: idx === 0 ? `/${path}` : `/${pathArray.slice(0, idx + 1).join('/')}`,
    title: idx + 1 === pathArray.length ? props.title : startCase(path)
  }))
})
</script>