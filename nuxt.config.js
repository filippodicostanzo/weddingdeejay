import axios from "axios";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'weddingdeejay',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins:400,700,900'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/vuelidate',
      mode: 'client',
    },
    {
      src: '~/plugins/aos.js',
      mode: 'client',
    },

    {
      src: '~/plugins/datepicker.js',
      mode: 'client',
    },

    {
      src: '@/plugins/isotope',
      mode: 'client'
    },
    {
      src: '@/plugins/vue-awesome-swiper',
      mode: 'client'
    },
    {
      src: '@/plugins/truncate',
      mode: 'client'
    },

    {
      src: '@/plugins/vue-js-modal',
      mode: 'client'
    },


    {
      src: '~/plugins/lightgallery.js',
      mode: 'client',
    },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/date-fns',
    '@nuxtjs/dotenv'
  ],

  loading: '~/components/Loading.vue',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['@nuxtjs/recaptcha', {
      hideBadge: true,
      siteKey: process.env.RECAPTCHA_SITE_KEY,
      version: 3,  // Site key for requests
    }],
    ['vue-scrollto/nuxt', {duration: 1000}],
    'nuxt-cookie-control',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true,
    }
  },

  generate: {
    routes: async function()  {

      let artists = axios.get('https://weddingdeejay.herokuapp.com/artists').then((res) => {
        return res.data.map((artist) => {
          return {
            route: '/artists/'+ artist.identifier,
            payload: artist
          }
        })
      });

      let packages = axios.get('https://weddingdeejay.herokuapp.com/packages').then((res) => {
        return res.data.map((pack) => {
          return {
            route: '/packages/' + pack.id,
            payload: pack
          }
        })
      });

      return Promise.all([artists, packages]).then(values => {
        return [...values[0], ...values[1]]
      })

    }
  },

  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      siteKey: process.env.RECAPTCHA_SITE_KEY // for example
    },
    siteDomain: process.env.SITE_DOMANIN || '',
    siteProperty: process.env.SITE_PROPERTY || '',
    siteAddress: process.env.SITE_ADDRESS || '',
    linkFacebook: process.env.LINK_FACEBOOK || '',
    linkInstagram: process.env.LINK_INSTAGRAM || '',
    linkVimeo: process.env.LINK_VIMEO || '',
    linkTikTok: process.env.LINK_TIKTOK || '',
  },

  cookies: {
    necessary: [
      {
        //if multilanguage
        name: {
          en: 'Default Cookies'
        },
        //else

        //if multilanguage
        description: {
          en: 'Used for cookie control.'
        },
        //else

        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name: 'Google Analitycs',
        //if you don't set identifier, slugified name will be used
        identifier: 'ga',
        //if multilanguage
        description: {
          en: 'Google GTM is ...'
        },
        //else

        initialState: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
        async: true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
        },
        declined: () => {
        }
      }
    ]
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
