// seo/pages/artist.ts
import type {Artist} from "~/api/types";

export const singleArtistSeo = {
    generateMeta: (artist: Artist) => ({
        title: `${artist.name} - Professional Wedding DJ in Amalfi Coast`,
        description: `Book ${artist.name}, professional wedding DJ specializing in ${artist.category.name}. Creating unforgettable musical experiences for luxury weddings in the Amalfi Coast.`,
        keywords: `${artist.name}, wedding dj, ${artist.category.name}, amalfi coast dj, professional wedding entertainer`,
        image: artist.cover.url,
        url: `${process.env.NUXT_PUBLIC_SITE_URL}/artists/${artist.identifier}`
    }),
    generateSchema: (artist: Artist) => ({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": artist.name,
        "image": artist.cover.url,
        "description": artist.biography,
        "jobTitle": artist.category.name,
        "url": `${process.env.NUXT_PUBLIC_SITE_URL}/artists/${artist.identifier}`,
        "worksFor": {
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
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": artist.contacts?.phone,
            "email": artist.contacts?.email,
            "url": artist.contacts?.website
        },
        "sameAs": Object.values(artist.social || {}).filter((url): url is string => url !== '')
    })
};