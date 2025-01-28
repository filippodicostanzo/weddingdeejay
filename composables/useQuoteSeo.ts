// composables/useQuoteSeo.ts
import { quoteSeo } from '~/seo/pages/quote';
import { generateSeoMeta } from '~/config/seo';

export function useQuoteSeo() {
    // Applichiamo i meta tag base
    useHead(generateSeoMeta(quoteSeo.meta));

    // Applichiamo lo schema JSON-LD
    useHead({
        script: [{
            type: 'application/ld+json',
            innerHTML: JSON.stringify(quoteSeo.schema)
        }]
    });
}