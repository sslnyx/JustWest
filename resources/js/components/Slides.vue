<template>
  <swiper :options="swiperOption" ref="gallery">
    <!-- slides -->
    <swiper-slide v-for="i in 46" :key="i">
      <img :src="`img/full/gallery/gallery(${i}).jpg`" :alt="i" />
    </swiper-slide>
    <!-- Optional controls -->
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        centeredSlides: true,
        // spaceBetween: 30,
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        // effect: "fade",
        // speed: 1000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.gallery.swiper;
    }
  },
  methods: {
  },
  mounted() {
    this.swiper.slideTo(1, null, null);
  }
};
</script>

<style>
</style>