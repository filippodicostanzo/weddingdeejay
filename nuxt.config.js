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
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/vuelidate',
      mode: 'client'
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

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
  ],

  loading: '~/components/Loading.vue',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', {duration: 1000}],
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
