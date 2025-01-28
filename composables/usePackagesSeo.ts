// composables/usePackagesSeo.js
import { packagesSeo } from '~/seo/pages/packages';
import { generateSeoMeta } from '~/config/seo';
import type {Package} from "~/api/types";

export function usePackagesSeo(packages: Package[] = []) {
    // Base meta configuration
    const baseMeta = packagesSeo.meta;

    // Create dynamic schema that includes all packages
    const dynamicSchema = {
        ...packagesSeo.schema,
        // Aggiungiamo i pacchetti disponibili allo schema
        "offers": packages.map(pkg => ({
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": pkg.name,
                "description": pkg.details,
                "image": pkg.cover.url,
                "url": `${process.env.NUXT_PUBLIC_SITE_URL}/packages#${pkg.identifier}`
            }
        }))
    };

    // Apply SEO configuration
    useHead(generateSeoMeta(baseMeta));
    useHead({
        script: [{
            type: 'application/ld+json',
            innerHTML: JSON.stringify(dynamicSchema)
        }]
    });
}