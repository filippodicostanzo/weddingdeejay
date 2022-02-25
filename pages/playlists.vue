<template>
  <div class="page-playlists">
    <Title title="Playlists" image="header-playlists"/>
    <div class="container pt-5 pb-5">
        <div class="row">
          <div class="col-md-6 col-sm-12 col-lg-4 text-center mb-5 pl-4 pr-4" v-for="item in data" :key="item.identifier">
            <iframe :src="item.url" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

import getData from '@/mixins/fetchData';
export default {
  name: "playlists",
  mixins: [getData],
  data() {
    return {
      data: [],
    }
  },

  mounted() {
    getData.getPlaylists().then((result) => {
      this.data = result;
    });
  }
}
</script>

<style scoped>

</style>
