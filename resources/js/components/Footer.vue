<template>
  <footer class="site-footer">
    <b-row>
      <b-col
        class="p-0 d-none d-lg-flex align-items-center"
        style="flex-grow:0; min-width:200px; min-heigh:200px; background:#e13236;"
      >
        <img
          src="img/full/icon/00_logo.svg"
          @click="toTop"
          class="site-logo"
          alt="site logo"
          style="cursor: pointer; min-width:inherit; width: 80%; height: 80%;"
        />
      </b-col>

      <b-col class="d-flex flex-column align-items-center align-items-lg-start">
        <img
          class="site-logo d-block d-lg-none"
          src="img/full/icon/footer_logo.svg"
          @click="toTop"
          alt="site logo"
          style="cursor: pointer;"
        />

        <div class="address text-center text-lg-left ml-0 ml-lg-5">
          <h5>PRESENTATION CENTRE</h5>
          <p style="margin-bottom: 2rem">
            <a
              href="https://www.google.com/maps/place/479+W+16th+Ave,+Vancouver,+BC+V5Y+1Z2/@49.2570625,-123.116603,17z/data=!3m1!4b1!4m5!3m4!1s0x548673e8ca51734f:0x9a7fa168050fca8f!8m2!3d49.2570625!4d-123.1144143?hl=en"
              target="_blank"
            >479 West 16th Ave, Vancouver</a>
            <br />Open Daily 12-5pm
            <br />(except Fridays)
            <br />
            <a href="tel:604.734.8883">604.734.8883</a>
            <br />
            <a href="mailto:info@justwest.ca">info@justwest.ca</a>
          </p>
        </div>
      </b-col>

      <b-col cols="12" lg="6">
        <b-row>
          <b-col cols="12" lg="auto" class="text-center mr-0 mr-lg-5 text-lg-left">
            <div class="h-100">
              <h6>Developed by</h6>
              <div class="logo-wrapper">
                <a href="https://www.sightlineproperties.ca" target="_blank">
                  <img
                    class="footer-developer mt-0 mt-lg-3"
                    src="img/full/developer/sightline.svg"
                    alt="sightline.svg"
                  />
                </a>
              </div>
            </div>
          </b-col>

          <b-col cols="12" lg="auto" class="text-center text-lg-left mb-5 mr-0 mr-lg-3 mb-lg-0">
            <div class="h-100">
              <h6>Sales & Marketing by</h6>
              <div class="logo-wrapper">
                <a href="https://pilothouseinc.com/" target="_blank">
                  <img class="ph-logo" src="img/full/icon/footer_logo_pilothouse.svg" alt />
                </a>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <small class="desclaimer" style="font-size: 8px; padding: 1rem">
            Illustrations and renderings reflect the artist’s interpretation of the project and do not take into account the neighbouring building, physical structures, streets and landscape. When built, actual suites, amenities, building interiors, exteriors and views may be different than what is depicted. In a continuing effort to meet the challenge of product improvement, the Developer reserves the right to modify or change plans, specifications, and features without notice. Floorplans, elevations, room sizes, decks and square footages are approximate and may vary from the actual built home. Floorplans may be oriented differently than displayed. Furniture and décor items are shown as an example only and are not included. Refer to the disclosure statement for specific details. This is not an offering for sale. Any such offering can only be made with the applicable disclosure statement and agreement of purchase and sale. Sales and Marketing by Pilothouse Real Estate Inc.
            <a
              href="https://www.pilothouseinc.com"
              class="text-white"
            >
              <u>www.pilothouseinc.com</u>
            </a>
            . E.&O.E.
          </small>
        </b-row>
      </b-col>
    </b-row>
  </footer>
</template>

<script>
export default {
  methods: {
    toTop() {
      document.querySelector("#intro").scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style>
</style>