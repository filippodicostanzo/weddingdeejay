<template>
  <div class="page-artists">
    <Title title="Artists" image="header-artists"/>
    <div class="container pt-5 pb-5">
      <div class="row">
        <div class="col-12">
          <div class="button-group pb-5">
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
                 class="col-lg-4 col-md-6 col-12 mb-5">
             <BoxArtists :item="element" />
            </div>
          </isotope>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getData from "@/mixins/fetchData";
import Title from "../../components/Title";
import BoxArtists from "../../components/BoxArtists";
import _ from "lodash";


export default {
  name: "index.vue",
  components: {BoxArtists, Title},
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
      this.artists = _.orderBy(result, ['order'],['asc']);
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
