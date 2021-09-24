<template>
  <div>
    {{ artist.name }}
  </div>
</template>

<script>
import getData from "@/mixins/fetchData";

export default {
  name: "index.vue",
  data() {
    return {
      artists: [],
      artist: {
        name: '',
        idenfifier: '',
      },
    }
  },
  mounted() {
    getData.getArtists().then((result) => {
      this.artists = result;
      console.log(this.artists);
      const id = this.$route.params.id;
      this.artist = this.artists.find(x => x.identifier === id);
      console.log(this.artist);
    });


  }
}
</script>

<style scoped>

</style>
