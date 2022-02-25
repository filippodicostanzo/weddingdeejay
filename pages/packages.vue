<template>
  <div class="page-packages">
    <Title title="Packages" image="header-services"/>
    <div class="container pt-5 pb-5">
      <div class="row mb-5" v-for="item in data" :key="item.identifier">
        <div class="col-md-6 col-sm-12 col-lg-4">
          <img :src="item.cover.url">
        </div>

        <div class="col-md-6 col-sm-12 col-lg-8 pt-3 pt-md-0">
          <h2 class="title">{{item.name}}</h2>
          <div v-html="item.details"></div>
          <button class="btn-primary">
            <nuxt-link :to="{ name: 'quote', params: { package: item }}">Request a quote</nuxt-link>
          </button>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import getData from '@/mixins/fetchData';
export default {
  name: "packages.vue",
  mixins: [getData],
  data() {
    return {
      data: [],
    }
  },

  mounted() {
    getData.getPackages().then((result) => {
      this.data = result;
    });
  }
}
</script>

<style scoped>

</style>
