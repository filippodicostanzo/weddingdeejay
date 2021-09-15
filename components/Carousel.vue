<template>
  <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="slide" v-for="slide in photos">
        <div class="image-layer" :style="{'background-image': 'url(' + slide.slide + ')'}">
        </div>
        <div class="box-container">
          <h2 class="text-center">Service</h2>
          <p>Lorem ispumg generator</p>
          <span class="ltx-btn-wrap"><a href="http://recond.like-themes.com/services/voice-recording-2-2/" class="btn btn-xs">Read more</a></span>
        </div>

      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  name: "Carousel.vue",
  props: [],
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 50,
        // Responsive breakpoints
        breakpoints: {
          // when window width is <= 499px
          499: {
            slidesPerView: 1,
            spaceBetweenSlides: 50
          },
          // when window width is <= 999px
          999: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
          },
          1240: {
            slidesPerView: 3,
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
      photos: [
        {slide: require('../assets/images/slider-01.jpg')}
      ]
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
