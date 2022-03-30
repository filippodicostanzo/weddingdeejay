import Vue from "vue";
import VueGtag from "vue-gtag";

const vueGtagClient = ({ app, env }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: 'G-KLVJRQGB25' },
      disabled: true, // Here you could ignore user privacy and set to true
    },
    app.router
  )
}

export default vueGtagClient;
