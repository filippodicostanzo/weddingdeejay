<template>
  <div>
    <Slider/>
    <HomeServices/>
    <HomeAbout/>
    <HomeArtists :data="artists"/>
    <HomePackages :data="packages"/>
    <HomeVideos/>
    <HomeLocations :data="locations"/>
    <HomeSocial/>
    <HomePlaylists/>
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
    }
  },
  mounted() {
    getData.getArtists().then((result) => {
      this.artists = result;
    });

    getData.getServices().then((result) => {
      this.services = result;
    })

    getData.getLocations().then((result)=>{
      this.locations = result;
    });

    getData.getPackages().then((result)=>{
      this.packages = result;
    });


  }

}
</script>
