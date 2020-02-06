<template>
  <main id="register" class="page-register">
    <regHeader :checkWidth="checkWidth" />
    <div class="swiper d-none d-md-block">
      <router-link to="/">
        <img class="site-logo" src="img/landing/00_logo.svg" alt="logo" style="cursor:pointer;" />
      </router-link>
      <transition name="fade">
        <div
          class="btn btn-primary btn-reg"
          ref="sipwerRegBtn"
          @click="toRegister"
          v-if="activeSlide"
        >register now</div>
      </transition>

      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img :src="slide.image" alt />

          <div class="slide-content">
            <h1 v-html="slide.title"></h1>
            <p>{{slide.content}}</p>
            <div class="btn btn-primary" @click="toRegister">register now</div>
          </div>
        </swiper-slide>

        <swiper-slide class="swiper-no-swiping">
          <!-- <div class="reg-form">register</div> -->
          <RegisterFrom />
        </swiper-slide>

        <!-- Optional controls -->
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->

        <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      </swiper>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>

    <div class="mobile-layout d-block d-md-none" ref="mContent">
      <p
        class="d-block d-md-none text-white w-100 p-3 text-center"
        style="position: absolute;text-shadow: 2px 2px 3px #000;"
      >
        1, 2 &amp; 3 bedroom contemporary
        <br />townhomes &amp; garden suites
      </p>
      <transition name="fade">
        <div
          class="btn btn-primary btn-reg"
          v-if="showBtn"
          v-scroll-to="'.form-anchor'"
          :class="{stick : stick}"
        >register now</div>
      </transition>

      <section v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" alt />
        <div class="text-content w-100 d-flex flex-column justify-content-center">
          <h1 v-html="slide.title"></h1>
          <p>{{slide.content}}</p>
        </div>
      </section>
      <div class="form-anchor p-3 pt-5" ref="formsec" v-scroll="handleScroll">
        <RegisterFrom />
      </div>
    </div>

    <regFooter />
  </main>
</template>

<script>
import RegisterFrom from "../components/RegisterForm";
import regFooter from "../components/RegisterFooter";
import regHeader from "../components/RegisterHeader";

export default {
  data() {
    return {
      stick: false,
      isActive: false,
      showBtn: true,
      activeSlide: true,
      window: {
        width: 0,
        height: 0
      },
      // activeSwiper: "",
      slides: {
        1: {
          title: "One iconic location, <span>Endless Possibilities</span>",
          content:
            "Situated in one of Vancouver's most sought-after neighbourhoods is Just West; a brand-new community of 1, 2 & 3 bedroom townhomes and garden suites designed with modern livability in mind.",
          image: "img/landing/01.jpg"
        },
        2: {
          title: "HOME IS JUST THE <span>BEGINNING</span>",
          content:
            "From this convenient West King Edward address, the possibilities are endless with the lively thoroughfare of the Cambie Corridor to the west and trend-setting Main Street to the east. And only 3-blocks away from the Canada Line, you can be downtown or at YVR airport in no time flat.",
          image: "img/landing/02.jpg"
        },
        3: {
          title: "LIFE IN <br /><span>BALANCE</span>",
          content:
            "When you need to relax and unwind, find refuge at one of the many nearby green spaces like the expansive Queen Elizabeth Park or recreation hubs like Hillcrest Community Centre. No matter what your passions are, this complete community offers a perfect balance for all of life's endeavours.",
          image: "img/landing/03.jpg"
        },
        4: {
          title: "HIGH DESIGN <br /><span>MODERN LIVING</span>",
          content:
            "Defined by striking architectural lines and a contemporary aesthetic, Just West beautifully complements this iconic west-side setting. Inside, these versatile family homes feature open floor plans and fresh, modern finishes to create a private oasis that's just yours.",
          image: "img/landing/04.jpg"
        }
      },
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        effect: "fade",
        speed: 1000,
        noSwiping: true,
        mousewheel: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    RegisterFrom,
    regFooter,
    regHeader
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    checkWidth() {
      return this.window.width < 768 ? true : false;
    },
    toFormM() {}
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if (
        this.window.width <= 768 &&
        document.querySelector(".grecaptcha-badge")
      )
        document.querySelector(".grecaptcha-badge").style.visibility = "hidden";
    },
    toRegister() {
      if (this.$refs.mySwiper) this.swiper.slideTo(4, 1000, false);
    },
    firstSlide() {
      if (this.$refs.mySwiper) this.swiper.slideTo(0, 1000, false);
    },
    handleScroll(evt, el) {
      if (this.$refs.formsec) {
        this.showBtn =
          window.scrollY >
          this.$refs.formsec.offsetTop - this.window.height / 10
            ? false
            : true;
        // console.log(this.swiper.activeIndex);
        // if (
        //   this.window.width <= 768 &&
        //   document.querySelector(".grecaptcha-badge")
        // )
        //   // if (this.window.width <= 768 && this.$refs.formsec.offsetTop != 0)
        //   document.querySelector(".grecaptcha-badge").style.visibility =
        //     (window.scrollY > this.$refs.formsec.offsetTop &&
        //       this.$refs.formsec.offsetTop != 0 &&
        //       this.window.width <= 768) ||
        //     (this.swiper.activeIndex == 4 && this.window.width >= 768)
        //       ? "visible"
        //       : "hidden";
      }

      if (this.$refs.mContent)
        this.stick =
          window.scrollY > this.$refs.mContent.offsetTop + 75 ? true : false;
    },
    toForm() {
      console.log("toForm");
    }
  },
  mounted() {
    this.swiper.on("slideChange", el => {
      this.activeSlide = [0, 1, 2].includes(this.swiper.activeIndex);
      document.querySelector(".grecaptcha-badge").style.visibility =
        this.swiper.activeIndex == 4 ? "visible" : "hidden";
    });
    // console.log(window.location);
    if (window.location.hash && this.window.width > 768) {
      this.toRegister();
    }
    if (window.location.hash && this.$refs.formsec && this.window.width < 768) {
      window.addEventListener("load", () => {
        this.$refs.formsec.scrollIntoView({ behavior: "smooth" });
      });
    }
    setTimeout(() => {
      this.$refs.formsec.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  },
  updated() {},
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
    document.querySelector(".grecaptcha-badge").style.visibility = "hidden";
    this.swiper.destroy(false);
  }
};
</script>

<style>
</style>