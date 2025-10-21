import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      Swiper,
      SwiperSlide,
      SwiperModules: {
        Navigation,
        Pagination,
        Autoplay,
        EffectFade
      }
    }
  }
})
