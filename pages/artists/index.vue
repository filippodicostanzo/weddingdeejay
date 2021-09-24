<template>
  <page class="artists">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="button-group">
            <button v-for="(val, key) in option.getFilterData" class="button"
                    :class="[key===filterOption? 'is-checked' : '']" @click="filter(key)">{{ key }}
            </button>
          </div>
        </div>
        <div class="col-lg-12">
          <isotope ref="cpt" id="root_isotope1" :item-selector="'element-item'" :list="artists" :options='option'
                   @filter="filterOption=arguments[0]" @sort="sortOption=arguments[0]"
                   @layout="currentLayout=arguments[0]">
            <div v-for="(element, index) in artists" :class='[element.category.identifier]' :key="index"
                 class="col-md-4">
              <h3 class="name">{{ element.name }}</h3>
            </div>
          </isotope>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import getData from "@/mixins/fetchData";


export default {
  name: "index.vue",
  data() {
    return {
      artists: [],
      filterOption: "Show All",
      option: {
        itemSelector: ".element-item",
        getFilterData: {
          "Show All": function () {
            return true;
          },
          /*
          metal: function (el) {
             return !!el.metal;
           },
           */
          "Deejays": function (el) {
            return el.category.identifier === "deejay";
          },
          "Saxophonists": function (el) {
            return el.category.identifier === "saxophonist";
          },

        },
      }
    }
  },

  mounted() {
    getData.getArtists().then((result) => {
      this.artists = result;
    });
  },
  methods: {
    filter: function (key) {
      this.$refs.cpt.filter(key);
    },
  }
}
</script>

<style scoped>

</style>
