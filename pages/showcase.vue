<template>
  <div class="page-showcase">
    <Title title="Showcase" image="header-showcase"/>
    <div class="container pt-5 pb-5">
        <div class="row">
          <div class="col-md-6" v-for="item in data">
            <div v-html="item.embed.html" class="video-embed"></div>
          </div>
        </div>

      <div class="row pt-5">
        <div class="col-lg-2 col-md-3 col-6 pt-3 pt-lg-0" v-for="item in locations" :key="item.identifier">
          <a :href="item.url" target="_blank">
            <img :src="item.logo.url">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import getData from '@/mixins/fetchData';
export default {
  name: "showcase",
  mixins: [getData],
  data() {
    return {
      data: [],
      locations:[]
    }
  },

  mounted() {
    getData.getVideos().then((result) => {
      this.data = [...result.data.slice(0,6)];
    })

    getData.getLocations().then((result)=> {
      this.locations = result;
    })


  }
}
</script>

<style scoped>

</style>
