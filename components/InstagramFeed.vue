<template>
      <div class="row mt-5 fade-up">
        <div class="col-md-4 mt-4" v-for="item in items">
          <a :href="item.link" target="_blank">
            <div class="instagram-image" v-bind:style="{ 'background-image': 'url(' + item.image + ')' }"></div>
          </a>
        </div>
      </div>
</template>

<script>
  export default {
    name: "InstagramFeed",
    data() {
      return {
        items: [],
      }
    },
    mounted() {
      this.getInstagramFeed();

    },
    methods: {
      async getInstagramFeed() {
        const res = await fetch('https://php.localidautore.it/rapidinsta/index.php?account=12352344190&count=9');
        this.items = await res.json();
        console.log(this.items);
      },
    }
  }
</script>

<style scoped>

</style>
