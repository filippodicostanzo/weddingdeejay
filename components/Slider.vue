<template>
  <section class="slider">
    <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="slide" v-for="slide in slides">
          <div class="image-layer" :style="{'background-image': 'url(' + slide.img + ')'}">
            <div class="container">
              <div class="row">
                <div class="col-xl-8 col-lg-8">
                  <span class="tagline-up">{{ slide.heading }}</span>
                  <h2 class="slider-header">
                    <span class="ltx-desktop">
                      <svg viewBox="0 0 1100 120">
                      <text x="4px" y="45%" alignment-baseline="central" dominant-baseline="middle"> {{
                          slide.text
                        }} </text>
                      </svg>
                    </span>
                  </h2>
                  <a class="tagline-down">{{ slide.subtitle }}</a>
                </div>
              </div>
            </div>
            <div class="btn-container">
              <a v-scroll-to="'.services'">
                <button class="btn btn-primary">DISCOVER MORE</button>
              </a>
            </div>
          </div>
        </div>

        <!-- Render original HTML in server, render Swiper in browser (client) -->


      </div>

      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>

    </div>
  </section>
</template>

<script>
import {directive} from 'vue-awesome-swiper'

export default {
  name: "Slider.vue",
  directives: {
    swiper: directive,
  },
  data() {
    return {
      slides: [
        {
          img: require(`~/assets/images/slider-01.jpg`),
          heading: 'OUR PROFESSIONAL',
          text: 'DEEJAYS',
          subtitle: 'FOR YOUR EVENT'
        },
        {
          img: require(`~/assets/images/slider-02.jpg`),
          heading: 'OUR PROFESSIONAL',
          text: 'MUSICIANS',
          subtitle: 'FOR YOUR EVENT'
        },
      ],
      swiperOption: {
        slidesPerView: 1,
        loop: true,
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
    };
  },
}
</script>

<style scoped>

</style>
