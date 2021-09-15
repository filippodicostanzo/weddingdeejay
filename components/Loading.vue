<template>
  <div :class="[finishanimation ? 'finish' : '', 'loading-page']">
    <img :src="require('~/assets/images/logo-loader.png')" width="200" class="animate-flicker">
  </div>
</template>

<script>
    export default {
        data: () => ({
            loading: false,
            finishanimation: false
        }),
        methods: {
            start() {
                this.loading = true
            },
            finish() {
                this.finishanimation = true;
                console.log('finish');
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/_variables.scss";

  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    /* mobile viewport bug fix */
    background: $black;
    text-align: center;
    font-size: 30px;
    font-family: sans-serif;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: -webkit-fill-available;
    overflow: hidden;
  }

  .finish {
    animation: openAnimation 1s both ease-in;
  }

  @keyframes openAnimation {
    0% {
      transform: translate(0%, 0%);
    }

    100% {
      transform: translate(0%, -100%);
    }
  }

  @keyframes flickerAnimation {
    0%   { opacity:1; }
    50%  { opacity:0; }
    100% { opacity:1; }
  }
  @-o-keyframes flickerAnimation{
    0%   { opacity:1; }
    50%  { opacity:0; }
    100% { opacity:1; }
  }
  @-moz-keyframes flickerAnimation{
    0%   { opacity:1; }
    50%  { opacity:0; }
    100% { opacity:1; }
  }
  @-webkit-keyframes flickerAnimation{
    0%   { opacity:1; }
    50%  { opacity:0; }
    100% { opacity:1; }
  }
  .animate-flicker {
    -webkit-animation: flickerAnimation 2s infinite;
    -moz-animation: flickerAnimation 2s infinite;
    -o-animation: flickerAnimation 2s infinite;
    animation: flickerAnimation 2s infinite;
  }
</style>
