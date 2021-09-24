<template>
  <div>
    <Slider/>
    <HomeServices/>
    <HomeAbout/>
    <HomeArtists :data="artists"/>
    <HomePackages :data="packages"/>
    <HomeVideos :data="videos"/>
    <HomeLocations :data="locations"/>
    <HomeSocial/>
    <HomePlaylists :data="playlists"/>
  </div>
</template>

<script>

import getData from '@/mixins/fetchData';

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
      this.artists = result;
    });

    getData.getServices().then((result) => {
      this.services = result;
    })

    getData.getLocations().then((result) => {
      this.locations = result;
    });

    getData.getPackages().then((result) => {
      this.packages = result;
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
