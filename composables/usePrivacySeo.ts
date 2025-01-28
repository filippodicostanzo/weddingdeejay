// composables/usePrivacySeo.ts
import { privacySeo } from '~/seo/pages/privacy';
import { generateSeoMeta } from '~/config/seo';

export function usePrivacySeo() {
    useHead(generateSeoMeta(privacySeo.meta));
    useHead({
        script: [{
            type: 'application/ld+json',
            innerHTML: JSON.stringify(privacySeo.schema)
        }]
    });
}