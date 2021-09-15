<template>
  <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="item.identifier" v-for="item in data">
        <div class="image-layer" :style="{'background-image': 'url(https://weddingdeejay.herokuapp.com' + item.cover.url + ')'}">
        </div>
        <div class="box-container">
          <h2 class="text-center">{{ item.name }}</h2>
          <div v-if="source=='artists'">
            <div>{{item.category.name}}</div>
            <div>
              <div class="social">
                <ul>
                  <li><a :href="item.social.facebook" target="_blank">
                    <font-awesome-icon :icon="['fab', 'facebook-f']"/>
                  </a></li>
                  <li><a :href="item.social.instagram" target="_blank">
                    <font-awesome-icon :icon="['fab', 'instagram']"/>
                  </a></li>
                </ul>
              </div>
            </div>
          </div>


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
  props: ['data', 'source'],
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
