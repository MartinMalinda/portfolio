<script lang="ts" setup>
import BackButton from "../../../components/BackButton.vue";
import ProgressBanner from "../../../components/ProgressBanner.vue";
import ServiceBlock from "../../../components/ServiceBlock.vue";
import ServicesShell from "../../../components/ServicesShell.vue";
import SiteFooter from "../../../components/SiteFooter.vue";
import Bolt from "../../../components/icons/Bolt.vue";
import Dashboard from "../../../components/icons/Dashboard.vue";
import Mag from "../../../components/icons/Mag.vue";
import Rocket from "../../../components/icons/Rocket.vue";
</script>

<template>
  <div class="service-detail">
    <ServicesShell>
      <BackButton class="mt-2" url="/services">Back to services</BackButton>
      <ProgressBanner />
      <ServiceBlock class="pt-2">
        <h2 class="service-title">Internal tooling</h2>
        <div>
          Dashboards and admin tools that stay fast, clear, and reliable for
          day-to-day operations.
        </div>
      </ServiceBlock>
      <ServiceBlock title="Tooling strategy">
        <ul class="details" style="list-style-type: none">
          <li class="flex ai-center gap-1">
            <Mag class="icon" /><span>Audit workflows and pain points</span>
          </li>
          <li class="flex ai-center gap-1">
            <Dashboard class="icon" /><span>Design dashboards with clear KPIs</span>
          </li>
          <li class="flex ai-center gap-1">
            <Bolt class="icon" /><span>Prioritize high-impact automations</span>
          </li>
        </ul>
      </ServiceBlock>
      <ServiceBlock title="Delivery & UX">
        <ul class="details" style="list-style-type: none">
          <li class="flex ai-center gap-1">
            <Rocket class="icon" /><span>Build fast, dependable UIs</span>
          </li>
          <li class="flex ai-center gap-1">
            <Dashboard class="icon" /><span>Role-based access and audit trails</span>
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
