<template>
  <nav class="primary">
    <ul class="main-menu">
      <li v-for="item in mainmenu" :key="item.slug">
        <nuxt-link tag="a" :to="'/'+item.slug" exact>{{item.name}}</nuxt-link>
      </li>


    </ul>
  </nav>
</template>

<script>
    import main_menu from '~/static/data/menu.json';

    export default {
        name: "MainMenu",
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
