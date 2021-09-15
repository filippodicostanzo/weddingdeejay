<template>
  <div>
   <span class="close-btn" @click="$emit('close')">&times;</span>

    <video autoplay="1" controls="0" loop="1"
           muted="1" style="max-width:100%;" preload="auto">
      <source type="video/mp4" src="">
    </video>



  </div>

</template>

<script>

    export default {

        name: "ModalVideo",

        props: ['item'],
        data() {
            return {}
        },

    }
</script>

<style scoped>
  img {
    max-width: 100%;
  }

  .close-btn {
    font-size: 50px;
    color: #000;
    line-height: 25px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9;
    display: block;
    cursor: pointer;
  }

</style>
