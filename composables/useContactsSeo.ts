// composables/useContactsSeo.js
import { contactsSeo } from '~/seo/pages/contacts';
import { generateSeoMeta } from '~/config/seo';

export function useContactsSeo() {
    const baseMeta = contactsSeo.meta;

    useHead(generateSeoMeta(baseMeta));
    useHead({
        script: [{
            type: 'application/ld+json',
            innerHTML: JSON.stringify(contactsSeo.schema)
        }]
    });
}