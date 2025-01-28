// seo/pages/contacts.js
export const contactsSeo = {
    meta: {
        title: 'Contact Wedding Deejay - Professional DJ Services in Amalfi Coast',
        description: 'Get in touch with Wedding Deejay for professional DJ services in Amalfi Coast. Contact us to discuss your wedding entertainment needs and receive a personalized quote.',
        keywords: 'wedding dj contact, amalfi coast dj booking, wedding entertainment inquiry, dj services contact, wedding music consultation',
        image: '/images/header-contacts.webp',
        url: '/contacts'
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Wedding Deejay",
        "description": "Contact page for Wedding Deejay services in Amalfi Coast",
        "provider": {
            "@type": "Organization",
            "name": "Wedding Deejay",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "Amalfi Coast",
                "availableLanguage": ["en", "it"]
            },
            "location": {
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