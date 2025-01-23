<template>
  <div>
    <div class="b-sidebar-backdrop" ref="backdrop" @click="closeSidebar"></div>

    <div class="b-sidebar-right b-sidebar bg-secondary" ref="sidemenu">
      <button class="close-button text-white left-3 text-2xl top-5" @click="closeSidebar">
        <font-awesome-icon :icon="['fas', 'times']" class="w-[20px] top-[10px]"/>
      </button>
      <nav class="mobile-menu">


        <client-only>

          <ul class="text-primary font-poppins font-bold flex justify-center mt-5 text-2xl space-x-3">
            <li>
              <a :href="config.public.linkFacebook" target="_blank">
                <font-awesome-icon :icon="['fab', 'facebook']" class="w-[24px]"/>
              </a>
            </li>
            <li>
              <a :href="config.public.linkInstagram" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']" class="w-[24px]"/>
              </a>
            </li>
            <li>
              <a :href="config.public.linkVimeo" target="_blank">
                <font-awesome-icon :icon="['fab', 'vimeo']" class="w-[24px]"/>
              </a>
            </li>
            <li>
              <a :href="config.public.linkTikTok" target="_blank">
                <font-awesome-icon :icon="['fab', 'tiktok']" class="w-[24px]"/>
              </a>
            </li>

            <li>
              <a :href="`https://wa.me/${config.public.whatsApp_1}?text=Send%20Message%20to%20Start%20the%20Chat`"
                 target="_blank">
                <font-awesome-icon :icon="['fab', 'whatsapp']" class="w-[24px]"/>
              </a>
            </li>

          </ul>
          <ul class="mt-10">


            <li class="m-5 text-center font-montserrat" key="home">
              <NuxtLink to="/" class="uppercase text-xl font-bold text-white"
                        :class="isLinkActive('/') ? 'font-black !text-primary' : ''"
              >
                <span @click="closeSidebar()">HOME</span>

              </NuxtLink>
            </li>
            <li v-for="item in menuData" class="m-5 text-center font-montserrat" :key="item.slug">
              <NuxtLink
                  :to="'/' + item.slug" class="uppercase text-xl font-bold tracking-wider text-white"
                  :class="isLinkActive(item.slug) ? 'font-black !text-primary' : ''"
              >
                <span @click="closeSidebar()">{{ item.name }}</span>
              </NuxtLink>
            </li>
          </ul>
        </client-only>
      </nav>
    </div>
  </div>
</template>


<script setup>
import {ref, onMounted} from 'vue';
import {emitter as eventBus} from "../utils/eventBus";
import menu from '~/static/data/menu.json';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useRoute, useRuntimeConfig} from "#app";

const menuData = ref([]);
const sidemenu = ref(null);
const backdrop = ref(null);


const config = useRuntimeConfig();

const route = useRoute();

console.log('Current route path:', route.path);

const isLinkActive = (slug) => {
  // Gestione speciale per l'homepage
  if (slug === '/') {
    return route.path === '/'
  }

  // Array di slug che devono essere attivi anche nelle sottopagine
  const parentSlugs = ['venues', 'artists', 'livesets']

  if (parentSlugs.includes(slug)) {
    return route.path.startsWith('/' + slug)
  }

  return route.path === '/' + slug
}

const closeSidebar = () => {
  nextTick(() => {
    sidemenu.value.classList.remove('slide-in');
    sidemenu.value.classList.add('slide-out')
    backdrop.value.classList.remove('backdrop-on');
    backdrop.value.classList.add('backdrop-off');
  });
};

onMounted(() => {
  menuData.value = menu;
  console.log(menuData);
  eventBus.on('openSideNav', () => {
    nextTick(() => {
      sidemenu.value.classList.remove('slide-out');
      sidemenu.value.classList.add('slide-in');
      backdrop.value.classList.remove('backdrop-off');
      backdrop.value.classList.add('backdrop-on');
    });
  })

  eventBus.on('closeSideNav', () => {
    nextTick(() => {
      sidemenu.value.classList.remove('slide-in');
      sidemenu.value.classList.add('slide-out')
      backdrop.value.classList.remove('backdrop-on');
      backdrop.value.classList.add('backdrop-off');
    });
  })
});
</script>


<style lang="scss" scoped>

.close-button {
  position: absolute;
  border: 0;
  background: transparent;
}

.lang-box {

  padding: 10px;

  a {
    opacity: 0.6;
  }

  a.nuxt-link-active {
    opacity: 1;
  }

  img {
    margin: 0 5px;
    vertical-align: top;
  }

}

.backdrop-on {
  z-index: 999;
  background-color: black;
  animation: opacity-on 0.5s ease-in;
  -webkit-animation: opacity-on 0.5s ease-in;
  position: fixed;
  top: 0;
  height: 100vh;
}

.b-sidebar {
  position: fixed;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 320px;
  max-width: 100%;
  max-height: 100%;
  margin: 0;
  outline: 0;
}

.b-sidebar-backdrop {
  left: 0;
  width: 100vw;
  opacity: .6;
  z-index: 9;
}

.backdrop-off {
  animation: opacity-off 0.5s ease-out;
  -webkit-animation: opacity-off 0.5s ease-out;
}

.b-sidebar-right {
  z-index: 999;
  right: 0;
  transform: translateX(320px);
  -webkit-transform: translateX(320px);
}

.slide-in {
  animation: slide-in 0.5s forwards;
  -webkit-animation: slide-in 0.5s forwards;
}

.slide-out {
  animation: slide-out 0.5s forwards;
  -webkit-animation: slide-out 0.5s forwards;
}

@keyframes opacity-on {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1 !important;
  }
}

@-webkit-keyframes opacity-on {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1 !important;
  }
}

@keyframes opacity-off {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes opacity-off {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes slide-in {
  100% {
    transform: translateX(0%);
  }
}

@-webkit-keyframes slide-in {
  100% {
    -webkit-transform: translateX(0%);
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(320px);
  }
}

@-webkit-keyframes slide-out {
  0% {
    -webkit-transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(320px);
  }
}
</style>
