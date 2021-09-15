<template>
  <div>
    <Slider/>
    <HomeServices/>
    <HomeAbout/>
    <HomeArtists/>
    <HomePackages :data="packages"/>
    <HomeVideos/>
    <HomeLocations :data="locations"/>
    <HomeSocial/>
  </div>
</template>

<script>

import getData from '@/mixins/fetchData';

export default {
  mixins: [getData],
  data() {
    return {
      data: [],
      deejays: [],
      services: [],
      locations: [],
      packages: [],
    }
  },
  mounted() {
    getData.getDeejays().then((result) => {
      this.deejays = result;
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
