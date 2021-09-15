<template>
  <section class="packages pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="subtitle">What we do</h4>
          <h2 class="heading">Packages</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <b-tabs pills >
            <b-tab v-for="pack in data" :title="pack.name" :key="pack.identifier">
              <b-card-text><div v-html="pack.details"></div></b-card-text>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Packages.vue",
  props:['data']
}
</script>

<style scoped>

</style>
