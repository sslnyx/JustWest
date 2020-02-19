<template>
  <div>
    <siteHeader />

    <transition name="slide">
      <div
        ref="loader"
        v-if="loading"
        class="vh-100 vw-100 bg-white loader"
        :class="{ 'load-active' : colorimg }"
      >
        <picture>
          <source srcset="img/full/welcome/banner-b.webp" type="image/webp" />
          <img class="imgb" src="img/full/welcome/banner-b.jpg" alt="welcome" />
        </picture>
        <img class="imga" src="img/full/welcome/banner-a.jpg" alt="welcome" />
        <img src="img/full/icon/00_logo.svg" class="site-logo p-5 p-md-0" alt="site logo" />
      </div>
    </transition>

    <main id="viewport" class="page-home" ref="home">
      <div id="scroll-container" class="scroll-container" ref="contentH">
        <section id="intro" class="intro" ref="introSec">
          <h1>
            ONE ICONIC LOCATION,
            <br />
            <span>ENDLESS POSSIBILITIES</span>
          </h1>
          <img
            ref="intro"
            v-lazy="{src:'img/full/intro/02_rendering.jpg', loading:'img/full/intro/02_rendering_pl.jpg'}"
            alt
          />
          <div v-scroll-to="{el:'#overview',duration: 1000}" style="cursor:pointer">
            <img class="arrow-down" src="img/full/icon/arrow_down.svg" alt="arrow down" />
          </div>
        </section>

        <section id="overview" name="overview" class="overview">
          <div id="overview-anchor"></div>
          <b-row class="content">
            <b-col cols="12" md="6">
              <img
                class="w-100"
                v-lazy="{src:'img/full/intro/03_Image.jpg', loading:'img/full/intro/03_Image_pl.jpg'}"
                alt
              />
            </b-col>
            <b-col cols="12" md="6" class="d-flex align-items-center p-3 p-md-5">
              <div>
                <h1>
                  WELCOME TO
                  <br />
                  <span>JUST WEST</span>
                </h1>
                <p>Introducing a brand-new community of 1, 2 & 3 bedroom townhomes and garden suites designed with modern livability in mind. Situated in the sought-after neighbourhood of Riley Park, Just West invites you to belong to a complete community where home is just the beginning.</p>
                <router-link
                  to="/register#register"
                  class="btn btn-primary-white"
                  target="_blank"
                >REGISTER NOW</router-link>
              </div>
            </b-col>
          </b-row>
        </section>

        <section id="location" class="location-img" style="overflow:hidden">
          <img
            data-parallax='{"y": 200, "smoothness": 5}'
            v-lazy="{src:'img/full/intro/04_parallax.jpg', loading:'img/full/intro/04_parallax_pl.jpg'}"
            alt
          />
        </section>

        <section id="neighbourhood" class="neighbourhood">
          <div class="gallery content">
            <div class="g-section-1">
              <img
                class="img-1 d-none d-md-block"
                v-lazy="{src:'img/full/location/location_01.jpg', loading:'img/full/location/location_01_pl.jpg'}"
                alt
              />

              <div class="collage d-block d-md-none mb-3">
                <b-col cols="12" class="p-0" style="margin-bottom: 0.5rem">
                  <img
                    class
                    v-lazy="{src:'img/full/location/location_02.jpg', loading:'img/full/location/location_02_pl.jpg'}"
                    alt
                  />
                </b-col>
                <b-row class="m-0" style="height:50vh;min-height:400px; overflow: hidden">
                  <b-col cols="6" class="h-100" style="padding-left: 0; padding-right: 0.5rem">
                    <img
                      style="height: 100%; width:100% ;object-fit:cover;object-position: right;"
                      v-lazy="{src:'img/full/location/location_01.jpg', loading:'img/full/location/location_01_pl.jpg'}"
                      alt
                    />
                  </b-col>
                  <b-col cols="6" class="p-0 h-100">
                    <b-row class="h-50" style="margin:0; margin-bottom: 0.5rem; overflow: hidden">
                      <img
                        style="height: 100%; width:100% ;object-fit:cover;object-position: center;"
                        v-lazy="{src:'img/full/location/location_03.jpg', loading:'img/full/location/location_03_pl.jpg'}"
                        alt
                      />
                    </b-row>
                    <b-row class="m-0 h-50">
                      <img
                        style="height: 100%; width:100% ;object-fit:cover;object-position: bottom;"
                        v-lazy="{src:'img/full/location/location_04.jpg', loading:'img/full/location/location_03_pl.jpg'}"
                        alt
                      />
                    </b-row>
                  </b-col>
                </b-row>
              </div>

              <div class="text-block-wrapper">
                <img
                  class="d-none d-md-block"
                  v-lazy="{src:'img/full/location/location_02.jpg', loading:'img/full/location/location_02_pl.jpg'}"
                  alt
                />
                <div class="text-block-red">
                  <h1>
                    A LOCATION
                    <br />
                    <span>SET APART</span>
                  </h1>
                  <p>From this convenient West King Edward address, the possibilities are endless. Discover lively Cambie Village to the west and trend-setting Main Street to the east, both teeming with boutique shopping, eclectic cafes and bustling brewpubs. And only 3-blocks away from the Canada Line, you can be downtown or at YVR airport in no time flat.</p>
                  <p>Above all, this beloved locale has an undeniably welcoming feel thanks to tree-lined streets, historical roots and proximity to top schools like General Wolfe Elementary.</p>

                  <div class="btn">
                    <a v-scroll-to="{el:'#gmap', duration: 1000, offset: -118 }">neighbourhood map</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="g-section-2">
              <div class="img-1 d-none d-md-block">
                <img
                  v-lazy="{src:'img/full/location/location_03.jpg', loading:'img/full/location/location_03_pl.jpg'}"
                  alt
                />
              </div>
              <div class="img-2 d-none d-md-block">
                <img
                  v-lazy="{src:'img/full/location/location_04.jpg', loading:'img/full/location/location_04_pl.jpg'}"
                  alt
                />
              </div>

              <a
                class="btn btn-primary-white d-none d-md-block"
                href
                v-scroll-to="{ el:'#gallery',duration: 1000, offset: -117 }"
              >VIEW GALLERY</a>

              <a
                class="btn btn-primary-white d-block d-md-none"
                href
                v-scroll-to="{ el:'#gallery',duration: 1000, offset: -230 }"
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
              <div style="position:relative;">
                <div class="tab-amenities">Amenities</div>
                <img
                  v-lazy="{src:'img/full/amenities/04_amenities.jpg', loading:'img/full/amenities/04_amenities_pl.jpg'}"
                  alt
                />
                <div class="plus" v-b-modal.modal-4 @click="toggleModal(4)"></div>

                <div class="tooltip-wrapper">
                  <b-button
                    class="feature-circle"
                    v-for="(item,index) in tooltip[4]"
                    v-b-tooltip.hover
                    :title="item.title"
                    :key="index"
                    :style="item.style"
                  ></b-button>
                </div>
              </div>
            </b-col>
            <b-col cols="12" md="6" class="d-flex align-items-center p-3 p-md-5">
              <div style="max-width: 400px">
                <h1 class="text-red">
                  COMBINING FUNCTION,
                  <span>STYLE & INNOVATION</span>
                </h1>
                <p>With contemporary white brick exteriors surrounded by lush landscaping, Just West beautifully complements its iconic west-side setting. Here, smart architectural design maximizes indoor-outdoor living with balconies, patios, or rooftop decks in each home.</p>
                <p
                  class="mb-5"
                >At its core, Just West has been designed to foster a strong sense of community amongst neighbours. The amenity-rich courtyard is the perfect setting for connecting where you can dine at the harvest-style table, cozy up to the fire pit or lounge in front of the outdoor movie screen with family and friends alike.</p>

                <a
                  href="pdf/FeatureList-Insert_web.pdf"
                  target="_blank"
                  class="btn btn-primary-white"
                >DOWNLOAD FEATURES LIST</a>
              </div>
            </b-col>
          </b-row>

          <b-modal id="modal-4" centered title="BootstrapVue">
            <div class="modal-wrapper">
              <div class="image-wrapper">
                <div class="tab-amenities">Amenities</div>
                <img
                  style="opacity: 1"
                  v-lazy="{src:'img/full/amenities/04_amenities.jpg', loading:'img/full/amenities/04_amenities_pl.jpg'}"
                  alt
                />
              </div>
              <div class="tooltip-wrapper">
                <b-button
                  class="feature-circle"
                  v-for="(item,index) in tooltip[4]"
                  v-b-tooltip.hover
                  :title="item.title"
                  :key="index"
                  :style="item.style"
                ></b-button>
              </div>
            </div>
          </b-modal>
        </section>

        <section id="floorplans" class="floorplans">
          <div class="fp-title content text-center mb-5 pl-3 pr-3">
            <h1 class="text-red text-uppercase">
              Spacious & Smart
              <span>Floorplans</span>
            </h1>
            <p
              style="max-width: 800px; margin: 0 auto"
            >Just West is an intimate community of 1, 2 & 3 bedroom homes. Choose from 8 unique floorplans, each a coveted space with bright open concept layouts, modern designs and al fresco living areas.</p>
          </div>
          <floorplans />
          <div class="w-100 mt-5 d-flex justify-content-center">
            <a
              href="pdf/Full-FloorPlan+SitePlan.pdf"
              target="_blank"
              class="btn btn-primary-white"
            >DOWNLOAD FLOORPLANS</a>
          </div>
          <!-- <a href="pdf/FloorPlan-Full-TBC.pdf" class="btn btn-primary-white">SEE DOLL HOUSE</a> -->
        </section>

        <section id="gallery" class="gallery-slides d-flex align-items-center">
          <slides />
        </section>

        <section id="developer" class="developer">
          <b-row class="content">
            <b-col cols="12" md="6" class="d-flex align-items-center justify-content-center">
              <a
                class="developer-wrapper"
                href="https://www.sightlineproperties.ca"
                target="_blank"
              >
                <img v-lazy="'img/full/developer/sightline.svg'" alt="sightline.svg" />
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
      </div>
    </main>
  </div>
</template>

<script>
import Map from "../components/Map";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Floorplans from "../components/Foolerplans";
import Interior from "../components/Interior";
import Slides from "../components/Slides";
import Tooltip from "../components/partials/tooltip.json";
// import SmoothScroll from "../../../public/js/smoothPageScroll";

export default {
  data() {
    return {
      data: "",
      loading: false,
      tooltip: Tooltip,
      colorimg: false,
      timeout2: null,
      bodyH: ""
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
  methods: {
    toggleModal(val) {
      this.tab = val;
      this.$root.$emit("bv::toggle::modal", `modal-${val}`, "#btnToggle");
    },
    contentobs() {
      const resizeObserver = new ResizeObserver(() => {
        let x = document.querySelector(".scroll-container").offsetHeight + "px";
        document.querySelector("body").style.height = x;
      });
      resizeObserver.observe(document.querySelector(".scroll-container"));
    }
  },
  mounted() {
    // this.loading = false;
          history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );

    // document.body.scrollTop = 0;
    // this.$refs.loader.classList.add("load-active");
    // this.$refs.introSec.scrollIntoView();

    this.loading = true;
    setTimeout(() => {
      this.colorimg = true;
    }, 1000);
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 2000);
    setTimeout(() => {
      this.loading = false;
      this.$refs.intro.style.transform = "scale(1)";
    }, 4000);

    var SmoothScroll = /** @class */ (function() {
      function SmoothScroll(options) {
        var _this = this;
        this.endThreshold = 0.05;
        this.requestId = null;
        this.maxDepth = 10;
        this.viewHeight = 0;
        this.halfViewHeight = 0;
        this.maxDistance = 0;
        this.scrollHeight = 0;
        this.endScroll = 0;
        this.currentScroll = 0;
        this.resizeRequest = 1;
        this.scrollRequest = 0;
        this.scrollItems = [];
        this.lastTime = -1;
        this.maxElapsedMS = 100;
        this.targetFPMS = 0.06;
        this._onResize = function(event) {
          _this.resizeRequest++;
          if (!_this.requestId) {
            _this.lastTime = performance.now();
            _this.requestId = requestAnimationFrame(_this._update);
          }
        };
        this._onScroll = function(event) {
          _this.scrollRequest++;
          if (!_this.requestId) {
            _this.lastTime = performance.now();
            _this.requestId = requestAnimationFrame(_this._update);
          }
        };
        this._update = function(currentTime) {
          if (currentTime === void 0) {
            currentTime = performance.now();
          }
          var elapsedMS = currentTime - _this.lastTime;
          if (elapsedMS > _this.maxElapsedMS) {
            elapsedMS = _this.maxElapsedMS;
          }
          var deltaTime = elapsedMS * _this.targetFPMS;
          var dt = 1 - Math.pow(1 - _this.scrollEase, deltaTime);
          var resized = _this.resizeRequest > 0;
          var scrollY = window.pageYOffset;
          if (resized) {
            var height = _this.target.clientHeight;
            document.body.style.height = height + "px";
            _this.scrollHeight = height;
            _this.viewHeight = window.innerHeight;
            _this.halfViewHeight = _this.viewHeight / 2;
            _this.maxDistance = _this.viewHeight * 2;
            _this.resizeRequest = 0;
          }
          _this.endScroll = scrollY;
          // this.currentScroll += (scrollY - this.currentScroll) * this.scrollEase;
          _this.currentScroll += (scrollY - _this.currentScroll) * dt;
          if (
            Math.abs(scrollY - _this.currentScroll) < _this.endThreshold ||
            resized
          ) {
            _this.currentScroll = scrollY;
            _this.scrollRequest = 0;
          }
          // const scrollOrigin = scrollY + this.halfViewHeight;
          var scrollOrigin = _this.currentScroll + _this.halfViewHeight;
          _this.target.style.transform =
            "translate3d(0px,-" + _this.currentScroll + "px,0px)";
          for (var i = 0; i < _this.scrollItems.length; i++) {
            var item = _this.scrollItems[i];
            var distance = scrollOrigin - item.top;
            var offsetRatio = distance / _this.maxDistance;
            item.endOffset = Math.round(
              _this.maxOffset * item.depthRatio * offsetRatio
            );
            if (
              Math.abs(item.endOffset - item.currentOffset < _this.endThreshold)
            ) {
              item.currentOffset = item.endOffset;
            } else {
              // item.currentOffset += (item.endOffset - item.currentOffset) * this.scrollEase;
              item.currentOffset += (item.endOffset - item.currentOffset) * dt;
            }
            item.target.style.transform =
              "translate3d(0px,-" + item.currentOffset + "px,0px)";
          }
          _this.lastTime = currentTime;
          _this.requestId =
            _this.scrollRequest > 0
              ? requestAnimationFrame(_this._update)
              : null;
        };
        this.target = options.target;
        this.scrollEase = options.scrollEase != null ? options.scrollEase : 0.1;
        this.maxOffset = options.maxOffset != null ? options.maxOffset : 500;
        this.addItems();
        window.addEventListener("resize", this._onResize);
        window.addEventListener("scroll", this._onScroll);
        this._update();
      }
      SmoothScroll.prototype.addItems = function() {
        this.scrollItems = [];
        var elements = document.querySelectorAll("*[data-depth]");
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          var depth = +element.getAttribute("data-depth");
          var rect = element.getBoundingClientRect();
          var item = {
            target: element,
            depth: depth,
            top: rect.top + window.pageYOffset,
            depthRatio: depth / this.maxDepth,
            currentOffset: 0,
            endOffset: 0
          };
          this.scrollItems.push(item);
        }
        return this;
      };
      return SmoothScroll;
    })();

    var isMobile = false; //initiate as false

    // device detection
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substr(0, 4)
      )
    ) {
      isMobile = true;
    }

    if (isMobile == false) {
      new SmoothScroll({
        target: document.querySelector(".scroll-container"), // element container to scroll
        scrollEase: 0.05
      });
    } else {
      document.querySelector("main#viewport").style.position = "inherit";
    }

    this.contentobs();
  },
  updated() {},
  destroyed() {
    clearTimeout(this.timeout2);
  }
};
</script>

<style>
</style>