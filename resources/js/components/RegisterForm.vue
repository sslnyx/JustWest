<template>
  <form
    id="reg-form"
    class="slide-content reg-form w-100 d-flex align-items-center"
    style="overflow: auto;"
    @submit.prevent="submit"
  >
    <input type="hidden" name="domainAccountId" value="LAS-591543-01" />
    <input type="hidden" name="guid" value />

    <div class="text-black" style="color:black!important">
      <pre>{{resData}}</pre>
    </div>

    <div class="text-black" style="color:black!important">
      <pre>{{lead}}</pre>
    </div>
    <!-- <div class="text-black" style="color:black!important">{{fields.isRealtor}}</div> -->

    <div class="form-wrapper w-100">
      <div class="d-block d-md-none reg-msg">
        Register below or call
        <a href="tel:604.734.8883">604.734.8883</a>
      </div>

      <b-row>
        <b-col cols="12" md="6" class="form-group">
          <!-- <label for="name">First Name</label> -->
          <input
            type="text"
            class="form-control"
            name="FirstName"
            id="FirstName"
            v-model="fields.FirstName"
            placeholder=" "
            required
            v-for="(i,index) in 1"
            :key="index"
            ref="input"
          />
          <span class="placeholder" data-placeholder="First Name"></span>
          <div v-if="errors && errors.FirstName" class="text-danger">{{ errors.FirstName[0] }}</div>
        </b-col>

        <b-col cols="12" md="6" class="form-group">
          <!-- <label for="name">Last Name</label> -->
          <input
            type="text"
            class="form-control"
            name="LastName"
            id="LastName"
            v-model="fields.LastName"
            placeholder=" "
            required
            v-for="(i,index) in 1"
            :key="index"
            ref="input"
          />
          <span class="placeholder" data-placeholder="Last Name"></span>
          <div v-if="errors && errors.LastName" class="text-danger">{{ errors.LastName[0] }}</div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" md="6" class="form-group">
          <!-- <label for="email">E-mail</label> -->
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            placeholder=" "
            v-model="fields.email"
            required
            v-for="(i,index) in 1"
            :key="index"
            ref="input"
          />
          <span class="placeholder" data-placeholder="Email"></span>
          <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>
        </b-col>

        <b-col cols="12" md="6" class="form-group">
          <input
            type="text"
            class="form-control"
            name="phone"
            id="phone"
            placeholder=" "
            v-model="fields.phone"
            required
            v-for="(i,index) in 1"
            :key="index"
            ref="input"
          />
          <span class="placeholder" data-placeholder="Phone"></span>
          <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" md="6" class="form-group">
          <!-- <label for="email">E-mail</label> -->
          <input
            type="text"
            placeholder=" "
            class="form-control"
            name="city"
            id="city"
            v-model="fields.city"
            required
            v-for="(i,index) in 1"
            :key="index"
            ref="input"
          />
          <span class="placeholder" data-placeholder="City"></span>
        </b-col>

        <b-col cols="12" md="6" class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder=" "
            name="postal-code"
            id="postal-code"
            v-model="fields.postal_code"
            required
            v-for="(i,index) in 1"
            :key="index"
            ref="input"
          />
          <span class="placeholder" data-placeholder="Postal Code"></span>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" md="6" class="form-group checkbox">
          <label for="CoRealtor">Are you working with a REALTOR&reg;?</label>
          <div class="radio-field d-flex">
            <label class="r-btn">
              Yes
              <input
                type="radio"
                class="form-control"
                name="select"
                value="262760"
                v-model="fields.isCoRealtor.answer"
              />
              <span class="checkmark"></span>
            </label>

            <label class="r-btn">
              No
              <input
                type="radio"
                class="form-control"
                name="select"
                value="262761"
                v-model="fields.isCoRealtor.answer"
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </b-col>

        <b-col cols="12" md="6" class="form-group checkbox">
          <label for="realtor">Are you a REALTOR&reg;?</label>
          <div class="radio-field d-flex">
            <label class="r-btn">
              Yes
              <input
                type="radio"
                class="form-control"
                name="select2"
                value="262762"
                v-model="fields.isRealtor.answer"
              />
              <span class="checkmark"></span>
            </label>

            <label class="r-btn">
              No
              <input
                type="radio"
                class="form-control"
                name="select2"
                value="262763"
                v-model="fields.isRealtor.answer"
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" md="6" class="form-group">
          <!-- <label for="realtor">How did you hear about Just West?</label> -->
          <select v-model="fields.options.answer" required>
            <option :value="null" disabled selected>How did you hear about Just West? *</option>
            <option :value="index" v-for="(op,index) in options" :key="index">{{op}}</option>
          </select>
          <span class="placeholder" data-placeholder="How did you hear about Just West?"></span>
        </b-col>
        <b-col cols="12" md="6" class="form-group">
          <input
            type="text"
            placeholder="If ‘Other’, please specify"
            class="form-control"
            name="other"
            id="other"
            v-model="fields.otherReason.answer"
          />
        </b-col>
      </b-row>

      <b-row class="option23">
        <b-col cols="12" md="6" class="form-group">
          <select v-model="fields.options2.answer">
            <option :value="null" disabled selected>Desired Type of Homes</option>
            <option :value="index" v-for="(op,index) in options2" :key="index">{{op}}</option>
          </select>
        </b-col>

        <b-col cols="12" md="6" class="form-group">
          <select v-model="fields.options3.answer">
            <option :value="null" disabled selected>Reasons to Purchase</option>
            <option :value="index" v-for="(op,index) in options3" :key="index">{{op}}</option>
          </select>
        </b-col>
      </b-row>

      <!-- <input type="radio" name="vehicle1" value="Bike" /> -->

      <div class="disclaimer checkbox">
        <div v-if="errors && errors.check" class="text-danger pl-5">This field is required.</div>

        <label class="r-btn">
          <input type="checkbox" name="vehicle1" v-model="fields.check" />
          <span class="checkmark"></span>
        </label>
        <p class="pl-5 pr-3">
          <span
            style="color:tomato; font-size:1rem; position:absolute; top:-3px; text-shadow:inherit"
          >*</span>&nbsp;&nbsp;&nbsp;&nbsp;Click to confirm your consent to receive e-communications from Sightline Properties, Platinum Project
          Marketing and Pilothouse Realty Inc. including information about this and upcoming developments,
          promotions, VIP early access or special offers. Should you wish to be excluded, please email us at
          <a
            href="mailto:info@justwest.ca"
          >info@justwest.ca</a> or click the appropriate link at the bottom of any email received.
        </p>
      </div>

      <button type="submit" v-if="!loading" class="btn btn-primary">register now</button>
      <pulse-loader class="p-5" :loading="loading" :color="color"></pulse-loader>
    </div>
  </form>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  data() {
    return {
      options: {
        262764: "Google Search",
        262765: "BuzzBuzzHome",
        262766: "Social Media",
        262767: "WeChat",
        262768: "Walk/Drive by Signage",
        262769: "Realtor",
        262770: "Friends or Family",
        262771: "Other"
      },
      options2: {
        262772: "1 Bedroom",
        262773: "2 Bedroom",
        262774: "3 Bedroom"
      },
      options3: {
        262775: "A Permanent Home",
        262776: "An Investment"
      },
      fields: {
        isCoRealtor: {
          answer: "",
          id: 83445
        },
        isRealtor: {
          answer: "",
          id: 83446
        },
        options: {
          answer: null,
          id: 83447
        },
        otherReason: {
          answer: null,
          id: 83448
        },
        options2: {
          answer: null,
          id: 83449
        },
        options3: {
          answer: null,
          id: 83450
        },
        date: new Date()
      },
      resData: "",
      lead: "",
      errors: {},
      loading: false,
      color: "#d12e33"
    };
  },
  components: {
    PulseLoader
  },
  computed: {},
  methods: {
    submit() {
      this.loading = true;
      this.errors = {};

      this.$recaptcha("formsubmit").then(token => {
        // console.log(token); // Will print the token
        this.fields.token = token;

        axios
          .post("/submit", this.fields)
          .then(response => {
            console.log(response.data);
            //   alert("Message sent!");
            this.loading = false;
            this.$router.push({ path: "thank-you" });
          })
          .catch(error => {
            if (error.response.status === 422) {
              this.errors = error.response.data.errors || {};
            }
            this.loading = false;
          });
      });
      // this.loading = false;
    }
  },
  mounted() {
    this.$refs.input.forEach(element => {
      element.addEventListener("input", () => {
        if (element.value) {
          element.nextSibling.nextSibling.style.opacity = 0;
        } else {
          element.nextSibling.nextSibling.style.opacity = 1;
        }
      });
    });
  }
};
</script>

<style>
</style>