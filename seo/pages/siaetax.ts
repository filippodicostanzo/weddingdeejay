// seo/pages/siae-tax.js
export const siaeTaxSeo = {
    meta: {
        title: 'SIAE Tax Guide for Weddings in Italy - Music Copyright Fees Explained',
        description: 'Essential guide to SIAE Tax for weddings in Italy. Learn about Italian music copyright fees, payment procedures, and legal requirements for playing music at your Italian wedding celebration.',
        keywords: 'SIAE tax, Italian wedding music fees, copyright fees Italy, wedding music licenses, SIAE payment, Italian music rights, wedding entertainment Italy, music permits Italy',
        image: '/images/header-playlists.webp',
        url: '/siae-tax'
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "What is SIAE Tax?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "SIAE Tax is a mandatory fee required by Italian law for playing copyrighted music at public and private events, including weddings. It is collected by the Italian Society of Authors and Publishers (SIAE) to ensure fair compensation for artists and copyright holders."
            }
        }, {
            "@type": "Question",
            "name": "When do I need to pay SIAE Tax for my wedding?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "SIAE Tax must be paid when your wedding includes live music performances, DJ services, background music during dinner or cocktail hour, or any form of recorded music played at the venue."
            }
        }],
        "provider": {
            "@type": "Organization",
            "name": "Wedding Deejay",
            "description": "Professional wedding entertainment and music services in Italy",
            "areaServed": {
                "@type": "Country",
                "name": "Italy"
            }
        },
        "about": {
            "@type": "Service",
            "name": "SIAE Tax Information Service",
            "description": "Comprehensive guidance on Italian music copyright fees and requirements for weddings",
            "provider": {
                "@type": "Organization",
                "name": "Wedding Deejay"
            }
        }
    }
};