<template>
  <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="item.identifier" v-for="item in data">
        <div class="image-layer"
             :style="{'background-image': 'url(' + item.cover.url + ')'}">
        </div>
        <div class="box-container">
          <h2 class="text-center">{{ item.name }}</h2>
          <div v-if="source=='artists'" class="category">
            <span>{{ item.category.name }}</span>
          </div>


          <div class="social" v-if="source=='artists'">
            <ul>
              <li><a :href="item.social.facebook" target="_blank">
                <font-awesome-icon :icon="['fab', 'facebook-f']"/>
              </a></li>
              <li><a :href="item.social.instagram" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']"/>
              </a></li>
              <li><a :href="item.social.instagram" target="_blank">
                <font-awesome-icon :icon="['fab', 'youtube']"/>
              </a></li>
              <li><a :href="item.social.instagram" target="_blank">
                <font-awesome-icon :icon="['fab', 'chrome']"/>
              </a></li>
            </ul>
          </div>


          <div :inner-html.prop="item.biography | truncate(120)" class="biography" v-if="source=='artists'"></div>
          <div :inner-html.prop="item.description | truncate(105)" class="description" v-if="source=='services'"></div>
          <span class="ltx-btn-wrap">
            <nuxt-link :to="`artists/${item.identifier}`" class="btn btn-xs"
                       v-if="source=='artists'">Read more</nuxt-link>

             <nuxt-link to="/services" class="btn btn-xs"
                        v-if="source=='services'">Read more</nuxt-link>
          </span>
        </div>
      </div>
    </div>
    <div class="swiper-pagination-artists" v-if="source==='artists'"></div>
    <div class="swiper-pagination-services" v-if="source==='services'"></div>
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
          768: {
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
          el: "",
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

  fetch() {
    if (this.source === 'artists') {
      this.swiperOption.pagination.el = '.swiper-pagination-artists';
    }
    if (this.source === 'services') {
      this.swiperOption.pagination.el = '.swiper-pagination-services';
    }
  },
}
</script>

<style scoped>

</style>
