<template>
  <section class="services pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="subtitle">What we do</h4>
          <h2 class="heading">Services</h2>

        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <LoadSpinner v-if="data.length===0"/>
          <Carousel :data="data" source="services"/>
        </div>
      </div>
    </div>
    <div class="background-animation">
      <div class="container-fluid"></div>
    </div>
  </section>
</template>

<script>
import LoadSpinner from "../LoadSpinner";

export default {
  name: "Services.vue",
  components: {LoadSpinner},
  props: ['data'],


}
</script>

<style scoped>

</style>
