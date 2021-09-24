// aos.js
import Vue from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const aosPlugin = {
  install: () => {
    AOS.init({

      disable: window.innerWidth < 640,
      // offset: 200,
      duration: 1000,
      easing: 'ease-in-out-cubic',
      once: true

    })
  },
}

if (process.client) {
  Vue.use(aosPlugin);
}

