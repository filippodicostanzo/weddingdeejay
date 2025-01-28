// seo/pages/livesets.ts
import type { LiveSet } from '~/api/types/liveset';

export const liveSetsSeo = {
    meta: {
        title: 'Wedding DJ Live Sets & Performances in Amalfi Coast',
        description: 'Experience our professional wedding DJ live sets from luxury events in the Amalfi Coast. Listen to our curated mixes and get inspired for your special day.',
        keywords: 'wedding dj live sets, amalfi coast dj mixes, professional wedding performances, luxury event music, wedding party mixes',
        image: '/images/header-livesets.webp',
        url: '/livesets'
    },
    generateSchema(liveSets: LiveSet[]) {
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
                "itemListElement": liveSets.map((liveSet, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                        "@type": "MusicRecording",
                        "name": liveSet.name,
                        "image": liveSet.cover.url,
                        "description": liveSet.description,
                        "datePublished": liveSet.date,
                        "url": `${process.env.NUXT_PUBLIC_SITE_URL}/livesets/${liveSet.identifier}`,
                        "byArtist": {
                            "@type": "Person",
                            "name": liveSet.artists.name
                        },
                        "recordingOf": {
                            "@type": "Event",
                            "location": {
                                "@type": "Place",
                                "name": liveSet.locations.name
                            }
                        }
                    }
                }))
            }
        };
    }
};