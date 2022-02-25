<template>
  <div class="row no-gutters image-carousel lightgallery">
    <div class="col-lg-4 col-6" v-for="image in item.carousel" :data-src="image.url">
      <a :href="image.url">
        <img :src="image.url"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoGrid.vue",
  props: ['item'],
  data() {
    return {
      lgOptions: {
        mode: 'lg-fade',
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        selector: 'col-md-4'
      },
    }
  },
  mounted() {
    setTimeout(() => {
      this.createGallery();
    }, 1)
  },

  methods: {
    createGallery() {

      const elements = document.getElementsByClassName('lightgallery', this.lgOptions);
      setTimeout(() => {
        for (let item of elements) {
          window.lightGallery(item)
        }
      }, 100);

    }
  }
}
</script>

<style scoped lang="scss">

@media only screen and (max-width: 767px) {
  #lightgallery {
    div:nth-child(9) {
      display: none;
    }
  }
}

@media only screen and (min-width: 767px) and (max-width: 991px) {
  #lightgallery {
    div:nth-child(7), div:nth-child(8), div:nth-child(9) {
      display: none;
    }
  }
}

</style>
