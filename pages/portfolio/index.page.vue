<script lang="ts" setup>
import PortfolioList from "../../components/PortfolioList.vue";
import PortfolioShell from "../../components/PortfolioShell.vue";
import SiteFooter from "../../components/SiteFooter.vue";
</script>

<template>
  <div class="portfolio-index">
    <PortfolioShell>
      <PortfolioList />
    </PortfolioShell>
    <div class="mt-10 py-5">
      <SiteFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
