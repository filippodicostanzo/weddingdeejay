<script setup lang="ts">
import {computed} from 'vue'
import {PropType} from 'vue'

const props = defineProps<{
  type: 'header' | 'footer'
}>()

const imgClass = computed(() => {
  return props.type === 'footer' ? 'mx-auto' : 'mx-0'
})
</script>

<template>
  <nuxt-link to="/">
    <img src="/images/logo.svg" alt="Wedding Deejay" width="250" :class="imgClass">
  </nuxt-link>
</template>

<style scoped>

</style>