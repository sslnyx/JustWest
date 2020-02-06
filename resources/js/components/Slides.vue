<template>
  <swiper :options="swiperOption" ref="gallery">
    <div style="position:absolute; top:50px"></div>
    <swiper-slide>
      <img src="img/full/gallery/gallery(1).jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="img/full/gallery/gallery(2).jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="img/full/gallery/gallery(3).jpg" alt />
    </swiper-slide>

    <swiper-slide v-for="i in 43" :key="i" :class="`img-${i}`">
      <img
        class="swiper-lazy"
        v-lazy="`img/full/gallery/gallery(${i+3}).jpg`"
        :alt="i"
        ref="imgel"
      />
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
  <!-- <div>

    <carousel :per-page="1" :mouse-drag="true" ref="carousel">
      <slide>
        <img src="img/full/gallery/gallery(1).jpg" :alt="1" />
      </slide>
      <slide>
        <img src="img/full/gallery/gallery(2).jpg" :alt="2" />
      </slide>
      <slide>
        <img src="img/full/gallery/gallery(3).jpg" :alt="3" />
      </slide>
      <slide v-for="i in 46" :key="i+3">
      <img v-lazy="`img/full/gallery/gallery(${i+3}).jpg`" :alt="i" />
      </slide>
    </carousel>
  </div> -->
</template>

<script>
// import { Carousel, Slide } from "vue-carousel";

export default {
  data() {
    return {
      swiperOption: {
        // watchSlidesProgress: true,
        // watchSlidesVisibility: true,
        // preloadImages: false,

        slidesPerView: "auto",
        centeredSlides: true,
        // spaceBetween: 30,
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        // effect: "fade",
        // speed: 1000,
        // watchSlidesProgress : true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  // components: {
  //   Carousel,
  //   Slide
  // },
  computed: {
    swiper() {
      return this.$refs.gallery.swiper;
    }
  },
  methods: {},
  mounted() {
    this.swiper.slideTo(1, null, null);
    // this.swiper.lazy.load();
    // this.$refs.carousel.navigateTo(1)
  },
  updated() {}
};
</script>

<style scoped>
/* .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #444!important;
  }
  .swiper-slide img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  } */
</style>