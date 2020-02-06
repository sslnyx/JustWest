<template>
  <header class="text-right" :class="{'mobile-header': checkWidth}">
    <div class="img-wrapper">
      <div class="jw-m-logo">
        <router-link to="/">
          <img src="img/landing/00_logo_mobile.svg" alt />
        </router-link>
      </div>
      <div class="jw-md-type">
        <img src="img/landing/00_logo_type_mobile.svg" alt />
      </div>
    </div>
    <div class="d-none d-md-flex justify-content-between align-items-end">
      <div class="header-links mb-3 text-left">
        <a href="mailto:info@justwest.ca">info@justwest.ca</a>
        <span class="d-none d-lg-inline">|</span>
        <br class="d-block d-lg-none" />
        <a href="tel:604.734.8883">604.734.8883</a>
      </div>
      <p>
        1, 2 &amp; 3 bedroom contemporary
        <br />townhomes &amp; garden suites
      </p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    checkWidth: ""
  }
};
</script>

<style>
</style>