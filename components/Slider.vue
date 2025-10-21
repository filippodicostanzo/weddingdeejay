<template>
  <section class="slider">
    <Swiper :modules="modules" :slides-per-view="1" :loop="true" :autoplay="{
      delay: 5000,
      disableOnInteraction: false
    }" :pagination="{
        clickable: true
      }" :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }" @swiper="onSwiper" @slideChange="onSlideChange" class="w-full ml-auto relative">
      <SwiperSlide v-for="slide in slides" :key="slide.id">
        <div class="image-layer" :style="{ 'background-image': `url(${slide.img})` }">
          <div class="container lg:px-20">
            <div class="row">
              <div class="lg:col-xl-8 lg:col-lg-8 md:pl-12 pl-6">
                <span class="tagline-up text-primary">{{ slide.heading }}</span>
                <h2 class="slider-header">
                  <span class="ltx-desktop hidden lg:block">
                    <svg viewBox="0 0 1100 120">
                      <text x="4px" y="45%" alignment-baseline="central" dominant-baseline="middle"
                        class="hidden-mobile">
                        {{ slide.text }}
                      </text>
                    </svg>
                  </span>
                  <span class="ltx-mobile lg:hidden">
                    {{ slide.text }}
                  </span>
                </h2>
                <a class="tagline-down text-primary">{{ slide.subtitle }}</a>
              </div>
            </div>
          </div>
          <div class="btn-container">
            <a @click="scrollToServices">
              <button class="btn btn-primary">DISCOVER MORE</button>
            </a>
          </div>
        </div>
      </SwiperSlide>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </Swiper>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const modules = [Autoplay, Pagination, Navigation]

const slides = ref([
  {
    id: 1,
    img: '/images/slider-01.jpg',
    heading: 'OUR PROFESSIONAL',
    text: 'DEEJAYS',
    subtitle: 'FOR YOUR EVENT'
  },
  {
    id: 2,
    img: '/images/slider-02.jpg',
    heading: 'OUR PROFESSIONAL',
    text: 'MUSICIANS',
    subtitle: 'FOR YOUR EVENT'
  },
])

const onSwiper = (swiper) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}

const scrollToServices = () => {
  const servicesElement = document.getElementById('services');
  if (servicesElement) {
    servicesElement.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style lang="scss" scoped>
.slider {
  .swiper-slide {
    .image-layer {
      height: 900px;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;

      @media screen and (max-width: 767px) {
        height: 600px;
      }

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        right: 0;
        bottom: 0;
        width: 101%;
        height: 100%;
        background-color: #222;
        opacity: 0.4;
        z-index: 0;
      }

      .container {
        z-index: 9;
      }
    }
  }

  .swiper-slide-active {
    .image-layer {
      transition: 8.5s ease-out;
      transform: scale(1.08);
    }
  }

  .swiper-slide {

    .tagline-up,
    .tagline-down {
      display: block;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      //margin-bottom: 20px;
      opacity: 0;
      transform: translateY(-120px);
      transition: transform 2000ms ease, opacity 2000ms ease;
    }

    .tagline-down {
      margin-top: 20px;
      transform: translateY(120px);
    }

    h2 {
      color: #fff;
      font-size: 80px;
      line-height: 1.1;
      margin-top: 15px;
      font-weight: 700;
      opacity: 0;
      visibility: hidden;
      transform: translateX(-120px);
      transition: transform 2000ms ease, opacity 2000ms ease;
      transition-delay: 1000ms;

      span {
        font-family: var(--font-poppins);
      }
    }

    text {
      font-size: 130px;
      color: transparent;
      fill: transparent;
      stroke: #fff;
      stroke-width: 1px;
      font-weight: 900;
    }

    .btn-container {
      position: absolute !important;
      bottom: 60px;
      left: 0;
      right: 0;
      z-index: 9;
      text-align: center;
      transform: translateY(120px);
      transition: transform 2000ms ease, opacity 2000ms ease;

      .btn-primary {
        color: #fff;
        background-color: theme('colors.primary.DEFAULT');
        border-color: #fff;
        width: 180px;
        height: 40px;
        border-radius: 50px;
      }
    }
  }

  .swiper-slide-active {

    .tagline-up,
    .tagline-down,
    h2,
    .btn-container {
      visibility: visible;
      opacity: 1;
      transform: translateY(0) translateX(0);
    }

    text {
      stroke-dasharray: 1200;
      stroke-dashoffset: 1200;
      animation: draw 10s linear;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: theme('colors.primary.DEFAULT');
  }

  .swiper-button-prev {
    left: 20px;
  }

  .swiper-button-next {
    right: 20px;
  }
}

:deep(.swiper-pagination-bullet) {
  background: #dc2751;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}


@media screen and (max-width: 991px) {
  .slider .swiper-slide-active {

    .tagline-up,
    .tagline-down,
    h2,
    .btn-container {
      transform: translateY(0) translateX(0);
    }
  }
}

@media screen and (max-width: 767px) {
  .slider .swiper-slide .image-layer {
    .row {
      padding: 40px;

      h2 {
        font-size: 50px;
      }
    }
  }
}

@media (max-width: 575px) {
  .slider .swiper-slide {

    .tagline-up,
    .tagline-down {
      font-size: 14px;
    }
  }
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>