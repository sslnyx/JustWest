require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
import App from "./layout/App.vue";
import BootstrapVue from "bootstrap-vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

// require styles
import "swiper/dist/css/swiper.css";

import { VueReCaptcha } from "vue-recaptcha-v3";
import VueAnime from "vue-animejs";

Vue.use(VueAnime);

// For more options see below
// console.log(recapKey)
Vue.use(VueReCaptcha, { siteKey: "6LcMl8QUAAAAAOp3sqIC6mEZPmZZl_1iFd-iC2UK" });

var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);

Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});

// import VueRellax from 'vue-rellax'

// Vue.use(VueRellax)

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.use(BootstrapVue);

import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, { attempt: 1 });

// import vueSmoothScroll from "vue2-smooth-scroll";
// Vue.use(vueSmoothScroll);

Vue.use(VueRouter);

// import VueCarousel from 'vue-carousel';

// Vue.use(VueCarousel);

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import routes from "./routes";
const router = new VueRouter({
  routes,
  mode: "history",

  scrollBehavior(to, from, savedPosition) {

      return { x: 0, y: 0 };
    }
  
});

Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});

Vue.directive("map-scroll", {
  inserted: function(el, binding) {
    let mf = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("map-scroll", mf);
      }
    };
    window.addEventListener("map-scroll", mf);
  }
});

/* eslint-disable no-new */
new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
