// composables/useCarousel.ts
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper } from 'swiper'

export const useCarousel = (paginationType: string) => {
    const swiperRef = ref(null)
    const swiper = ref(null)

    const initSwiper = () => {
        swiper.value = new Swiper(swiperRef.value, {
            slidesPerView: 1,
            spaceBetween: 50,
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
                el: `.swiper-pagination-${paginationType}`,
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        })
    }

    onMounted(() => {
        initSwiper()
    })

    onUnmounted(() => {
        if (swiper.value) {
            swiper.value.destroy()
        }
    })

    return {
        swiperRef,
        swiper
    }
}