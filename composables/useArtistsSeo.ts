// composables/useArtistsSeo.ts
import type { Artist } from '~/api/types/artist';
import { artistsSeo } from '~/seo/pages/artists';
import { singleArtistSeo } from '~/seo/pages/artist';
import { generateSeoMeta } from '~/config/seo';

type ArtistSeoType = 'list' | 'single';

export function useArtistsSeo(data: Artist[] | Artist | undefined, type: ArtistSeoType = 'list') {
    if (type === 'single' && data && !Array.isArray(data)) {
        // Utilizziamo le funzioni di generazione dal singleArtistSeo
        const artistMeta = singleArtistSeo.generateMeta(data);
        const artistSchema = singleArtistSeo.generateSchema(data);

        useHead(generateSeoMeta(artistMeta));
        useHead({
            script: [{
                type: 'application/ld+json',
                innerHTML: JSON.stringify(artistSchema)
            }]
        });
    } else if (Array.isArray(data)) {
        // Utilizziamo le configurazioni da artistsSeo
        useHead(generateSeoMeta(artistsSeo.meta));
        useHead({
            script: [{
                type: 'application/ld+json',
                innerHTML: JSON.stringify(artistsSeo.generateSchema(data))
            }]
        });
    }
}