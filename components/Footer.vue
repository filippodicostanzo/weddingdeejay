<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <Logo/>
          <p>Wedding Deejay have over 20 years of experience DJ’ing in the wedding and events industry. Choose from the best DJs in the wedding scene.</p>
        </div>
        <div class="col-lg-3 col-md-6 pt-3  pt-lg-0">
          <h3>Sitemap</h3>
          <ul class="sitemap-list">
            <li>
              <font-awesome-icon :icon="['fas', 'forward']"/>
              <nuxt-link to="/services" tag="a">Services</nuxt-link>
            </li>
            <li>
              <font-awesome-icon :icon="['fas', 'forward']"/>
              <nuxt-link to="/artists" tag="a">Artists</nuxt-link>
            </li>
            <li>
              <font-awesome-icon :icon="['fas', 'forward']"/>
              <nuxt-link to="/packages" tag="a">Packages</nuxt-link>
            </li>
            <li>
              <font-awesome-icon :icon="['fas', 'forward']"/>
              <nuxt-link to="/playlists" tag="a">Playlists</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 pt-3 pt-lg-0">
          <h3>Contact Info</h3>
          <ul class="contacts-list">
            <li>
              <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
              <nuxt-link to="contacts" tag="a">Amalfi Coast</nuxt-link>
            </li>
            <li>
              <font-awesome-icon :icon="['fas', 'phone']"/>
              <a href="tel:00393114042263">+39 331 40 42263</a>
            </li>
            <li>
              <font-awesome-icon :icon="['fab', 'whatsapp']"/>
              <a href="https://wa.me/393314042263?text=Send%20Message%20to%20Start%20the%20Chat" target="_blank">
                +39 331 40 42263
              </a>
            </li>
            <li>
              <font-awesome-icon :icon="['fas', 'envelope']"/>
              <a href="mailto:info@weddingdeejayamalficoast.com">Email</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 pt-3 pt-lg-0"><h3>Social</h3>
          <ul class="social-list">
            <li>
              <img :src="require('assets/icons/instagram.png')" class="image-filter" width="30">
              <a :href="$config.linkInstagram" target="_blank">
                @weddingdeejay
              </a>
            </li>
            <li>
              <img :src="require('assets/icons/facebook.png')" class="image-filter" width="30">
              <a :href="$config.linkFacebook" target="_blank">
                / weddingdeejay
              </a>
            </li>
            <li>
              <img :src="require('assets/icons/vimeo.png')" class="image-filter" width="30">
              <a :href="$config.linkVimeo" target="_blank">
                / weddingdeejay
              </a>
            </li>
            <li>
              <img :src="require('assets/icons/tiktok.png')" class="image-filter" width="30">
              <a :href="$config.linkTikTok" target="_blank">
                @weddingdeejay
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer.vue"
}
</script>

<style scoped>

</style>
