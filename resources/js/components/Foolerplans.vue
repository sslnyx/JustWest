<template>
  <b-row class="content">
    <b-col cols="12" md="4" class="plan-list">
      <div v-for="(item,key,i) in plans" :key="i">
        <b-button v-b-toggle="`accordion-${i}`" @click="selectplan(key)">
          PLAN&nbsp;{{key}}
          <div class="collapse-button"></div>
        </b-button>
        <b-collapse :visible="key === expanded" :id="`accordion-${i}`" accordion="my-accordion">
          <ul>
            <li>
              <h6>
                <strong>{{item.room}}&nbsp;BEDROOM |</strong>
                {{item.size}}&nbsp;SQ FT
              </h6>
              <a :href="item.pdfUrl" class target="_blank">DOWNLOAD PLAN {{key}}</a>
              <div
                class="btn btn-primary"
                v-if="item.doll"
                @click="dollinfo = item; selectedPlan = key; selected = item.doll.gl"
              >SEE DOLL HOUSE</div>
            </li>
          </ul>
        </b-collapse>
      </div>
    </b-col>
    <b-col cols="12" md="8">
      <img class="js-svg-inject" src="img/full/floorplans/SitePlan.svg" alt />
    </b-col>

    <div class="modal" v-if="dollinfo">
      <div class="modal-backdrop" @click="dollinfo = null"></div>
      <div class="modal-content">
        <b-row class="justify-content-between align-items-center text-white">
          <img src="img/full/icon/00_logo.svg" alt="logo" />
          <div class="d-flex">
            <div class="text-right mr-3">
              <h6 class="text-uppercase m-0">Manitoba Townhome</h6>
              <p>{{dollinfo.room}} Bedroom</p>

              <p>
                INDOOR: {{dollinfo.size}} SQ.FT. | OUTDOOR: XXXX SQ.FT.
                <br />TOTAL: XXXX SQ.FT
              </p>
            </div>

            <div class="plan-wrapper">{{selectedPlan}}</div>
          </div>
        </b-row>
        <b-row>
          <b-col cols="4" class="d-flex flex-column justify-content-center">
            <div
              class="doll-wrapper"
              v-for="(img,key) in dollinfo.doll"
              :key="key"
              @click="selected = img"
            >
              <img :src="img" v-if="img" :id="key" :class="{active: img == selected}" :alt="key" />
            </div>
          </b-col>
          <b-col cols="8" class="d-flex align-items-center w-100">
            <img :src="selected" alt />
          </b-col>
        </b-row>
      </div>
    </div>
  </b-row>
</template>

<script>
import SVGInjector from "svg-injector";
// import Floorplan from "../../../public/img/full/floorplans/SitePlan.svg";

export default {
  data() {
    return {
      expanded: "A",
      selected: null,
      dollinfo: null,
      selectedPlan: null,
      plans: {
        A: {
          room: "3",
          size: "1526",
          pdfUrl: "pdf/FloorPlan-PlanA-TBC.pdf",
          doll: null
        },
        B: {
          room: "3",
          size: "1526",
          pdfUrl: "pdf/FloorPlan-PlanB-TBC.pdf",
          doll: null
        },
        C: {
          room: "3",
          size: "1526",
          pdfUrl: "pdf/FloorPlan-PlanC-TBC.pdf",
          doll: null
        },
        D: {
          room: "3",
          size: "1526",
          pdfUrl: "pdf/FloorPlan-PlanD-TBC.pdf",
          doll: {
            rd: "img/full/doll/PlanD-(5)RoofDeck.png",
            ll: "img/full/doll/PlanD-(1)LowerLevel.png",
            gl: "img/full/doll/PlanD-(2)GardenLevel.png",
            ml: "img/full/doll/PlanD-(3)MainLevel.png",
            ul: "img/full/doll/PlanD-(4)UpperLevel.png"
          }
        },
        E: {
          room: "3",
          size: "1526",
          pdfUrl: "pdf/FloorPlan-PlanE-TBC.pdf",
          doll: null
        },
        F: {
          room: "3",
          size: "1526",
          pdfUrl: "pdf/FloorPlan-PlanF-TBC.pdf",
          doll: null
        },
        G: {
          room: "3",
          size: "1526",
          pdfUrl: "pdf/FloorPlan-PlanG-TBC.pdf",
          doll: {
            ll: null,
            gl: "img/full/doll/PlanG-(1)GardenLevel.png",
            ml: "img/full/doll/PlanG-(2)MainLevel.png",
            ul: "img/full/doll/PlanG-(3)UpperLevel.png"
          }
        },
        H: {
          room: "3",
          size: "1526",
          pdfUrl: "pdf/FloorPlan-PlanH-TBC.pdf",
          doll: {
            ll: null,
            gl: "img/full/doll/PlanH-(1)GardenLevel.png",
            ml: "img/full/doll/PlanH-(2)MainLevel.png",
            ul: "img/full/doll/PlanH-(3)UpperLevel.png"
          }
        }
      }
    };
  },
  components: {
    // Floorplan
  },
  methods: {
    selectplan(val) {
      document.querySelectorAll("[data-type=map]").forEach(el => {
        el.classList.remove("active");
      });
      document.querySelector(`#Plan${val}-hover`).classList.add("active");
    }
  },
  mounted() {
    const vm = this;
    let plans = this.plans;
    const svgEl = document.querySelector(".js-svg-inject");
    SVGInjector(svgEl, {
      each(svg) {
        vm.svgEl = svg;

        vm.groupEls = {
          A: document.querySelector("#PlanA-hover"),
          B: document.querySelector("#PlanB-hover"),
          C: document.querySelector("#PlanC-hover"),
          D: document.querySelector("#PlanD-hover"),
          E: document.querySelector("#PlanE-hover"),
          F: document.querySelector("#PlanF-hover"),
          G: document.querySelector("#PlanG-hover"),
          H: document.querySelector("#PlanH-hover")
        };

        for (const [key, el] of Object.entries(vm.groupEls)) {
          el.setAttribute("data-type", "map");
          el.setAttribute("data-name", key);

          el.addEventListener("mouseover", ev => {
            document.querySelectorAll("[data-type=map]").forEach(el => {
              el.classList.remove("active");
            });
            el.classList.add("active");
          });

          el.addEventListener("mouseout", ev => {
            el.classList.remove("active");
          });

          el.addEventListener("click", () => {
            // console.log(x[key].pdfUrl);
            window.open(plans[key].pdfUrl, "_blank");
            // addActiveState(el);
            // vm.currentPlan = key.toLowerCase();
            // vm.scrollTo(vm.anchor);
          });
        }
      }
    });
  }
};
</script>