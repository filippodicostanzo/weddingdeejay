<!-- components/carousel/GoogleReviewsCarousel.vue -->
<template>
    <base-carousel pagination-type="google-reviews" :breakpoints-config="breakpointsConfig">
        <SwiperSlide class="h-full bg-white shadow-lg rounded-lg mb-10" v-for="review in reviews"
            :key="review.review_id">

            <div class="box-container p-6">
                <!-- Author Info -->
                <div class="flex items-center mb-4">
                    <img :src="review.author_photo_url" :alt="review.author_name" class="w-12 h-12 rounded-full mr-3" />
                    <div class="flex-1">
                        <h3 class="font-bold font-montserrat text-lg text-gray-900">{{ review.author_name }}</h3>
                        <div class="flex items-center gap-1 text-sm text-gray-500">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fill-rule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>{{ review.author_review_count }} reviews</span>
                            <span v-if="review.author_local_guide_level" class="ml-2 text-blue-600">
                                • Level {{ review.author_local_guide_level }} Guide
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Stars Rating -->
                <div class="flex items-center mb-3">
                    <div class="flex">
                        <font-awesome-icon v-for="n in 5" :key="n"
                            :icon="n <= review.rating ? 'fas fa-star' : 'far fa-star'"
                            class="text-yellow-400 text-lg" />
                    </div>
                    <span class="ml-2 text-sm text-gray-600">{{ formatDate(review.review_datetime_utc) }}</span>
                </div>

                <!-- Review Text -->
                <div class="mb-4">
                    <p class="font-montserrat text-gray-700 text-sm leading-relaxed">
                        {{ truncateText(review.review_text, 200) }}
                    </p>
                </div>

                <!-- Google Logo & Read More -->
                <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span class="text-xs text-gray-600 font-medium">Google Review</span>
                    </div>
                    <a :href="review.review_link" target="_blank" rel="noopener noreferrer"
                        class="text-primary text-xs font-montserrat hover:underline">
                        Read full review →
                    </a>
                </div>
            </div>
        </SwiperSlide>
    </base-carousel>
</template>

<script setup lang="ts">
import BaseCarousel from "~/components/carousel/BaseCarousel.vue"
import { SwiperSlide } from "swiper/vue"
import { format } from 'date-fns'
import type { GoogleReview } from '~/api/types'

defineProps({
    reviews: {
        type: Array as () => GoogleReview[],
        required: true
    }
})

const breakpointsConfig = {
    320: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 30
    }
}

const truncateText = (text: string, length: number) => {
    if (!text) return ''
    if (text.length <= length) return text
    return text.substring(0, length) + '...'
}

const formatDate = (dateString: string) => {
    try {
        return format(new Date(dateString), 'MMM dd, yyyy')
    } catch {
        return ''
    }
}
</script>

<style scoped>
.box-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
