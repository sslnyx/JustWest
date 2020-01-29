<template>
  <div class="content">
    <h1 class="text-center text-red mb-5">
      HIGH DESIGN,
      <span>MODERN LIVING</span>
    </h1>
    <b-row class="kitchen-wrapper m-0" :class="{active: changed1}">
      <div class="tab-wood">
        <div class="themes">
          <div>Wood</div>
          <div>Forest</div>
        </div>
        <button @click="changed1 = !changed1; changed = changed1; tab = 1">SEE ALTERNATE COLOR</button>
      </div>
      <div class="plus" v-b-modal.modal-1 @click="toggleModal(1)"></div>
      <div class="image-wrapper">
        <img :src="images[0]" alt="kitchen" />
        <img :src="imagesB[0]" alt="kitchen" />
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
      <b-col cols="12" lg="6" class="d-flex mt-5">
        <div class="p-3 p-md-5">
          <p>With contemporary white brick exteriors surrounded by lush landscaping, Just West beautifully complements its iconic west-side setting. Here, smart architectural design maximizes indoor-outdoor living with balconies, patios, or rooftop decks in each home.</p>
          <p>At its core, Just West has been designed to foster a strong sense of community amongst neighbours. The amenity-rich courtyard is the perfect setting for connecting where you can dine at the harvest-style table, cozy up to the fire pit or lounge in front of the outdoor movie screen with family and friends alike.</p>
        </div>
      </b-col>
      <b-col cols="12" lg="6" class="interior-containter p-0">
        <div class="interior-wrapper" :class="{active: changed2}">
          <div class="tab-wood">
            <div class="themes">
              <div>White</div>
              <div>Forest</div>
            </div>
            <button @click="changed2 = !changed2; changed = changed2; tab = 2">SEE ALTERNATE COLOR</button>
          </div>
          <div class="plus" v-b-modal.modal-2 @click="toggleModal(2)"></div>
          <div class="image-wrapper">
            <img :src="images[1]" alt="kitchen" />
            <img :src="imagesB[1]" alt="kitchen" />
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
            <button @click="changed3 = !changed3; changed = changed2; tab = 3">SEE ALTERNATE COLOR</button>
          </div>
          <div class="plus" v-b-modal.modal-3 @click="toggleModal(3)"></div>
          <div class="image-wrapper">
            <img :src="imagesB[2]" alt="kitchen" />
            <img :src="images[2]" alt="kitchen" />
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
          <button @click="changed = !changed">SEE ALTERNATE COLOR</button>
        </div>
        <div class="image-wrapper">
          <img :src="images[i-1]" />
          <img :src="imagesB[i-1]" />
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