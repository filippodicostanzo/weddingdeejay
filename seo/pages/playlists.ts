// seo/pages/playlists.js
export const playlistsSeo = {
    meta: {
        title: 'Wedding Music Playlists - Professional DJ Sets for Your Special Day',
        description: 'Explore our curated wedding music playlists. From ceremony classics to reception party hits, find the perfect soundtrack for every moment of your wedding celebration.',
        keywords: 'wedding music playlists, wedding dj sets, wedding ceremony music, reception party songs, italian wedding music, professional dj playlists',
        image: '/images/header-playlists.webp',
        url: '/playlists'
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Wedding Music Playlists",
        "description": "Professional DJ curated playlists for wedding ceremonies and receptions",
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
        "about": {
            "@type": "Service",
            "serviceType": "Wedding Music Curation",
            "provider": {
                "@type": "Organization",
                "name": "Wedding Deejay"
            },
            "areaServed": "Amalfi Coast",
            "category": "Wedding Entertainment"
        }
    }
};