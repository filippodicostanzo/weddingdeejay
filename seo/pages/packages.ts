// seo/pages/packages.js
export const packagesSeo = {
    meta: {
        title: 'Wedding DJ Packages & Services in Amalfi Coast - Luxury Event Entertainment',
        description: 'Discover our premium wedding DJ packages for your Amalfi Coast celebration. From intimate ceremonies to grand receptions, explore our customized entertainment solutions for luxury events.',
        keywords: 'wedding dj packages, amalfi coast wedding entertainment, luxury event services, wedding music packages, professional dj services italy, event entertainment packages',
        image: '/images/header-packages.webp',
        url: '/packages'
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Wedding DJ Packages & Services",
        "description": "Professional DJ packages and entertainment services for weddings in the Amalfi Coast",
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
        // Aggiunto schema specifico per i servizi offerti
        "about": {
            "@type": "Service",
            "serviceType": "Wedding DJ Entertainment",
            "provider": {
                "@type": "Organization",
                "name": "Wedding Deejay"
            },
            "areaServed": "Amalfi Coast",
            "category": "Wedding Entertainment"
        }
    }
};