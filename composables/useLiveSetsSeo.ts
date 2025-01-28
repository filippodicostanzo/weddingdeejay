// composables/useLiveSetsSeo.ts
import type { LiveSet } from '~/api/types/liveset';
import { liveSetsSeo } from '~/seo/pages/livesets';
import { singleLiveSetSeo } from '~/seo/pages/liveset';
import { generateSeoMeta } from '~/config/seo';

type LiveSetSeoType = 'list' | 'single';

export function useLiveSetsSeo(data: LiveSet[] | LiveSet | undefined, type: LiveSetSeoType = 'list') {
    if (type === 'single' && data && !Array.isArray(data)) {
        const liveSetMeta = singleLiveSetSeo.generateMeta(data);
        const liveSetSchema = singleLiveSetSeo.generateSchema(data);

        useHead(generateSeoMeta(liveSetMeta));
        useHead({
            script: [{
                type: 'application/ld+json',
                innerHTML: JSON.stringify(liveSetSchema)
            }]
        });
    } else if (Array.isArray(data)) {
        useHead(generateSeoMeta(liveSetsSeo.meta));
        useHead({
            script: [{
                type: 'application/ld+json',
                innerHTML: JSON.stringify(liveSetsSeo.generateSchema(data))
            }]
        });
    }
}