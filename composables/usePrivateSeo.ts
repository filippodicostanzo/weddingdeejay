// composables/usePrivateSeo.js
import { privateSeo } from '~/seo/pages/private';
import { generateSeoMeta } from '~/config/seo';

export function usePrivateSeo() {
    const baseMeta = privateSeo.meta;

    useHead(generateSeoMeta(baseMeta));
    useHead({
        meta: [
            { name: 'robots', content: 'noindex, nofollow' }
        ],
        script: [{
            type: 'application/ld+json',
            innerHTML: JSON.stringify(privateSeo.schema)
        }]
    });
}