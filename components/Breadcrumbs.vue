<template>
  <div class="breadcrumb-container">
    <ol class="breadcrumb">
      <li class="item">
        <nuxt-link to="/" class="title">
          Home
        </nuxt-link>
      </li>
      <li v-for="item in crumbs">
        <span>&nbsp; /</span>
        <nuxt-link :to="item.to">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
import * as _ from 'lodash';

export default {
  name: "Breadcrumbs.vue",
  props: ['title'],
  computed: {

    crumbs() {



      const path = this.$route.path.replace(/\/$/, '');
      const pathArray = path.split('/')
      pathArray.shift()

      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {

        breadcrumbArray.push({
          to: breadcrumbArray[idx - 1]
            ? '/' + pathArray[idx - 1] + '/' + path
            : '/' + path,
          title: idx + 1 !== pathArray.length ? _.startCase(path) : this.title,
          index: idx
        })

        console.log(breadcrumbArray);
        return breadcrumbArray
      }, [])

      return breadcrumbs
    }

  }
}
</script>

<style scoped>

</style>
