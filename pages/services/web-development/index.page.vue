<script lang="ts" setup>
import Button from "../../../components/Button.vue";
import ServicesShell from "../../../components/ServicesShell.vue";
import SiteFooter from "../../../components/SiteFooter.vue";
import Bolt from "../../../components/icons/Bolt.vue";
import Mag from "../../../components/icons/Mag.vue";
import Rocket from "../../../components/icons/Rocket.vue";
</script>

<template>
  <div class="service-detail">
    <ServicesShell>
      <div class="pt-3">
        <div class="breadcrumbs">
          <a href="/services">Services</a>
          \ Web development
        </div>
        <h2 class="service-title">Web development</h2>
        <p>Web interfaces and internal tools that stay fast under load.</p>
      </div>
      <div class="tools"></div>
      <p>
        My expertise lies in building web user interfaces that load fast and
        stay fast. <br />
        I have a lot of experience with Vue.js, TypeScript and building complex
        web applications.
      </p>
      <ul class="details" style="list-style-type: none">
        <li class="flex ai-center gap-1">
          <Rocket class="icon" />
          <span><b>Building MVPs</b></span>
        </li>
        <li class="flex ai-center gap-1">
          <Mag class="icon" />
          <span
            ><b>Code review & consulting:</b> <br />
            Libraries, patterns, architecture, build tooling and component
            design.
          </span>
        </li>
        <li class="flex ai-center gap-1">
          <Bolt class="icon" />
          <span
            ><b>Performance:</b> Identify performance bottlenecks and implement
            fixes.</span
          >
        </li>
      </ul>
      <div class="pt-5">
        <Button href="/portfolio" variant="secondary" size="small">
          View selected work
        </Button>
      </div>
    </ServicesShell>
    <div class="mt-10 py-5">
      <SiteFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.details {
  padding: 0;
  color: #444;
  font-size: 20px;

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
