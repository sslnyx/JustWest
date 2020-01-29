<template>
  <main class="page-home">
    <transition name="slide">
      <div
        ref="loader"
        v-if="loading"
        class="vh-100 vw-100 bg-white loader"
        :class="{ 'load-active' : loading }"
      >
        <!-- <img src="img/full/welcome/banner-a.jpg" alt="welcome" /> -->
        <img src="img/full/welcome/banner-b.jpg" alt="welcome" />
        <img src="img/full/icon/00_logo.svg" class="site-logo" alt="site logo" />
      </div>
    </transition>
    <siteHeader />

    <section id="intro" class="intro">
      <h1>
        ONE ICONIC LOCATION,
        <br />
        <span>ENDLESS POSSIBILITIES</span>
      </h1>
      <img ref="intro" src="img/full/intro/01.jpg" alt />
    </section>

    <section id="overview" class="overview">
      <b-row class="content">
        <b-col cols="12" md="6">
          <img class="w-100" src="img/full/intro/03_Image.jpg" alt />
        </b-col>
        <b-col cols="12" md="6" class="d-flex align-items-center p-3 p-md-5">
          <div>
            <h1>
              WELCOME TO
              <br />
              <span>JUST WEST</span>
            </h1>
            <p>Introducing a brand-new community of 1, 2 & 3 bedroom townhomes and garden suites designed with modern livability in mind. Situation in the sought-after neighbourhood of Riley Park, Just West invites you to being to a complete community where home is just the beginning.</p>
            <div class="btn btn-primary-white">REGISTER NOW</div>
          </div>
        </b-col>
      </b-row>
    </section>

    <section id="location-img" class="location-img vh-100">
      <img src="img/full/intro/04_parallax.jpg" alt />
    </section>

    <section id="location">
      <div class="gallery content">
        <div class="g-section-1">
          <img class="img-1" src="img/full/location/01.jpg" alt />

          <div class="text-block-wrapper">
            <img src="img/full/location/02.jpg" alt />
            <div class="text-block-red">
              <h1>
                A LOCATION
                <br />
                <span>SET APART</span>
              </h1>
              <p>From this convenient West King Edward address, the possibilities are endless. Discover lively Cambie Village to the west and trend-setting Main Street to the east, both teeming with boutique shopping, eclectic cafes and bustline brewpubs. And only 3-blocks away from the Canada Line, you can be downtown or at YVR airport in no time flat.</p>
              <p>Above all, this beloved locale has an undeniably welcoming feel thanks to tree-lined streets, historical roots and proximity to top schools like General Wolfe Elementary.</p>
            </div>
          </div>
        </div>

        <div class="g-section-2">
          <div class="img-1">
            <img src="img/full/location/location_03.jpg" alt />
          </div>
          <div class="img-2">
            <img src="img/full/location/location_04.jpg" alt />
          </div>

          <a
            class="btn btn-primary-white"
            href="#gallery-slides"
            v-smooth-scroll="{ duration: 1000, offset: -118 }"
          >VIEW GALLERY</a>
        </div>
      </div>
    </section>

    <section id="map" class="map">
      <Map />
    </section>

    <section id="interior" class="interior">
      <interior />
    </section>

    <section id="amenities" class="amenities">
      <b-row class="content">
        <b-col cols="12" md="6" class="p-0">
          <img src="img/full/amenities/04_amenities.jpg" alt />
        </b-col>
        <b-col cols="12" md="6" class="d-flex align-items-center p-3 p-md-5">
          <div style="max-width: 400px">
            <h1 class="text-red">
              COMBINING FUNCTION,
              <span>STYLE & INNOVATION</span>
            </h1>
            <p>The interiors at Just West are a modern oasis of function and style. Efficient floorplans flow seamlessly from one room to the next, while 9 ft ceilings on the main floor and expansive windows provide plenty of natural light.</p>
            <p>The gourmet kitchens are the heart of every home with a state-of-the-art Miele appliance package and large centre island. The spa-inspired bathrooms invite you to unwind in luxury with sleek white porcelain tiling and showers enclosed in frameless glass. All combined, these homes offer an innovative approach to enhance everyday living.</p>
            <a href="" class="btn btn-primary-white">DOWNLOAD FEATURES LIST</a>
          </div>
        </b-col>
      </b-row>
    </section>

    <section id="floorplans" class="floorplans">
      <floorplans />
    </section>

    <section id="gallery-slides" class="gallery-slides d-flex align-items-center">
      <slides />
    </section>

    <section id="developer" class="developer">
      <b-row class="content">
        <b-col cols="12" md="6" class="d-flex align-items-center justify-content-center">
          <a class="developer-wrapper" href="https://www.sightlineproperties.ca" target="_blank">
            <img src="img/full/developer/sightline.svg" alt="sightline.svg" />
          </a>
        </b-col>
        <b-col cols="12" md="6" class="p-3 p-md-5">
          <h1>
            TEAM OF
            <br />
            <span>EXCELLENCE</span>
          </h1>
          <p>Sightline Properties is a leading Vancouver-based real estate development company, backed by over 50 years of industry expertise in development, construction and property management. Beyond building exceptionally crafted condominiums and townhomes, at Sightline, we believe in building homes for our clients – a place where you belong, where family & friends are welcome, and where you can connect to the things that really matter in life.</p>
        </b-col>
      </b-row>
    </section>

    <siteFooter />
  </main>
</template>

<script>
import Map from "../components/Map";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Floorplans from "../components/Foolerplans";
import Interior from "../components/Interior";
import Slides from "../components/Slides";

export default {
  data() {
    return {
      data: "",
      loading: false
    };
  },
  components: {
    Map,
    siteHeader: Header,
    siteFooter: Footer,
    floorplans: Floorplans,
    interior: Interior,
    slides: Slides
  },
  mounted() {
    this.loading = false;
    // document.body.scrollTop = 0;
    // this.$refs.loader.classList.add("load-active");
    window.addEventListener("load", () => {
      console.log("finished");
      // window.scrollTo(0, 0);

      setTimeout(() => {
        this.loading = false;
        this.$refs.intro.style.transform = "scale(1)";
      }, 4000);
    });
  }
};
</script>

<style>
</style>