// seo/pages/quote.ts
export const quoteSeo = {
    meta: {
        title: 'Request a Quote - Wedding DJ Services in Amalfi Coast',
        description: 'Book your perfect wedding entertainment package in the Amalfi Coast. Get a personalized quote for our professional DJ services, including ceremony music, reception entertainment, and more.',
        keywords: 'wedding dj quote, amalfi coast entertainment booking, wedding music services, event dj booking, luxury wedding entertainment, wedding dj packages',
        image: '/images/header-quote.webp',
        url: '/quote'
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Wedding DJ Services Quote Request",
        "description": "Request a personalized quote for professional wedding DJ services in the Amalfi Coast",
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
        "potentialAction": {
            "@type": "ReservationAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://weddingdeejay.com/quote",
                "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                ]
            },
            "result": {
                "@type": "Reservation",
                "provider": {
                    "@type": "Organization",
                    "name": "Wedding Deejay"
                }
            }
        }
    }
};