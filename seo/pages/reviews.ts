// seo/pages/reviews.ts
export const reviewsSeo = {
    meta: {
        title: 'Wedding DJ Reviews & Testimonials - Amalfi Coast Events',
        description: 'Read authentic reviews from couples who celebrated their weddings with our professional DJs in the Amalfi Coast. Discover their experiences with our premier entertainment services.',
        keywords: 'wedding dj reviews, amalfi coast wedding reviews, dj testimonials, wedding entertainment reviews',
        image: '/images/header-reviews.webp',
        url: '/reviews'
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Wedding DJ Reviews & Testimonials",
        "description": "Authentic reviews from couples who celebrated their weddings with our professional DJs",
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