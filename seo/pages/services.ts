export const servicesSeo = {
    meta: {
        title: 'Luxury Wedding Entertainment Services in Amalfi Coast - Professional DJ Solutions',
        description: 'Explore our premium wedding entertainment services in the Amalfi Coast. From ceremony music to reception DJs, silent discos, and sound equipment rental - create your perfect wedding soundtrack.',
        keywords: 'wedding entertainment services, amalfi coast wedding music, luxury event services, ceremony music, reception dj, silent disco wedding, sound equipment rental, professional audio services',
        image: '/images/header-services.webp',
        url: '/services'
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "ServicesPage",
        "name": "Wedding Entertainment Services",
        "description": "Professional wedding entertainment and DJ services in the Amalfi Coast",
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