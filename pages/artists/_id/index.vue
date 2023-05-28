<template>
  <div class="page-artist">
    <Title :title="artist.name" image="header-artists"/>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-4 artist-cover">
          <img :src="artist.cover.url"/>
        </div>
        <div class="col-md-4 pt-3 pt-md-0">
          <h2>{{ artist.name }}</h2>
          <h4>{{ artist.category.name }}</h4>
          <ul class="contacts-list">
            <li>
              <a href="tel:+393314042263">
                <img :src="require('assets/icons/phone.png')" class="image-filter" width="30"> Phone
              </a>
            </li>
            <li>
              <a href="https://wa.me/393314042263?text=Send%20Message%20to%20Start%20the%20Chat" target="_blank">
                <img :src="require('assets/icons/whatsapp.png')" class="image-filter" width="30"> Whatsapp
              </a>
            </li>

            <li>
              <a href="mailto:info@weddingdeejayamalficoast.com">
                <img :src="require('assets/icons/email.png')" class="image-filter" width="30">
                Email
              </a>
            </li>
            <li>
              <a :href="artist.contacts.website" target="_blank">
                <img :src="require('assets/icons/globe.png')" class="image-filter" width="30">
                Website
              </a>
            </li>
          </ul>

          <div class="line"></div>
          <ul class="social-list pt-4">
            <li v-for="(item, key) in artist.social" v-if="key!=='id'">
              <a :href="item" target="_blank">
                <img :src="require(`assets/icons/${key}.png`)" class="image-filter" width="30">
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 pt-3 pt-md-0">
         <PhotoGrid :item="artist" v-if="artist.carousel"/>
        </div>
      </div>

      <div class="row pt-5 pb-5">
        <div class="col-md-12">
          <h2>Biography</h2>
          <div v-html="artist.biography"></div>
        </div>

        <div class="col-md-4 d-flex justify-content-center align-items-center">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getData from "@/mixins/fetchData";
import Title from "../../../components/Title";
import PhotoGrid from "../../../components/PhotoGrid";

export default {
  name: "index.vue",
  components: {PhotoGrid, Title},
  data() {
    return {
      artists: [],
      artist: {
        name: '',
        idenfifier: '',
        cover: {},
        category: {},
        contacts: {}
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
