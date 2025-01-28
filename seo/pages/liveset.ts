// seo/pages/liveset.ts
import type { LiveSet } from '~/api/types';

export const singleLiveSetSeo = {
    generateMeta: (liveSet: LiveSet) => ({
        title: `${liveSet.name} - Wedding DJ Live Set in ${liveSet.locations.name}`,
        description: `Experience ${liveSet.artists.name}'s live DJ set from ${liveSet.locations.name}. Professional wedding entertainment and luxury event music in the Amalfi Coast.`,
        keywords: `${liveSet.name}, ${liveSet.artists.name}, wedding dj set, ${liveSet.locations.name}, live music performance`,
        image: liveSet.cover.url,
        url: `${process.env.NUXT_PUBLIC_SITE_URL}/livesets/${liveSet.identifier}`
    }),
    generateSchema: (liveSet: LiveSet) => ({
        "@context": "https://schema.org",
        "@type": "MusicRecording",
        "name": liveSet.name,
        "image": liveSet.cover.url,
        "description": liveSet.description,
        "datePublished": liveSet.date,
        "url": `${process.env.NUXT_PUBLIC_SITE_URL}/livesets/${liveSet.identifier}`,
        "byArtist": {
            "@type": "Person",
            "name": liveSet.artists.name,
            "url": `${process.env.NUXT_PUBLIC_SITE_URL}/artists/${liveSet.artists.identifier}`
        },
        "recordingOf": {
            "@type": "Event",
            "location": {
                "@type": "Place",
                "name": liveSet.locations.name,
                "url": `${process.env.NUXT_PUBLIC_SITE_URL}/venues/${liveSet.locations.identifier}`
            }
        },
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
        }
    })
};