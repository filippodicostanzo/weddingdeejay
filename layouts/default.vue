<template>
  <div>
    <Header/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>


export default {

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
      document.querySelector('body').classList.add('overflow-y');
    });
  }
}
</script>

<style scoped>

</style>
