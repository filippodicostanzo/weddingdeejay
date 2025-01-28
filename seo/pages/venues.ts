// seo/pages/venues.ts
import type { Location } from '~/api/types/location';

export const venuesSeo = {
    meta: {
        title: 'Luxury Wedding Venues in Amalfi Coast - DJ Services',
        description: 'Discover premier wedding venues in the Amalfi Coast where we provide our professional DJ services. From historic villas to luxury hotels, find the perfect location for your celebration.',
        keywords: 'wedding venues amalfi coast, luxury wedding locations italy, destination wedding venues, amalfi coast event spaces',
        image: '/images/header-venues.webp',
        url: '/venues'
    },
    generateSchema(venues: Location[]) {
        return {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "headline": this.meta.title,
            "description": this.meta.description,
            "provider": {
                "@type": "Organization",
                "name": "Wedding Deejay",
                "areaServed": {
                    "@type": "Place",
                    "name": "Amalfi Coast",
                    "address": {
                        "@type": "PostalAddress",
                        "addressRegion": "Campania",
                        "addressCountry": "IT"
                    }
                }
            },
            "mainEntity": {
                "@type": "ItemList",
                "itemListElement": venues.map((venue, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                        "@type": "Place",
                        "name": venue.name,
                        "image": venue.cover.url,
                        "description": venue.description,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": venue.city,
                            "addressRegion": "Campania",
                            "addressCountry": "IT"
                        },
                        "url": `${process.env.NUXT_PUBLIC_SITE_URL}/venues/${venue.identifier}`
                    }
                }))
            }
        };
    }
};