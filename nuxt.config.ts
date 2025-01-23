// https://nuxt.com/docs/api/configuration/nuxt-config
import googleFonts from "./config/googleFonts";
import cookies from "./config/cookies";


// @ts-ignore
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: [
        '~/assets/scss/style.scss',
        '@fortawesome/fontawesome-svg-core/styles.css',
        'swiper/css',
        'swiper/css/navigation',
        'swiper/css/pagination'
    ],
    modules: ['@nuxtjs/google-fonts', '@dargmuesli/nuxt-cookie-control', 'nuxt-gtag'],

    ...googleFonts,
    ...cookies,


    gtag: {
        id: process.env.NUXT_GOOGLE_ANALYTICS_ID
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build: {
        transpile: [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/free-regular-svg-icons',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/vue-fontawesome',
            'swiper',
            'vueisotope'
        ]
    },

    nitro: {
        prerender: {
            crawlLinks: true,  // Questo permette di crawlare automaticamente i link
            routes: ['/artists', '/venues', '/livesets'],  // Specifichiamo la route principale degli artisti
            ignore: [
                // ignora la pagina private principale
                '/private/contacts',
                'artists/contacts',
                'venues/contacts',
                'livesets/contacts',
                // ignora tutte le sottopagine di private
            ]
        }
    },
    hooks: {
        'nitro:config': async (nitroConfig) => {
            const {useArtistService} = await import('./api/services/artists')
            const {useLocationService} = await import('./api/services/locations')
            const { useLiveSetService } = await import('./api/services/livesets')

            const artistService = useArtistService()
            const venueService = useLocationService()
            const livesetService = useLiveSetService()



            try {
                const [artists, venues, livesets] = await Promise.all([
                    artistService.getArtists(),
                    venueService.getLocations(),
                    livesetService.getLiveSets()
                ])

                // Prepariamo tutte le routes
                const artistRoutes = artists.map(artist => `/artists/${artist.identifier}`)
                const venueRoutes = venues.map(venue => `/venues/${venue.identifier}`)
                const livesetRoutes = livesets.map(liveset => `/livesets/${liveset.identifier}`)


                // Aggiungi le route degli artisti a quelle da pre-renderizzare
                // @ts-ignore
                nitroConfig.prerender.routes = nitroConfig.prerender.routes || []
                // @ts-ignore
                nitroConfig.prerender.routes.push(
                    ...artistRoutes,
                    ...venueRoutes,
                    ...livesetRoutes
                )
            } catch (error) {
                console.error('Errore durante la generazione delle route degli artisti:', error)
            }
        },
    },


    runtimeConfig: {
        // Variabili private (solo lato server)
        privatePassword: process.env.NUXT_PRIVATE_PASSWORD,
        // Variabili pubbliche (accessibili anche lato client)
        public: {
            privatePassword: process.env.NUXT_PRIVATE_PASSWORD,
            linkInstagram: process.env.NUXT_PUBLIC_INSTAGRAM_URL,
            linkFacebook: process.env.NUXT_PUBLIC_FACEBOOK_URL,
            linkVimeo: process.env.NUXT_PUBLIC_VIMEO_URL,
            linkTikTok: process.env.NUXT_PUBLIC_TIKTOK_URL,
            phone_1: process.env.NUXT_PUBLIC_PHONE_1,
            whatsApp_1: process.env.NUXT_PUBLIC_WHATSAPP_URL_1,
            mail: process.env.NUXT_PUBLIC_MAIL,
            linkWebSite: process.env.NUXT_PUBLIC_SITE_URL,
            linkPlayStore: process.env.NUXT_PUBLIC_PLAYSTORE_URL,
            linkAppStore: process.env.NUXT_PUBLIC_APPSTORE_URL,
            contactMailSender: process.env.NUXT_PUBLIC_CONTACT_MAIL_SENDER,
            contactMailReceiver: process.env.NUXT_PUBLIC_CONTACT_MAIL_RECEIVER,
            vatID: process.env.NUXT_PUBLIC_VAT_ID,
        }
    }

})