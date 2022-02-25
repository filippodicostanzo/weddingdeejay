<template>
  <section class="about pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="subtitle">How we</h4>
          <h2 class="heading">Work</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <ul
            class="ltx-block-icon  has-descr  icons-count-3 align-left ltx-icon-color-main ltx-icon-size-default ltx-header-color-black ltx-icon-type-circle ltx-bg-color-transparent layout-cols1 ltx-icon-ht-right "
            id="like_sc_block_icon_1206785474">
            <li>
              <div data-mh="ltx-block-icon-in-1658" class="in matchHeight" style="">
                <div>
                  <img :src="require('assets/icons/dj.png')" class="image-filter">
                </div>
                <div class="block-right"><h6 class="header"> Professional Djs</h6>
                  <div class="desc">Over 20 years of experience DJ’ing in the wedding and events industry.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div data-mh="ltx-block-icon-in-1658" class="in matchHeight" style="">
                <div>
                  <img :src="require('assets/icons/disco-ball.png')" class="image-filter">
                </div>
                <div class="block-right"><h6 class="header">Best Location</h6>
                  <div class="desc">We work in all the top hotels and venues on the Amalfi Coast and throughout Italy.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div data-mh="ltx-block-icon-in-1658" class="in matchHeight" style="">
                <div>
                  <img :src="require('assets/icons/speaker.png')" class="image-filter">
                </div>
                <div class="block-right"><h6 class="header"> Professional Equipment</h6>
                  <div class="desc">We use only top-of-the-line professional equipment; turntables, CDJ and controllers.
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-6 d-md-none d-lg-block text-center ltx-speaker">
          <div
            class="ltx-waves-wrapper wpb_column vc_column_container vc_col-sm-6 vc_col-lg-6 vc_col-md-4 vc_hidden-md vc_hidden-sm vc_hidden-xs">
            <div class="vc_column-inner">
              <div class="wpb_wrapper">
                <div class="wpb_single_image wpb_content_element vc_align_center">
                  <figure class="wpb_wrapper vc_figure">
                    <div class="vc_single_image-wrapper   vc_box_border_grey">
                      <img width="493" height="452"
                           :src="require('assets/images/about-monitors.png')"
                           class="vc_single_image-img attachment-full"
                           alt=""
                           :srcset="monitorSourceSet"
                           sizes="(max-width: 493px) 100vw, 493px">
                    </div>
                  </figure>
                </div>
                <div class="wpb_single_image wpb_content_element vc_align_center   ltx-waves">
                  <figure class="wpb_wrapper vc_figure">
                    <div class="vc_single_image-wrapper   vc_box_border_grey">
                      <img width="700" height="222"
                           :src="require('assets/images/about-waves.png')"
                           class="vc_single_image-img attachment-full"
                           alt=""
                           :srcset="this.wavesSourceSet"
                           sizes="(max-width: 700px) 100vw, 700px">
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <ul
            class="ltx-block-icon  has-descr  icons-count-3 align-left ltx-icon-color-main ltx-icon-size-default ltx-header-color-black ltx-icon-type-circle ltx-bg-color-transparent layout-cols1 ltx-icon-ht-right "
            id="like_sc_block_icon_691038514">
            <li>
              <div data-mh="ltx-block-icon-in-1334" class="in matchHeight" style="">
                <div>
                  <img :src="require('assets/icons/sax.png')" class="image-filter">
                </div>
                <div class="block-right"><h6 class="header"> With Musicians</h6>
                  <div class="desc">Enrich your DJ experience by adding in additional live musicians such as sax,
                    percussion, electric violin and vocals.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div data-mh="ltx-block-icon-in-1334" class="in matchHeight" style="">
                <div>
                  <img :src="require('assets/icons/music.png')" class="image-filter">
                </div>
                <div class="block-right"><h6 class="header"> International Repertoire</h6>
                  <div class="desc">We are experts in all types of musical repertoires and possess a vast musical knowledge.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div data-mh="ltx-block-icon-in-1334" class="in matchHeight" style="">
                <div>
                  <img :src="require('assets/icons/headphone.png')" class="image-filter">
                </div>
                <div class="block-right"><h6 class="header"> Real Support</h6>
                  <div class="desc">We offer assistance in putting together the perfect custom playlist for your event.
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About.vue",
  computed: {
    wavesSourceSet() {
      const baseName = 'about-waves'
      return `${require(`@/assets/images/${baseName}.png`)} 700w, ${require(`@/assets/images/${baseName}-300x95.png`)} 300w, ${require(`@/assets/images/${baseName}-360x114.png`)} 360w, ${require(`@/assets/images/${baseName}-600x190.png`)} 600w, ${require(`@/assets/images/${baseName}-550x174.png`)} 550w`;
    },

    monitorSourceSet() {
      const baseName = 'about-monitors'
      return `${require(`@/assets/images/${baseName}.png`)} 493w, ${require(`@/assets/images/${baseName}-300x275.png`)} 300w, ${require(`@/assets/images/${baseName}-360x330.png`)} 360w`;
    }
  }
}
</script>

<style scoped>

</style>
