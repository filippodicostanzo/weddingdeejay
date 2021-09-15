<template>
  <section class="locations pt-100 pb-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false">
            <div class="swiper-wrapper">
              <div class="swiper-slide" :key="location.identifier" v-for="location in data">
                <a :href="location.url" target="_blank">
                  <img :src="'https://weddingdeejay.herokuapp.com'+ location.logo.url">
                </a>

              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Locations.vue",
  props: ['data'],
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 50,
        // Responsive breakpoints
        breakpoints: {
          // when window width is <= 499px
          499: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
          },
          // when window width is <= 999px
          999: {
            slidesPerView: 4,
            spaceBetweenSlides: 50
          },
          1240: {
            slidesPerView: 6,
            spaceBetweenSlides: 50
          }
        },
        loop: true,
        autoplay: {
          delay: 5000,
        },
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    }
  },

  mounted() {
    console.log(this.data);
  }

}
</script>

<style scoped>

</style>
