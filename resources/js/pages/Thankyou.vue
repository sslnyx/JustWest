<template>
  <main class="page-register d-flex flex-column">
    <regHeader :checkWidth="checkWidth" />
    <div class="swiper d-flex align-items-center" style="flex:1;background:white">
      <router-link :to="'/'">
        <img
          class="site-logo d-none d-md-block"
          src="img/landing/00_logo.svg"
          alt="logo"
          style="cursor:pointer;"
        />
      </router-link>
      <div class="d-flex justify-content-center align-items-center h-100 w-100">
        <div class="thank-you-box">
          <h1 class="text-uppercase" style="letter-spacing:10px">
            <span style="font-weight:bold;">thank</span> you.
          </h1>
          <p>Thank you for your interest in Just West. As a registrant, you will be among the first to receive the latest news and updates on the project as they become available.</p>
        </div>
      </div>
    </div>

    <regFooter />
  </main>
</template>

<script>
import regFooter from "../components/RegisterFooter";
import regHeader from "../components/RegisterHeader";

export default {
  data() {
    return {
      window: {
        width: 0,
        height: 0
      }
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  computed: {
    checkWidth() {
      return this.window.width < 768 ? true : false;
    }
  },
  components: {
    regHeader,
    regFooter
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  mounted() {
    // console.log(this.checkWidth);
  }
};
</script>

<style>
</style>