<template>
  <page class="artist">
    <Title :title="artist.name" image="slider-01" />
    <div>
      {{ artist.name }}
    </div>
  </page>
</template>

<script>
import getData from "@/mixins/fetchData";
import Title from "../../../components/home/Title";

export default {
  name: "index.vue",
  components: {Title},
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
