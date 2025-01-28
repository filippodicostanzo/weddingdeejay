// seo/pages/private.js
export const privateSeo = {
    meta: {
        title: 'Private Area - Wedding Deejay',
        description: 'Private access area for Wedding Deejay clients. Please enter your credentials to access exclusive content.',
        robots: 'noindex, nofollow', // Impedisce l'indicizzazione della pagina privata
        image: '/images/header-private.webp',
        url: '/private'
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Private Area",
        "description": "Private access area for authorized users",
        "accessMode": "textual",
        "accessModeSufficient": {
            "@type": "ItemList",
            "itemListElement": ["textual"]
        },
        "isAccessibleForFree": false
    }
};