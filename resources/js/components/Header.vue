<template>
  <nav class="d-flex justify-content-between flex-wrap flex-md-nowrap p-0 p-md-3" v-scroll="handleScroll">
    <div class="hamburger-wrapper d-flex justify-content-between">
      <div class="site-logo-wrapper">
        <img
          ref="sitelogo"
          class="site-logo"
          src="img/full/icon/00_logo_header_bw.svg"
          alt="site logo"
        />
        <img
          ref="colorlogo"
          class="site-logo site-logo-color"
          src="img/full/icon/00_logo_header_color.svg"
          alt="site logo"
        />
      </div>
      <div class="hamburger hamburger--squeeze d-flex" @click="active">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </div>
    </div>

    <div class="d-flex align-items-center">
      <div class="btn btn-primary">Register Now</div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // reached: true
    };
  },
  methods: {
    active(e) {
      e.target.classList.toggle("is-active");
    },
    handleScroll: function(evt, el) {
      if (window.scrollY > window.innerHeight - 40) {
        this.$refs.colorlogo.classList.add("active");
        this.$refs.sitelogo.classList.add("inactive");
      } else {
        this.$refs.colorlogo.classList.remove("active");
        this.$refs.sitelogo.classList.remove("inactive");
      }
    }
  }
};
</script>

<style>
</style>