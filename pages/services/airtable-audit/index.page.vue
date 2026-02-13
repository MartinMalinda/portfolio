<script lang="ts" setup>
import BackButton from "../../../components/BackButton.vue";
import ProgressBanner from "../../../components/ProgressBanner.vue";
import ServiceBlock from "../../../components/ServiceBlock.vue";
import ServicesShell from "../../../components/ServicesShell.vue";
import SiteFooter from "../../../components/SiteFooter.vue";
import Bolt from "../../../components/icons/Bolt.vue";
import Chart from "../../../components/icons/Chart.vue";
import Database from "../../../components/icons/Database.vue";
import Link from "../../../components/icons/Link.vue";
import Mag from "../../../components/icons/Mag.vue";
</script>

<template>
  <div class="service-detail">
    <ServicesShell>
      <BackButton class="mt-2" url="/services">Back to services</BackButton>
      <ProgressBanner />
      <ServiceBlock class="pt-2">
        <h2 class="service-title">Airtable audit</h2>
        <div>
          Structured review of existing Airtable systems to improve clarity,
          performance, and reliability.
        </div>
      </ServiceBlock>
      <ServiceBlock title="Audit & review">
        <ul class="details" style="list-style-type: none">
          <li class="flex ai-center gap-1">
            <Mag class="icon" /><span>Schema review and base health check</span>
          </li>
          <li class="flex ai-center gap-1">
            <Database class="icon" />
            <span>Table structure, fields, and relationships</span>
          </li>
          <li class="flex ai-center gap-1">
            <Link class="icon" /><span>Automation and integration mapping</span>
          </li>
        </ul>
      </ServiceBlock>
      <ServiceBlock title="Recommendations">
        <ul class="details" style="list-style-type: none">
          <li class="flex ai-center gap-1">
            <Bolt class="icon" /><span>Performance improvements and quick wins</span>
          </li>
          <li class="flex ai-center gap-1">
            <Chart class="icon" />
            <span>Roadmap with effort and impact estimates</span>
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
