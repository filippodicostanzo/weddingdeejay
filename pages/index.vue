<template>
  <div>
    <Slider/>
    <HomeServices :data="services"/>
    <HomeAbout/>
    <HomeArtists :data="artists"/>
    <HomePackages :data="packages"/>
    <HomeVideos :data="videos"/>
    <HomeLocations :data="locations"/>
    <HomeSocial/>
    <HomePlaylists :data="playlists"/>
    <HomeContacts/>
  </div>
</template>

<script>

import getData from '@/mixins/fetchData';
import _ from "lodash"

export default {
  mixins: [getData],
  data() {
    return {
      data: [],
      artists: [],
      services: [],
      locations: [],
      packages: [],
      playlists: [],
      videos: [],
    }
  },
  mounted() {
    getData.getArtists().then((result) => {
      this.artists = _.orderBy(result, ['order'],['asc']);
    });

    getData.getServices().then((result) => {
      this.services = _.orderBy(result, ['order'],['asc']);
    })

    getData.getLocations().then((result) => {
      this.locations = result;
    });

    getData.getPackages().then((result) => {
      this.packages = _.orderBy(result, ['order'],['asc']);
    });

    getData.getPlaylists().then((result) => {
      this.playlists = result;
    });

    getData.getVideos().then((result) => {
      this.videos = [...result.data.slice(0,6)];
    })

  }

}
</script>
