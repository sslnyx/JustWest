<template>
  <b-row class="content">
    <b-col cols="12" md="4" class="plan-list">
      <div v-for="(item,key,i) in plans" :key="i">
        <b-button v-b-toggle="`accordion2-${i}`" @click="selectplan(key, $event)">
          PLAN&nbsp;{{key}}
          <div class="collapse-button"></div>
        </b-button>
        <b-collapse :visible="key == expanded" :id="`accordion2-${i}`" accordion="my-accordion">
          <ul>
            <li>
              <h6>
                <strong>{{item.room}}&nbsp;{{item.type}}&nbsp;</strong>
                <br />
                Indoor: {{item.size}}&nbsp;SQ FT
                <br />
                Outdoor: {{item.outdoor}}&nbsp;SQ FT
              </h6>
              <a :href="item.pdfUrl" class target="_blank">DOWNLOAD PLAN {{key}}</a>
              <div
                class="btn btn-primary"
                v-b-modal.modal-doll
                v-if="item.doll"
                @click="toggleModal(item, key)"
              >SEE DOLL HOUSE</div>
            </li>
          </ul>
        </b-collapse>
      </div>
    </b-col>
    <b-col cols="12" md="8" ref="sitePlan">
      <img class="js-svg-inject" src="img/full/floorplans/SitePlan_v2.svg" alt />
    </b-col>

    <b-modal id="modal-doll" centered title="dollmodal">
      <!-- <div class="modal-backdrop" @click="dollinfo = null"></div> -->
      <div class="modal-content" v-if="dollinfo">
        <b-row
          class="justify-content-between align-items-center text-white pt-0 pl-3 pr-3 pb-3 p-md-0"
        >
          <img class="order-1 ml-0 ml-md-3" src="img/full/icon/00_logo.svg" alt="logo" />
          <div class="d-flex order-4 order-md-2" style="flex:1;justify-content: flex-end">
            <div class="text-right mr-0 mr-md-3 text-right text-md-right">
              <!-- <img :src="dollinfo.doll['Main Level']" alt=""> -->
              <h6 class="text-uppercase mb-3 d-none d-md-block" style="font-weight: bold;">
                {{dollinfo.room}}
                <br :class="{'d-block': selectedPlan == 'D'}" style="display:none" />
                {{dollinfo.type}}
              </h6>
              <p class="doll-info">
                INDOOR: {{dollinfo.size}} SQ.FT.
                <br />
                OUTDOOR: {{dollinfo.outdoor}} SQ.FT.
              </p>
            </div>
          </div>
          <div class="w-100 order-3 d-md-none"></div>

          <div class="d-flex order-2 order-md-3 text-right">
            <div class="d-block d-md-none">
              <h6 class="text-uppercase">
                {{dollinfo.room}}
                <br />
                {{dollinfo.type}}
              </h6>
            </div>

            <div class="plan-wrapper mr-0 mr-md-3">{{selectedPlan}}</div>
          </div>
        </b-row>
        <b-row>
          <b-col
            cols="12"
            md="4"
            class="h-100 d-flex flex-row flex-md-column justify-content-start justify-content-md-center flex-wrap align-items-center"
          >
            <div
              class="doll-wrapper"
              v-for="(img,key) in dollinfo.doll"
              :key="key"
              @click="selected = img"
            >
              <!-- <img :src="img" alt=""> -->

              <div class="dollIcon d-flex align-items-center">
                <div class="text-key">{{key}}</div>
                <img
                  class="d-none d-md-block"
                  :src="img"
                  :id="key"
                  :class="{active: img == selected}"
                  :alt="key"
                />
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="8" class="d-flex align-items-center w-100">
            <img :src="selected" alt />
            <!-- <div class="dh-wrapper" v-for="(img,key) in dollinfo.doll" :key="key">
              <img :src="img" alt />
            </div>-->
          </b-col>
        </b-row>
      </div>
    </b-modal>
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
          type: "GARDEN SUITE",
          room: "1 BEDROOM + FLEX",
          size: "859 - 904",
          outdoor: "82",
          doll: null,
          pdfUrl: "pdf/FloorPlan-A.pdf"
        },
        B: {
          type: "GARDEN SUITE",
          room: "1 BEDROOM",
          size: "716 - 720",
          outdoor: "126 - 319",
          doll: null,
          pdfUrl: "pdf/FloorPlan-B.pdf"
        },
        C: {
          type: "GARDEN SUITE",
          room: "1 BEDROOM + FLEX",
          size: "864",
          outdoor: "140",
          doll: null,
          pdfUrl: "pdf/FloorPlan-C.pdf"
        },
        D: {
          type: "TOWNHOME",
          room: "3 BEDROOM + DEN + FLEX",
          size: "1,823 - 1,840",
          outdoor: "538",
          total: "2,361 - 2,378",
          doll: {
            "Roof Deck": "img/full/doll/PlanD-(5)RoofDeck.png",
            "Upper Level": "img/full/doll/PlanD-(4)UpperLevel.png",
            "Main Level": "img/full/doll/PlanD-(3)MainLevel.png",
            "Garden Level": "img/full/doll/PlanD-(2)GardenLevel.png",
            "Lower Level": "img/full/doll/PlanD-(1)LowerLevel.png"
          },
          pdfUrl: "pdf/FloorPlan-D.pdf"
        },
        E: {
          type: "TOWNHOME",
          room: "2 BEDROOM",
          size: "1,123",
          outdoor: "809",
          doll: null,
          pdfUrl: "pdf/FloorPlan-E.pdf"
        },
        F: {
          type: "TOWNHOME",
          room: "2 BEDROOM",
          size: "1,076",
          outdoor: "476",
          doll: null,
          pdfUrl: "pdf/FloorPlan-F.pdf"
        },
        G: {
          type: "TOWNHOME",
          room: "3 BEDROOM",
          size: "1,398 - 1,405",
          outdoor: "448",
          total: "1,846 - 1,853",
          doll: {
            "Roof Deck": "img/full/doll/PlanG-(4)RoofDeck.png",
            "Upper Level": "img/full/doll/PlanG-(3)UpperLevel.png",
            "Main Level": "img/full/doll/PlanG-(2)MainLevel.png",
            "Garden Level": "img/full/doll/PlanG-(1)GardenLevel.png"
          },
          pdfUrl: "pdf/FloorPlan-G.pdf"
        },
        H: {
          type: "TOWNHOME",
          room: "2 BEDROOM",
          size: "1,363 - 1,367",
          outdoor: "525",
          total: "1,888 - 1,892",
          doll: {
            "Roof Deck": "img/full/doll/PlanH-(4)RoofDeck.png",
            "Upper Level": "img/full/doll/PlanH-(3)UpperLevel.png",
            "Main Level": "img/full/doll/PlanH-(2)MainLevel.png",
            "Garden Level": "img/full/doll/PlanH-(1)GardenLevel.png"
          },
          pdfUrl: "pdf/FloorPlan-H.pdf"
        }
      }
    };
  },
  components: {
    // Floorplan
  },
  methods: {
    selectplan(val, e) {
      // e.preventDefault();
      // this.$refs.sitePlan.scrollIntoView({ behavior: "smooth", top: "-100px" });
      document.querySelectorAll("[data-type=map]").forEach(el => {
        el.classList.remove("active");
      });
      document.querySelector(`#Plan${val}_hover`).classList.add("active");
    },
    toggleModal(val, key) {
      this.dollinfo = val;
      this.selectedPlan = key;
      this.selected = val.doll["Main Level"];
      this.$root.$emit("bv::toggle::modal", "modal-doll", "#btnToggle");
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
          A: document.querySelector("#PlanA_hover"),
          B: document.querySelector("#PlanB_hover"),
          C: document.querySelector("#PlanC_hover"),
          D: document.querySelector("#PlanD_hover"),
          E: document.querySelector("#PlanE_hover"),
          F: document.querySelector("#PlanF_hover"),
          G: document.querySelector("#PlanG_hover"),
          H: document.querySelector("#PlanH_hover")
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

    this.$root.$on("bv::collapse::state", (collapseId, isJustShown) => {
      // console.log("collapseId:", collapseId);
      // console.log("isJustShown:", isJustShown);
    });
  }
};
</script>