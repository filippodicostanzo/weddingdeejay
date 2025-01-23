<!-- components/MixcloudPlayer.vue -->
<template>
  <iframe
      :src="playerUrl"
      width="100%"
      height="120"
      frameborder="0"
  ></iframe>
</template>

<script setup>
const props = defineProps({
  mixcloudUrl: {
    type: String,
    required: true
  }
})

const playerUrl = computed(() => {
  // Verifichiamo che l'URL esista
  if (!props.mixcloudUrl) return '';

  // Estraiamo il percorso dopo "mixcloud.com"
  const path = props.mixcloudUrl.split('mixcloud.com')[1]

  // Costruiamo l'URL completo per il player
  return `https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=${path}`
})
</script>