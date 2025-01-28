// composables/useSongsSeo.js
import { songsSeo } from '~/seo/pages/songs';
import { generateSeoMeta } from '~/config/seo';

export function useSongsSeo() {
    const baseMeta = songsSeo.meta;

    useHead(generateSeoMeta(baseMeta));
    useHead({
        meta: [
            { name: 'robots', content: 'noindex, nofollow' }
        ],
        script: [{
            type: 'application/ld+json',
            innerHTML: JSON.stringify(songsSeo.schema)
        }]
    });
}