<template>
  <section class="playlists pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="subtitle">Discover our</h4>
          <h2 class="heading text-white">Playlists</h2>
        </div>
      </div>
      <div class="row">
        <LoadSpinner v-if="data.length===0"/>
        <div class="col-md-6 col-sm-12 col-lg-4 text-center mb-5 pl-4 pr-4" v-for="item in data" :key="item.identifier">
          <iframe :src="item.url" width="100%" height="380" frameBorder="0" allowtransparency="true"
                  allow="encrypted-media"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LoadSpinner from "../LoadSpinner";

export default {
  name: "Playlists.vue",
  components: {LoadSpinner},
  props: ['data']

}
</script>

<style scoped>

</style>
