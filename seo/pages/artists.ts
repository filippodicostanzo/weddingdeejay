// seo/pages/artists.ts
import type { Artist } from '~/api/types/artist';

export const artistsSeo = {
    meta: {
        title: 'Professional Wedding DJs & Artists in Amalfi Coast',
        description: 'Meet our elite team of professional wedding DJs performing in the Amalfi Coast. Each artist brings years of experience in luxury events and destination weddings in Italy.',
        keywords: 'wedding dj performers, professional dj artists amalfi coast, wedding entertainment italy, luxury event djs',
        image: '/images/header-artists.webp',
        url: '/artists'
    },
    generateSchema(artists: Artist[]) {
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
                "itemListElement": artists.map((artist, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                        "@type": "Person",
                        "name": artist.name,
                        "image": artist.cover.url,
                        "description": artist.biography,
                        "jobTitle": artist.category.name,
                        "url": `${process.env.NUXT_PUBLIC_SITE_URL}/artists/${artist.identifier}`
                    }
                }))
            }
        };
    }
};