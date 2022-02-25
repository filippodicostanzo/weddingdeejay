<template>

  <section class="contacts pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="subtitle">Our</h4>
          <h2 class="heading">Contacts</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 text-center">
          <h3>DIRECT CONTACTS</h3>
          <ul class="contacts-list">
            <li>
              <a href="tel:00393314042263">
                <img :src="require('assets/icons/phone.png')" class="image-filter" width="30"> +39.331.4042263
              </a>
            </li>
            <li>
              <a href="https://wa.me/393314042263?text=Send%20Message%20to%20Start%20the%20Chat" target="_blank">
                <img :src="require('assets/icons/whatsapp.png')" class="image-filter" width="30"> +39.331.4042263
              </a>
            </li>


            <li>
              <a href="mailto:info@weddingdeejayamalficoast.com">
                <img :src="require('assets/icons/email.png')" class="image-filter" width="30">
                info@weddingdeejayamalficoast.com
              </a>
            </li>

            <li>
              <a href="#">
                <img :src="require('assets/icons/globe.png')" class="image-filter" width="30">
                weddingdeejayamalficoast.com
              </a>
            </li>

          </ul>

          <ul class="social-list">
            <li>
              <a :href="$config.linkInstagram" target="_blank">
                <img :src="require('assets/icons/instagram.png')" class="image-filter" width="30">
              </a>
            </li>
            <li>
              <a :href="$config.linkFacebook" target="_blank">
                <img :src="require('assets/icons/facebook.png')" class="image-filter" width="30">
              </a>
            </li>
            <li>
              <a :href="$config.linkVimeo" target="_blank">
                <img :src="require('assets/icons/vimeo.png')" class="image-filter" width="30">
              </a>
            </li>
            <li>
              <a :href="$config.linkTikTok" target="_blank">
                <img :src="require('assets/icons/tiktok.png')" class="image-filter" width="30">
              </a>
            </li>
          </ul>


        </div>
        <div class="col-lg-6 text-center pt-5 pt-lg-0">
          <h3>CONTACT FORM</h3>
          <ContactForm/>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import ContactForm from "./ContactForm";

export default {
  name: "Contacts",
  components: {ContactForm}

}
</script>

<style scoped>

</style>
