<template>
  <div>
    <Header/>
    <Nuxt/>
    <Footer/>
    <Copyright/>
    <SideNav/>
    <CookieControl locale="en"/>
    <BackToTop/>

  </div>
</template>

<script>


import Copyright from "../components/Copyright";
import BackToTop from "../components/BackToTop";
import ogImage from '../assets/images/slider-01.jpg';


export default {
  components: {BackToTop, Copyright},
  head() {


    return {
      title: 'Wedding Deejay - Professional Djs for your Event',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Wedding Deejay have over 20 years of experience DJ’ing in the wedding and events industry. Choose from the best DJs in the wedding scene.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'weddings, event, deejays, party, amalfi coast, dinner, aperitif, after dinner, silent disco, club, music, animation'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogImage
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
      document.querySelector('body').classList.add('overflow-y')


    });
  }
}
</script>

<style scoped>

</style>
