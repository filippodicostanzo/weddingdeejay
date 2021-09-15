<template>
  <div>
    <Carousel :data="artists" source="artists"/>
  </div>
</template>

<script>
import getData from "@/mixins/fetchData";

export default {
  name: "index.vue",
  data() {
    return {
      artists: []
    }
  },

  mounted() {
    getData.getArtists().then((result) => {
      this.artists = result;
    });
  }
}
</script>

<style scoped>

</style>
