<template>
    <section class="py-24 bg-secondary" id="google-reviews">
        <div class="container mx-auto px-4">
            <div class="mb-12 text-center">
                <h4 class="text-xl font-semibold text-primary mb-2 font-architects">What our clients say</h4>
                <h2 class="text-4xl font-bold text-white font-montserrat">Google Reviews</h2>
                <p class="text-gray-300 mt-2 font-montserrat">Real experiences from our amazing couples</p>
            </div>

            <LoadSpinner v-if="loading" />

            <div v-else-if="!data || data.length === 0" class="flex justify-center items-center min-h-[200px]">
                <div class="text-center">
                    <p class="text-white text-lg">No reviews available at the moment.</p>
                    <p class="text-gray-400 mt-2">Please check back later.</p>
                </div>
            </div>

            <GoogleReviewsCarousel v-else :reviews="data" />

            <!-- Stats Section -->
            <div v-if="data && data.length > 0" class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div class="text-4xl font-bold text-primary mb-2">{{ averageRating }}</div>
                    <div class="flex justify-center mb-2">
                        <font-awesome-icon v-for="n in 5" :key="n"
                            :icon="n <= Math.round(averageRating) ? 'fas fa-star' : 'far fa-star'"
                            class="text-yellow-400" />
                    </div>
                    <div class="text-gray-300 text-sm font-montserrat">Average Rating</div>
                </div>

                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div class="text-4xl font-bold text-primary mb-2">{{ data.length }}</div>
                    <div class="text-gray-300 text-sm font-montserrat">Total Reviews</div>
                </div>

                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div class="text-4xl font-bold text-primary mb-2">{{ fiveStarPercentage }}%</div>
                    <div class="text-gray-300 text-sm font-montserrat">5-Star Reviews</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import GoogleReviewsCarousel from "~/components/carousel/GoogleReviewsCarousel.vue"
import type { GoogleReview } from '~/api/types'

const props = defineProps({
    data: {
        type: Array as () => GoogleReview[],
        required: true
    },
    loading: {
        type: Boolean,
        default: false
    }
})

// Calculate average rating
const averageRating = computed(() => {
    if (!props.data || props.data.length === 0) return 0
    const sum = props.data.reduce((acc, review) => acc + review.rating, 0)
    return (sum / props.data.length).toFixed(1)
})

// Calculate 5-star percentage
const fiveStarPercentage = computed(() => {
    if (!props.data || props.data.length === 0) return 0
    const fiveStarCount = props.data.filter(review => review.rating === 5).length
    return Math.round((fiveStarCount / props.data.length) * 100)
})
</script>

<style scoped></style>
