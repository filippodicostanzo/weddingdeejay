<template>
    <section class="relative py-24 bg-[#222]">
        <div class="absolute inset-0 bg-cover bg-center opacity-35 pointer-events-none"
            style="background-image: url('/images/parallax-showcase.webp')"></div>
        <div class="container mx-auto px-4 relative z-10">
            <div class="mb-12">
                <div class="text-center">
                    <h4 class="text-xl font-semibold text-primary mb-2 font-architects">What we do</h4>
                    <h2 class="text-4xl font-bold text-white font-montserrat">Showcase</h2>
                </div>
            </div>

            <!-- Mostra LoadSpinner durante il caricamento -->
            <LoadSpinner v-if="loading" />

            <!-- Messaggio quando non ci sono dati -->
            <div v-else-if="!data || data.length === 0" class="flex justify-center items-center min-h-[200px]">
                <div class="text-center">
                    <p class="text-white text-lg">No videos available at the moment.</p>
                    <p class="text-gray-400 mt-2">Please check back later.</p>
                </div>
            </div>

            <!-- Mostra la griglia quando ci sono dati -->
            <div v-else>
                <div class="grid md:grid-cols-2 gap-8">
                    <div v-for="item in data" :key="item.video_id" class="w-full z-10">
                        <div class="video-embed w-full aspect-video rounded-lg overflow-hidden bg-black">
                            <iframe :src="`https://www.youtube.com/embed/${item.video_id}`" :title="item.title"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="w-full h-full">
                            </iframe>
                        </div>
                        <div class="mt-4">
                            <h3 class="text-white font-semibold text-lg line-clamp-2">{{ item.title }}</h3>
                            <p class="text-gray-400 text-sm mt-2 line-clamp-3">{{ item.description }}</p>
                        </div>
                    </div>
                </div>

                <!-- View All Videos Button -->
                <div class="text-center mt-12">
                    <NuxtLink to="/showcase" class="btn-primary">
                        View All Videos
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import LoadSpinner from "~/components/LoadSpinner.vue"
import type { YoutubeVideo } from "~/api/types"

const props = defineProps({
    data: {
        type: Array as () => YoutubeVideo[],
        required: true,
        default: () => []
    },
    loading: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
.video-embed iframe {
    width: 100%;
    height: 100%;
}

/* Limita il testo a un numero specifico di righe */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
