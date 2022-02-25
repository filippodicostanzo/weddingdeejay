<template>
  <div class="page-private">
    <Title title="Private" image="header-playlists"/>
    <div class="container pt-5 pb-5">
      <div class="row">
        <div class="col-12">
          <p class="text-center">
            To access this page enter the credentials provided
          </p>
        </div>
        <div class="col-12 col-md-4 offset-md-4">
          <input type="password" placeholder="Password" v-model="pwd">
        </div>
        <div class="col-12 col-md-4 offset-md-4">
          <div class="form-container">
            <div class="text-center button-container">
              <button class="btn btn-primary" @click.prevent="submit()">Access</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-3">
        <div class="col-12">
          <div class="alert-danger text-center p-2" v-if="error"><p>Wrong Password</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index.vue",
  data() {
    return {
      pwd: '',
      currentYear: new Date().getFullYear(),
      error: false
    }
  },
  methods: {
    submit() {
      if (this.pwd === 'weddingdeejay' + this.currentYear) {
        console.log('access');
        this.$router.push({
          name: 'private-songs',
          params: {access: 'true'},

        });
      } else {
        this.error = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

@import 'assets/scss/_variables.scss';

input {
  width: 100%;
  background: transparent;
  border: 0;
  border-bottom: 1px $black solid;
  text-align: center;
  font-family: $Montserrat;

  &:focus-visible {
    outline: none;
  }

}

</style>
