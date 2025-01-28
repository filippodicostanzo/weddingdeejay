// seo/pages/showcase.js
export const showcaseSeo = {
    meta: {
        title: 'Wedding DJ Portfolio & Event Highlights in Amalfi Coast - Video Gallery',
        description: 'Watch our wedding DJ performances and event highlights in exclusive Amalfi Coast venues. Featuring professional wedding entertainment videos and collaborations with luxury Italian venues.',
        keywords: 'wedding dj videos, event highlights amalfi coast, luxury venue collaborations, wedding entertainment portfolio, professional dj showcase, amalfi coast venues, wedding music videos',
        image: '/images/header-showcase.webp',
        url: '/showcase'
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Wedding DJ Portfolio & Event Highlights",
        "description": "Professional wedding DJ performances and event highlights in the Amalfi Coast",
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
    }
};