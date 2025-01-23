<template>
  <button
      :class="`fixed bottom-20 right-5 p-2 bg-primary w-[40px] h-[40px] z-10 text-white rounded-full shadow-md hover:bg-secondary transition-opacity text-center duration-300 ${showButton ? 'opacity-100' : 'opacity-0'}`"
      @click="scrollToTop"
  >

    <font-awesome-icon :icon="['fas', 'arrow-up']" class="text-[1.5rem]"/>
  </button>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      this.showButton = window.scrollY > 100; // Mostra il pulsante dopo uno scrolling di 100 pixel
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
