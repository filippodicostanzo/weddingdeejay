<template>
  <div class="header" id="top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-3 col-md-12 col-sm-12 col-12">
          <Logo/>
        </div>
        <div class="col-lg-9 hidden-mobile">
          <MainMenu/>
        </div>
        <div class="hidden-desktop mobile-menu">
          <div class="mobile-button">
            <font-awesome-icon :icon="['fas', 'bars']" @click="$nuxt.$emit('open-sidemenu')"/>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header.vue"
}
</script>

<style scoped>

</style>
