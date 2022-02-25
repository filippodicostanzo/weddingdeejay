<template>
  <div>
    <div class="close-icon"  @click="$emit('close')">
      <font-awesome-icon :icon="['fas', 'times']"/>
    </div>
    <div v-if="source==='deejay'">
      <div class="p-5 modal-deejay">
        <img :src="item.cover.url">
        <h2>{{ item.name }}</h2>
        <div v-html="item.biography"></div>
      </div>
    </div>

    <div v-if="source==='package'">
      <div class="p-5 modal-package">
        <img :src="item.cover.url">
        <h2>{{ item.name }}</h2>
        <div v-html="item.details"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ModalQuote.vue",
  props: ['item', 'source']
}
</script>

<style lang="scss">
@import "assets/scss/variables";

.close-icon{
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 2rem;
  color: $primary;
}

.modal-deejay {
  text-align: center;

  img {
    height: 400px;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
    @media #{$xs} {
      height: 250px;
    }
  }

  h2 {
    padding-top: 2rem;
    text-align: center;
    padding-bottom: 1rem;
  }

  p {
    font-weight: 300;
    text-align: justify;
  }
}


.modal-package {
  text-align: center;

  img {
    height: 400px;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
    @media #{$xs} {
      height: 250px;
    }

  }

  p {
    text-align: center;
  }

  span {
    font-weight: 900;
    color: $primary;
  }

  h2 {
    padding-top: 2rem;
    text-align: center;
    padding-bottom: 1rem;
  }

  ul {
    padding: 0;
    list-style: none;

    li {
      font-family: $Montserrat;
      font-weight: 300;
      padding: 5px 0;
      text-align: center;


    }
  }
}
</style>
