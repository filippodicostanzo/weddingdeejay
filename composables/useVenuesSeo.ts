// composables/useVenuesSeo.ts
import type { Location } from '~/api/types/location';
import { venuesSeo } from '~/seo/pages/venues';
import { singleVenueSeo } from '~/seo/pages/venue';
import { generateSeoMeta } from '~/config/seo';

type VenueSeoType = 'list' | 'single';

export function useVenuesSeo(data: Location[] | Location | undefined, type: VenueSeoType = 'list') {
    if (type === 'single' && data && !Array.isArray(data)) {
        const venueMeta = singleVenueSeo.generateMeta(data);
        const venueSchema = singleVenueSeo.generateSchema(data);

        useHead(generateSeoMeta(venueMeta));
        useHead({
            script: [{
                type: 'application/ld+json',
                innerHTML: JSON.stringify(venueSchema)
            }]
        });
    } else if (Array.isArray(data)) {
        useHead(generateSeoMeta(venuesSeo.meta));
        useHead({
            script: [{
                type: 'application/ld+json',
                innerHTML: JSON.stringify(venuesSeo.generateSchema(data))
            }]
        });
    }
}