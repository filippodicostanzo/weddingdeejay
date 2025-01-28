// composables/useShowcaseSeo.js
import { showcaseSeo } from '~/seo/pages/showcase';
import { generateSeoMeta } from '~/config/seo';
import type {Location, Video} from "~/api/types";

export function useShowcaseSeo(videos: Video[] = [], locations: Location[] = []) {
    // Base meta configuration
    const baseMeta = showcaseSeo.meta;

    // Creiamo uno schema dinamico che include video e locations
    const dynamicSchema = {
        ...showcaseSeo.schema,
        // Aggiungiamo la sezione video
        "video": videos.map(video => ({
            "@type": "VideoObject",
            "name": video.name || "Wedding DJ Performance",
            "description": video.description || "Professional wedding DJ performance in Amalfi Coast",
            "thumbnailUrl": video.pictures?.sizes?.[0]?.link,
            "uploadDate": video.created_time,
            "embedUrl": video.embed?.html?.match(/src="([^"]+)"/)?.[1],
            "publisher": {
                "@type": "Organization",
                "name": "Wedding Deejay"
            }
        })),
        // Aggiungiamo la sezione locations
        "about": {
            "@type": "ItemList",
            "name": "Our Iconic Collaborations",
            "itemListElement": locations.map((location, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "Organization",
                    "name": location.identifier,
                    "image": location.logo.url,
                    "url": location.url
                }
            }))
        }
    };

    // Applichiamo la configurazione SEO
    useHead(generateSeoMeta(baseMeta));
    useHead({
        script: [{
            type: 'application/ld+json',
            innerHTML: JSON.stringify(dynamicSchema)
        }]
    });
}