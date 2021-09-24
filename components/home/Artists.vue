<template>
  <section class="artists pt-100 pb-100">
    <div class="bg-overlay-black"></div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="subtitle">Our Professional</h4>
          <h2 class="heading text-white">Artists</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <Carousel :data="data" source="artists"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Artists.vue",
  props: ['data']
}
</script>

<style scoped>

</style>
