
export const defaultSeoConfig = {
    title: 'Wedding Deejay - Professional DJs for your Event',
    description: 'Premier wedding and event DJs with over 20 years of experience in the Amalfi Coast. Offering bespoke music entertainment, silent disco, and professional sound services for luxury weddings and exclusive events in Italy.',
    keywords: 'wedding dj amalfi coast, event dj italy, luxury wedding entertainment, professional dj services, amalfi coast events, wedding music italy, silent disco events, wedding party dj, italian riviera events, professional sound services',
    image: '/images/slider-01.webp',
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://weddingdeejay.com',
    siteName: 'Wedding Deejay',

    // Configurazioni social
    social: {
        twitter: {
            card: 'summary_large_image',
            site: '@weddingdeejay' // il tuo account Twitter se lo hai
        }
    }
};

export function generateSeoMeta(options = {}) {
    const seo = { ...defaultSeoConfig, ...options }

    return {
        title: seo.title,
        titleTemplate: `%s | ${seo.siteName}`,
        meta: [
            // Meta tag standard
            { name: 'description', content: seo.description },
            { name: 'keywords', content: seo.keywords },

            // Open Graph
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: seo.title },
            { property: 'og:description', content: seo.description },
            { property: 'og:image', content: seo.image },
            { property: 'og:url', content: seo.url },
            { property: 'og:site_name', content: seo.siteName },

            // Twitter Card
            { name: 'twitter:card', content: seo.social.twitter.card },
            { name: 'twitter:title', content: seo.title },
            { name: 'twitter:description', content: seo.description },
            { name: 'twitter:image', content: seo.image },
            { name: 'twitter:site', content: seo.social.twitter.site },

            // Altri meta tag importanti
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { charset: 'utf-8' },
            { name: 'robots', content: 'index, follow' },
            { name: 'geo.region', content: 'IT' },
            { name: 'geo.placename', content: 'Amalfi Coast' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'canonical', href: seo.url },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Poppins:400,700,900'
            }
        ]
    }
}

