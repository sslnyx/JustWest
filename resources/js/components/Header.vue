<template>
  <header>
    <div class="main-menu" v-if="show">
      <ul>
        <li v-for="(item, i) in menuItems" :key="i" @click="show = !show">
          <a :href="item.url" v-smooth-scroll="{ duration: 1000, offset: -118 }">{{item.name}}</a>
        </li>
        <li class="mt-5">
          <div class="address text-center">
            <h6><strong>PRESENTATION CENTRE</strong></h6>
            <p>
              479 West 16th Ave, Vancouver
              <br />By appointment
              <br />604.734.8883
              <br />
              <a href="mailto:info@justwest.ca">info@justwest.ca</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <nav
      class="d-flex justify-content-between flex-wrap flex-md-nowrap p-0 p-md-3"
      v-scroll="handleScroll"
    >
      <div class="hamburger-wrapper d-flex justify-content-between">
        <div class="site-logo-wrapper">
          <img
            ref="sitelogo"
            class="site-logo"
            src="img/full/icon/00_logo_header_bw.svg"
            alt="site logo"
            :class="{'inactive' : color}"
          />
          <img
            ref="colorlogo"
            class="site-logo site-logo-color"
            src="img/full/icon/00_logo_header_color.svg"
            alt="site logo"
            :class="{'active' : show || color}"
          />
        </div>
        <div
          class="hamburger hamburger--squeeze d-flex"
          :class="{'is-active' : show}"
          @click="show = !show"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <div class="btn btn-primary">Register Now</div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      color: false,
      // reached: true
      menuItems: {
        1: {
          name: "ABOUT JUST WEST",
          url: "#overview"
        },
        2: {
          name: "NEIGHBOURHOOD",
          url: "#location"
        },
        3: {
          name: "INTERIORS",
          url: "#interior"
        },
        4: {
          name: "FLOORPLANS",
          url: "#floorplans"
        },
        5: {
          name: "GALLERY",
          url: "#gallery-slides"
        },
        6: {
          name: "DEVELOPER",
          url: "#developer"
        }
      }
    };
  },
  methods: {
    active(e) {
      e.target.classList.toggle("is-active");
      this.show = !this.show;
      if (this.show) {
        this.$refs.colorlogo.classList.add("active");
      } else if (window.scrollY < window.innerHeight - 40) {
        this.$refs.colorlogo.classList.remove("active");
      }
    },
    handleScroll: function(evt, el) {
      if (window.scrollY > window.innerHeight - 40) {
        this.color = true;
      } else {
        this.color = false;
      }
    }
  }
};
</script>

<style>
</style>