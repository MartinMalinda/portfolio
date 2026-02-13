<script lang="ts" setup>
import BackButton from "../../../components/BackButton.vue";
import ProgressBanner from "../../../components/ProgressBanner.vue";
import ServiceBlock from "../../../components/ServiceBlock.vue";
import ServicesShell from "../../../components/ServicesShell.vue";
import SiteFooter from "../../../components/SiteFooter.vue";
import Bolt from "../../../components/icons/Bolt.vue";
import Dashboard from "../../../components/icons/Dashboard.vue";
import Database from "../../../components/icons/Database.vue";
import Link from "../../../components/icons/Link.vue";
</script>

<template>
  <div class="service-detail">
    <ServicesShell>
      <BackButton class="mt-2" url="/services">Back to services</BackButton>
      <ProgressBanner />
      <ServiceBlock class="pt-2">
        <h2 class="service-title">Data synchronization</h2>
        <div>
          Keep data synced, accurate, and traceable across tools with reliable
          pipelines.
        </div>
      </ServiceBlock>
      <ServiceBlock title="Data pipelines">
        <ul class="details" style="list-style-type: none">
          <li class="flex ai-center gap-1">
            <Database class="icon" />
            <span>Normalize sources into a single source of truth</span>
          </li>
          <li class="flex ai-center gap-1">
            <Link class="icon" /><span>Bi-directional syncs and mappings</span>
          </li>
          <li class="flex ai-center gap-1">
            <Bolt class="icon" /><span>Automated updates at the right cadence</span>
          </li>
        </ul>
      </ServiceBlock>
      <ServiceBlock title="Reliability">
        <ul class="details" style="list-style-type: none">
          <li class="flex ai-center gap-1">
            <Dashboard class="icon" />
            <span>Monitoring, retries, and audit trails</span>
          </li>
          <li class="flex ai-center gap-1">
            <Bolt class="icon" /><span>Error handling and data validation</span>
          </li>
        </ul>
      </ServiceBlock>
    </ServicesShell>
    <div class="mt-10 py-5">
      <SiteFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 35px;
  line-height: 1.5;

  @media (max-width: 900px) {
    font-size: 25px;
  }
}

.details {
  padding: 0;
  color: #444;
  font-size: 18px;

  @media (max-width: 950px) {
    font-size: 16px;
  }

  .icon {
    width: 28px !important;
    height: 28px !important;
  }

  li {
    margin-top: $space * 2;
  }
}

</style>
