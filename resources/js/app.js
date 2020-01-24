require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
import App from "./layout/App.vue";
import BootstrapVue from "bootstrap-vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

// require styles
import "swiper/dist/css/swiper.css";

import { VueReCaptcha } from "vue-recaptcha-v3";

// For more options see below
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

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.use(BootstrapVue);

Vue.use(VueRouter);

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import routes from "./routes";
const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
