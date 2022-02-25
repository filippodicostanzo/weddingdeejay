<template>
  <div class="page-services">
    <Title title="Services" image="header-services"/>
    <div class="container pt-5 pb-5">
      <div class="row mb-5" v-for="item in data" :key="item.identifier">
        <div class="col-md-6 col-sm-12 col-lg-4">
          <img :src="item.cover.url">
        </div>

        <div class="col-md-6 col-sm-12 col-lg-4 pt-3 pt-md-0">
          <h2>{{item.name}}</h2>
          <div v-html="item.description"></div>
          <button class="btn-primary">
            <nuxt-link to="quote">Request a quote</nuxt-link>
          </button>
        </div>

        <div class="col-lg-4 pt-lg-0 pt-3" v-if="item.carousel.length>0">
          <PhotoGrid :item="item" v-if="item.carousel"/>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import getData from '@/mixins/fetchData';
import _ from "lodash";

export default {
  name: "services",
  mixins: [getData],
  data() {
    return {
      data: [],
    }
  },

  mounted() {
    getData.getServices().then((result) => {
      this.data = _.orderBy(result, ['order'],['asc']);
    });
  }

}
</script>

<style scoped>

</style>
