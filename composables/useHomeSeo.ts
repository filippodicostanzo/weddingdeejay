// composables/useHomeSeo.ts
import { homeSeo } from '~/seo/pages/home';

export function useHomeSeo() {
    useHead({
        title: homeSeo.meta.title,
        meta: [
            { name: 'description', content: homeSeo.meta.description },
            { name: 'og:title', content: homeSeo.meta.title },
            { name: 'og:description', content: homeSeo.meta.description },
            { name: 'og:image', content: homeSeo.meta.image },
            { name: 'og:url', content: homeSeo.meta.url },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: homeSeo.meta.title },
            { name: 'twitter:description', content: homeSeo.meta.description },
            { name: 'twitter:image', content: homeSeo.meta.image }
        ],
        script: [{
            type: 'application/ld+json',
            innerHTML: JSON.stringify(homeSeo.schema)
        }]
    });
}