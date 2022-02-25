<template>
  <div class="footer-copyright text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <a class="cursor-pointer" @click="show('privacy')">Privacy Policy</a> -
          <a class="cursor-pointer" @click="show('cookie')">Cookie Policy</a>
        </div>
        <div class="col-md-4">

        </div>

        <div class="col-md-4">
          <p>P. IVA 05523080652</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalPrivacy from "./ModalPrivacy";

export default {
  name: "Copyright",
  methods: {
    show(source) {
      this.$modal.show(ModalPrivacy, {source: source}, {scrollable: true, height: "auto", width: "90%"});
    }

  }
}
</script>

<style scoped>

</style>
