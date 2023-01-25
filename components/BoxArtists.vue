<template>
  <div>
    <div class="image-layer"
         :style="{'background-image': 'url(' + item.cover.url + ')'}">
    </div>
    <div class="box-container">
      <h2 class="text-center">{{ item.name }}</h2>
      <div class="category">
        <span>{{ item.category.name }}</span>
      </div>


      <div class="social">
        <ul>
          <li><a :href="item.social.facebook" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook-f']"/>
          </a></li>
          <li><a :href="item.social.instagram" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']"/>
          </a></li>
          <li><a :href="item.social.youtube" target="_blank">
            <font-awesome-icon :icon="['fab', 'youtube']"/>
          </a></li>
          <li><a :href="item.contacts.website" target="_blank">
            <font-awesome-icon :icon="['fab', 'chrome']"/>
          </a></li>
        </ul>
      </div>


      <div :inner-html.prop="item.biography | truncate(120)" class="biography"></div>
      <span class="ltx-btn-wrap">
            <nuxt-link :to="`artists/${item.identifier}`" class="btn btn-xs">Read more</nuxt-link>
          </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxArtists",
  props:['item']
}
</script>

<style lang="scss" scoped>

@import 'assets/scss/variables';

.image-layer {
  height: 350px;
  background-size: cover;
  background-position: center;
}

.box-container {
  padding: 50px 50px 70px;
  text-align: center;
  background: $white;

  h2 {
    font-weight: 900;
  }

  p {
    font-weight: 300;
  }

  .biography {
    font-size: 0.8rem;
  }

  .category {
    padding-top: 20px;

    span {
      background-color: $primary;
      padding: 5px;
      border-radius: 50px;
      color: $white;
      font-size: 12px;
    }
  }

  .social {
    padding-top: 20px;

    ul {
      list-style: none;
      padding: 0;

      li {
        display: inline-block;
        margin: 0 5px;

        a {
          color: $third;
        }
      }
    }
  }

  .btn {
    font-size: 12px;
    padding: 7px 30px;
    line-height: 1.6em;
    min-width: 125px;
    background-color: $primary;
    color: $white;
    border-radius: 50px;
  }
}

</style>
