<template>
  <div class="content">
    <h1 class="text-red m-3 mb-5 text-left text-md-center">
      HIGH DESIGN,
      <br class="d-block d-md-none" />
      <span>MODERN LIVING</span>
    </h1>
    <b-row class="kitchen-wrapper m-0" :class="{active: changed1}">
      <div class="tab-wood">
        <div class="themes">
          <div>Wood</div>
          <div>Forest</div>
        </div>
        <button @click="changed1 = !changed1; changed = changed1; tab = 1">
          SEE ALTERNATE COLOR
          <img src="img/full/icon/arrow_right.svg" alt="arrow down" />
        </button>
      </div>
      <div class="plus" v-b-modal.modal-1 @click="toggleModal(1)"></div>
      <div class="image-wrapper">
        <img v-lazy="{src:images[0], loading:`${url}rendering_01_kitchen_a_pl.jpg`}" alt="kitchen" />
        <img v-lazy="imagesB[0]" alt="kitchen" />
      </div>
      <div class="tooltip-wrapper">
        <b-button
          class="feature-circle"
          v-for="(i,index) in tooltip[1]"
          v-b-tooltip.hover
          :title="i.title"
          :key="index"
          :style="i.style"
        ></b-button>
      </div>
    </b-row>

    <b-row class="m-0">
      <b-col cols="12" lg="6" class="d-flex mt-5 mb-5 p-0">
        <div class="p-3 p-md-5">
          <p>The interiors at Just West are a modern oasis of function and style. Efficient floorplans flow seamlessly from one room to the next, while 9 ft ceilings on the main floor and expansive windows provide plenty of natural light.</p>
          <p>The gourmet kitchens are the heart of every home with a state-of-the-art Miele appliance package and large centre island. The spa-inspired bathrooms invite you to unwind in luxury with sleek white porcelain tiling and showers enclosed in frameless glass. All combined, these homes offer an innovative approach to enhance everyday living.</p>
        </div>
      </b-col>
      <b-col cols="12" lg="6" class="interior-containter p-0">
        <div class="interior-wrapper" :class="{active: changed2}">
          <div class="tab-wood">
            <div class="themes">
              <div>White</div>
              <div>Forest</div>
            </div>
            <button @click="changed2 = !changed2; changed = changed2; tab = 2">
              SEE ALTERNATE COLOR
              <img src="img/full/icon/arrow_right.svg" alt="arrow down" />
            </button>
          </div>
          <div class="plus" v-b-modal.modal-2 @click="toggleModal(2)"></div>
          <div class="image-wrapper">
            <img
              v-lazy="{src:images[1], loading:`${url}rendering_02_bathroom_a_pl.jpg`}"
              alt="kitchen"
            />
            <img v-lazy="imagesB[1]" alt="kitchen" />
          </div>
          <div class="tooltip-wrapper">
            <b-button
              class="feature-circle"
              v-for="(i,index) in tooltip[2]"
              v-b-tooltip.hover
              :title="i.title"
              :key="index"
              :style="i.style"
            ></b-button>
          </div>
        </div>
        <div class="interior-wrapper" :class="{active: changed3}">
          <div class="tab-wood">
            <div class="themes">
              <div>Wood</div>
              <div>Forest</div>
            </div>
            <button @click="changed3 = !changed3; changed = changed2; tab = 3">
              SEE ALTERNATE COLOR
              <img src="img/full/icon/arrow_right.svg" alt="arrow down" />
            </button>
          </div>
          <div class="plus" v-b-modal.modal-3 @click="toggleModal(3)"></div>
          <div class="image-wrapper">
            <img
              v-lazy="{src:images[2], loading:`${url}rendering_03_dinning_a_pl.jpg`}"
              alt="kitchen"
            />
            <img v-lazy="imagesB[2]" alt="kitchen" />
          </div>
          <div class="tooltip-wrapper">
            <b-button
              class="feature-circle"
              v-for="(i,index) in tooltip[3]"
              v-b-tooltip.hover
              :title="i.title"
              :key="index"
              :style="i.style"
            ></b-button>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-modal v-for="i in 3" :id="`modal-${i}`" centered title="BootstrapVue" :key="i">
      <div
        class="modal-wrapper"
        :class="{active: tab == i && changed1 || changed2 || changed3, active: changed}"
      >
        <div class="tab-wood">
          <div class="themes">
            <div v-if="tab != 2">Wood</div>
            <div v-if="tab == 2">White</div>
            <div>Forest</div>
          </div>
          <button @click="changed = !changed">
            SEE ALTERNATE COLOR
            <img src="img/full/icon/arrow_right.svg" alt="arrow down" />
          </button>
        </div>
        <div class="image-wrapper">
          <img v-lazy="images[i-1]" />
          <img v-lazy="imagesB[i-1]" />
        </div>
        <div class="tooltip-wrapper">
          <b-button
            class="feature-circle"
            v-for="(item,index) in tooltip[i]"
            v-b-tooltip.hover
            :title="item.title"
            :key="index"
            :style="item.style"
          ></b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import tooltipData from "./partials/tooltip.json";

export default {
  data() {
    return {
      changed: false,
      changed1: false,
      changed2: false,
      changed3: false,
      tab: null,

      show: false,
      url: "img/full/interior/",

      images: [
        `img/full/interior/rendering_01_kitchen_a.jpg`,
        `img/full/interior/rendering_02_bathroom_a.jpg`,
        `img/full/interior/rendering_03_dinning_a.jpg`
      ],
      imagesB: [
        `img/full/interior/rendering_01_kitchen_b.jpg`,
        `img/full/interior/rendering_02_bathroom_b.jpg`,
        `img/full/interior/rendering_03_dinning_b.jpg`
      ],

      tooltip: tooltipData
    };
  },
  methods: {
    toggleModal(val) {
      this.tab = val;
      this.$root.$emit("bv::toggle::modal", `modal-${val}`, "#btnToggle");
    }
  }
};
</script>

<style>
</style>