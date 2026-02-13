<script lang="ts" setup>
import BackButton from "../../../components/BackButton.vue";
import Button from "../../../components/Button.vue";
import ProgressBanner from "../../../components/ProgressBanner.vue";
import ServiceBlock from "../../../components/ServiceBlock.vue";
import ServicesShell from "../../../components/ServicesShell.vue";
import SiteFooter from "../../../components/SiteFooter.vue";
import Bolt from "../../../components/icons/Bolt.vue";
import Mag from "../../../components/icons/Mag.vue";
import Rocket from "../../../components/icons/Rocket.vue";
</script>

<template>
  <div class="service-detail">
    <ServicesShell>
      <BackButton class="mt-2" url="/services">Back to services</BackButton>
      <ProgressBanner />
      <ServiceBlock class="pt-2">
        <h2 class="service-title">Web development</h2>
        <div>Web interfaces and internal tools that stay fast under load.</div>
      </ServiceBlock>
      <ServiceBlock title="What I build">
        <div>
          Fast, dependable UIs in Vue + TypeScript with clean architecture and
          maintainable components.
        </div>
        <ul class="details" style="list-style-type: none">
          <li class="flex ai-center gap-1">
            <Rocket class="icon" /><span><b>Building MVPs</b></span>
          </li>
          <li class="flex ai-center gap-1">
            <Mag class="icon" />
            <span
              ><b>Code review & consulting:</b> Libraries, patterns, build
              tooling, and component design.</span
            >
          </li>
          <li class="flex ai-center gap-1">
            <Bolt class="icon" />
            <span
              ><b>Performance:</b> Identify bottlenecks and implement fixes.</span
            >
          </li>
        </ul>
      </ServiceBlock>
      <ServiceBlock title="Selected work">
        <Button href="/portfolio" variant="secondary" size="small">
          View selected work
        </Button>
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
