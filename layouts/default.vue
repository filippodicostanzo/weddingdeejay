<template>
  <div>
    <Loading />
    <Header/>
    <NuxtPage/>
    <DownloadApp/>
    <Footer/>
    <Copyright/>
    <SideNav/>
    <ScrollToTopButton/>
    <CookieControl locale="en" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import {generateSeoMeta} from '../config/seo.js'

useHead(generateSeoMeta())

onMounted(() => {
  // Aggiungi la classe overflow-y al body
  document.body.classList.add('overflow-y-auto')
})
</script>