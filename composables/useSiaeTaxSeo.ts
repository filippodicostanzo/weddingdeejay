// composables/useSiaeTaxSeo.js
import {siaeTaxSeo} from "~/seo/pages/siaetax";
import { generateSeoMeta } from '~/config/seo';

export function useSiaeTaxSeo() {
    const baseMeta = siaeTaxSeo.meta;

    useHead(generateSeoMeta(baseMeta));
    useHead({
        meta: [
            { name: 'robots', content: 'noindex, nofollow' }
        ],
        script: [{
            type: 'application/ld+json',
            innerHTML: JSON.stringify(siaeTaxSeo.schema)
        }]
    });
}