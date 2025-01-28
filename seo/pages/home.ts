// seo/pages/home.ts
export const homeSeo = {
    meta: {
        title: 'Wedding Deejay - Professional DJs for your Event',
        description: 'Premier wedding and event DJs with over 20 years of experience in the Amalfi Coast. Offering bespoke music entertainment, silent disco, and professional sound services for luxury weddings and exclusive events in Italy.',
        image: '/images/slider-01.webp',
        url: '/'
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Wedding Deejay",
        "description": "Premier wedding and event DJs with over 20 years of experience",
        "url": process.env.NUXT_PUBLIC_SITE_URL,
        "areaServed": {
            "@type": "Place",
            "name": "Amalfi Coast",
            "address": {
                "@type": "PostalAddress",
                "addressRegion": "Campania",
                "addressCountry": "IT"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.6333",
                "longitude": "14.6027"
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "100"
        },
        "makesOffer": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Wedding DJ Services",
                    "description": "Professional DJ services for luxury weddings"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Silent Disco",
                    "description": "Silent disco equipment and entertainment"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Sound Equipment",
                    "description": "Professional sound services and equipment rental"
                }
            }
        ]
    }
};