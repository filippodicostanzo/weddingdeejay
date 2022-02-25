<template>
  <div>
    <div class="b-sidebar-backdrop" ref="backdrop" @click="closeSidebar"></div>


    <div class="b-sidebar-right b-sidebar" ref="sidemenu">
      <!--      <button class="close-button" @click="closeSidebar">
              <font-awesome-icon :icon="['fas', 'arrow-circle-right']"/>
            </button>-->
      <div class="logo-container">
        <nuxt-link to="/">
          <div @click="closeSidebar">
            <img src="../assets/images/logo.svg">
          </div>
        </nuxt-link>
      </div>
      <MainMenu mobile="true"/>
      <div class="line"></div>
      <ul class="contacts-list pt-4">
        <li>
          <nuxt-link to="contacts" tag="a">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
          </nuxt-link>
        </li>
        <li>
          <a href="tel:00393314042263">
            <font-awesome-icon :icon="['fas', 'phone']"/>
          </a>
        </li>
        <li>
          <a href="https://wa.me/393314042263?text=Send%20Message%20to%20Start%20the%20Chat" target="_blank">
            <font-awesome-icon :icon="['fab', 'whatsapp']"/>
          </a>
        </li>
        <li>
          <a href="mailto:info@weddingdeejayamalficoast.com" target="_blank">
            <font-awesome-icon :icon="['fas', 'envelope']"/>
          </a>
        </li>
      </ul>

      <ul class="social-list pt-2">
        <li>
          <a :href="$config.linkInstagram" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']"/>
          </a>
        </li>
        <li>
          <a :href="$config.linkFacebook" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook']"/>
          </a>
        </li>
        <li>
          <a :href="$config.linkVimeo" target="_blank">
            <font-awesome-icon :icon="['fab', 'vimeo']"/>
          </a>
        </li>
        <li>
          <a :href="$config.linkTikTok" target="_blank">
            <font-awesome-icon :icon="['fab', 'tiktok']"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidenav",

  methods: {
    closeSidebar() {
      this.$nextTick(() => {
        const body = document.querySelector('body')
        body.classList.add('overflow-y');
        body.classList.remove('overflow-hidden');
        this.$refs.sidemenu.classList.remove('slide-in');
        this.$refs.sidemenu.classList.add('slide-out')
        this.$refs.backdrop.classList.remove('backdrop-on');
        this.$refs.backdrop.classList.add('backdrop-off');

      });
    }
  },

  mounted() {
    this.$nuxt.$on('open-sidemenu', () => {
      this.$nextTick(() => {
        const body = document.querySelector('body')
        body.classList.remove('overflow-y');
        body.classList.add('overflow-hidden');

        this.$refs.sidemenu.classList.remove('slide-out');
        this.$refs.sidemenu.classList.add('slide-in');
        this.$refs.backdrop.classList.remove('backdrop-off');
        this.$refs.backdrop.classList.add('backdrop-on');
        console.log('a');
      });
    });

    this.$nuxt.$on('close-sidemenu', () => {
      this.$nextTick(() => {
        const body = document.querySelector('body')
        body.classList.add('overflow-y');
        body.classList.remove('overflow-hidden');
        console.log('CLOSE');
        this.$refs.sidemenu.classList.remove('slide-in');
        this.$refs.sidemenu.classList.add('slide-out')
        this.$refs.backdrop.classList.remove('backdrop-on');
        this.$refs.backdrop.classList.add('backdrop-off');

      });
    })
  },

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.close-button {
  position: absolute;
  top: calc(50vh - 30px);
  left: -20px;
  border: 0;
  background: transparent;
  font-size: 30px;
  color: $primary;
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
