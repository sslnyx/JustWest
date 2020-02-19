<template>
  <header>
    <transition name="fade" @enter="enter">
      <div class="main-menu" v-if="show">
        <ul>
          <li v-for="(item, i) in menuItems" :key="i" @click="show = !show">
            <a
              v-if="!isMobile"
              href
              ref="listItem"
              v-scroll-to="{el:item.url, duration: 1000, offset: item.offset }"
            >{{item.name}}</a>
            <a
              href
              v-else
              ref="listItem"
              class="mobile-link"
              v-scroll-to="{el:item.url, duration: 1000, offset: item.mOffset }"
            >{{item.name}}</a>
          </li>
          <li class="mt-5">
            <div class="address text-center" ref="address">
              <h6>
                <strong>PRESENTATION CENTRE</strong>
              </h6>
              <p>
                <a
                  href="https://www.google.com/maps/place/479+W+16th+Ave,+Vancouver,+BC+V5Y+1Z2/@49.2570625,-123.116603,17z/data=!3m1!4b1!4m5!3m4!1s0x548673e8ca51734f:0x9a7fa168050fca8f!8m2!3d49.2570625!4d-123.1144143?hl=en"
                  target="_blank"
                >479 West 16th Ave, Vancouver</a>
                Open Daily 12-5pm
                <br />(except Fridays)
                <a href="tel:604.734.8883">604.734.8883</a>
                <a href="mailto:info@justwest.ca">info@justwest.ca</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </transition>

    <nav
      class="d-flex justify-content-between flex-wrap flex-md-nowrap p-0 p-md-3"
      v-scroll="handleScroll"
    >
      <div class="hamburger-wrapper d-flex justify-content-between">
        <div class="site-logo-wrapper"  style="cursor: pointer">
          <div v-scroll-to="{el:'#intro', duration: 1000, offset: -117 }">
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
        <router-link
          :to="{path:'register#register'}"
          class="btn btn-primary"
          target="_blank"
        >Register Now</router-link>
        <!-- <router-link :to="{path:'register#reg-form'}" class="btn btn-primary d-block d-md-none">Register Now</router-link> -->
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      allset: false,
      show: false,
      color: false,
      // reached: true
      isMobile: null,
      routeToForm: true,
      section: "",
      window: {
        width: 0,
        height: 0
      },
      menuItems: {
        1: {
          name: "ABOUT JUST WEST",
          url: "#overview",
          offset: -40,
          mOffset: -40
        },
        2: {
          name: "NEIGHBOURHOOD",
          url: "#neighbourhood",
          offset: -117,
          mOffset: -80
        },
        3: {
          name: "INTERIORS",
          url: "#interior",
          offset: -117,
          mOffset: -90
        },
        4: {
          name: "FLOORPLANS",
          url: "#floorplans",
          offset: -117,
          mOffset: -80
        },
        5: {
          name: "GALLERY",
          url: "#gallery",
          offset: -117,
          mOffset: -225
        },
        6: {
          name: "DEVELOPER",
          url: "#developer",
          offset: -117,
          mOffset: -80
        }
      }
    };
  },
  created() {},
  computed: {
    // isMobile() {
    //   return window.innerWidth < 768;
    // }
    // mItems() {
    //   filter()
    //   this.menuItems
    // }
  },
  methods: {
    hash(val) {
      this.show = !this.show;
      window.location.hash = val;
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
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
      // for (let [key, value] of Object.entries(this.menuItems)) {
      //   if (window.scrollY >= value.top - 117 && value.top + value.height -117 >= window.scrollY ) {
      //     history.pushState(null,null,value.url);
      //   }
      // }
      if (this.allset) {
        document.querySelectorAll("section").forEach(el => {
          if (
            window.scrollY >= el.offsetTop - 117 &&
            el.offsetTop + el.clientHeight - 117 >= window.scrollY &&
            el.id
          ) {
            history.pushState(null, null, `#${el.id}`);

            // history.pushState(null, null, `#${el.attributes.name.value}`);
          }
        });
      }
    },
    enter() {
      if (this.show) {
        this.$anime({
          targets: this.$refs.listItem,
          translateY: [50, 0],
          easing: "easeInOutQuint",
          duration: 800,
          delay: this.$anime.stagger(100) // increase delay by 100ms for each elements.
        });
        this.$anime({
          targets: this.$refs.address,
          delay: 300,
          opacity: [0, 1],
          duration: 2000,
          easing: "easeInOutExpo"
        });
      }
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    // this.show = !this.show;

    for (let [key, value] of Object.entries(this.menuItems)) {
      // console.log(`${key}: ${value}`);
      document.querySelectorAll("section").forEach(el => {
        if (`#${el.id}` == value.url) {
          value.top = el.offsetTop;
          value.height = el.clientHeight;
        }
      });
    }

    setTimeout(() => {
      this.allset = true;
    }, 4000);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style>
</style>