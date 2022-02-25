<template>
  <div>
    <transition name="fade">
      <a v-scroll-to="'#top'" id="toTop" class="btn-back-top v-fade" href="#" v-show="this.scroll"
         v-on:click="removeFixed()"> <i
        class="ps pe-7s-angle-up"></i></a>
    </transition>
  </div>

</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {
      scroll: false
    }
  },
  methods: {
    handleScroll() {
      let scrollAmount = document.documentElement.scrollTop
      if (scrollAmount >= 150) {
        this.scroll = true
      } else {
        this.scroll = false;
      }


      document.getElementById('toTop').style.bottom = '0px';


    },
    removeFixed() {
      let navbar = document.getElementById("nav");
      //navbar.classList.remove("fixed-top");
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/_variables.scss';
a {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 28px;
  text-align: center;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 45px 28.3px 45px;
  border-color: transparent transparent $primary;
  color: #fff !important;
  cursor: pointer;
  z-index: 999;
  -webkit-transition: all .2s linear;
  -moz-transition: all .2s linear;
  transition: all .2s linear;
}

.v-fade {
  display: inherit !important; /* override v-show display: none */
  transition: opacity 0.5s;
}

.v-fade[style*="display: none;"] {
  opacity: 0;
  pointer-events: none; /* disable user interaction */
  user-select: none; /* disable user selection */
}
</style>
