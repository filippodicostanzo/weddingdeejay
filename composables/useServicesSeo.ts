// composables/useServicesSeo.js
import { servicesSeo } from '~/seo/pages/services';
import { generateSeoMeta } from '~/config/seo';
import type {Service} from "~/api/types";

export function useServicesSeo(services:Service[] = []) {
    // Base meta configuration
    const baseMeta = servicesSeo.meta;

    // Creiamo uno schema dinamico che include tutti i servizi disponibili
    const dynamicSchema = {
        ...servicesSeo.schema,
        // Aggiungiamo la lista dei servizi disponibili
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Wedding Entertainment Services",
            "itemListElement": services.map((service, index) => ({
                "@type": "Service",
                "name": service.name,
                "description": service.description,
                "image": service.cover.url,
                "url": `${process.env.NUXT_PUBLIC_SITE_URL}/services#${service.name.toLowerCase().replace(/\s+/g, '-')}`,
                "position": index + 1,
                "serviceType": "Wedding Entertainment",
                "provider": {
                    "@type": "Organization",
                    "name": "Wedding Deejay",
                    "areaServed": "Amalfi Coast"
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