<template>
  <nav class="primary">
    <ul class="main-menu" v-if="!mobile">
      <li v-for="item in mainmenu" :key="item.slug">
        <nuxt-link tag="a" :to="'/'+item.slug" exact>{{ item.name }}</nuxt-link>
      </li>
    </ul>

    <ul class="main-menu" v-if="mobile">
      <li v-for="item in mainmenu" :key="item.slug">
        <nuxt-link tag="a" :to="'/'+item.slug"   exact><span @click="$nuxt.$emit('close-sidemenu')">{{ item.name }}</span></nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import main_menu from '~/static/data/menu.json';

export default {
  name: "MainMenu",
  props: ['mobile'],
  data() {
    return {
      mainmenu: [],
    }
  },
  fetch() {
    this.mainmenu = main_menu.menu;
  },
}
</script>

<style scoped>

</style>
