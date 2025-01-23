import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {defineNuxtPlugin} from "nuxt/app";

// Disabilita l'aggiunta automatica di CSS da parte di FontAwesome
config.autoAddCss = false;

// Aggiungi le icone alla libreria
library.add(fas, fab);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});