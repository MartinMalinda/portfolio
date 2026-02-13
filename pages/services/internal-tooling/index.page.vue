<script lang="ts" setup>
import BackButton from "../../../components/BackButton.vue";
import ServicesShell from "../../../components/ServicesShell.vue";
import SiteFooter from "../../../components/SiteFooter.vue";
</script>

<template>
  <div class="service-detail">
    <ServicesShell>
      <div class="pt-3">
        <BackButton url="/services">Back to services</BackButton>
        <h2 class="service-title">Internal tooling</h2>
      </div>
      <p>TODO: add content.</p>
    </ServicesShell>
    <div class="mt-10 py-5">
      <SiteFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
