<template>
  <div class="header-page">
    <div class="container-fluid" :style="{'background-image': 'url(' + this.background + ')'}">
      <span class="ltx-before"></span>
      <h1>{{ this.title }}</h1>
      <Breadcrumbs :title="this.title"/>
      <span class="ltx-after"></span>
      <div class="ltx-header-icon"></div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "./Breadcrumbs";

export default {
  name: "Title.vue",
  components: {Breadcrumbs},
  props: ['title', 'image'],
  data() {
    return {
      background: ''
    }
  },
  mounted() {
    this.background = require('assets/images/' + this.image + '.jpg');
  }
}
</script>

<style scoped>

</style>
