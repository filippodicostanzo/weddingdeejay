import { VueReCaptcha } from 'vue-recaptcha-v3';
import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6LffPZQUAAAAALjC9FhBUrkGLBsCIDGh9Fzkx1PW',
        loaderOptions: {
            autoHideBadge: true,
            explicitRenderParameters: {
                badge: 'bottomleft',
            },
        },
    });
});
