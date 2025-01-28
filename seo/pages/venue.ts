// seo/pages/venue.ts
import type { Location } from '~/api/types';

export const singleVenueSeo = {
    generateMeta: (venue: Location) => ({
        title: `${venue.name} - Luxury Wedding Venue in ${venue.city}`,
        description: `Experience unforgettable wedding celebrations at ${venue.name} in ${venue.city}. Professional DJ services available at this exclusive Amalfi Coast venue.`,
        keywords: `${venue.name}, ${venue.city} wedding venue, luxury wedding location, amalfi coast wedding venue`,
        image: venue.cover.url,
        url: `${process.env.NUXT_PUBLIC_SITE_URL}/venues/${venue.identifier}`
    }),
    generateSchema: (venue: Location) => ({
        "@context": "https://schema.org",
        "@type": "Place",
        "name": venue.name,
        "image": [venue.cover.url, venue.logo.url],
        "description": venue.description,
        "url": `${process.env.NUXT_PUBLIC_SITE_URL}/venues/${venue.identifier}`,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": venue.city,
            "addressRegion": "Campania",
            "addressCountry": "IT"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Event Services",
            "itemListElement": [{
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Wedding DJ Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Wedding Deejay"
                    }
                }
            }]
        }
    })
};