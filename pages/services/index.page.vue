<script lang="ts" setup>
import Button from "../../components/Button.vue";
import Container from "../../components/Container.vue";
import SiteFooter from "../../components/SiteFooter.vue";
import Database from "../../components/icons/Database.vue";
import Bolt from "../../components/icons/Bolt.vue";
import Bulb from "../../components/icons/Bulb.vue";
import Map from "../../components/icons/Map.vue";
import Link from "../../components/icons/Link.vue";
import Chart from "../../components/icons/Chart.vue";
import Mag from "../../components/icons/Mag.vue";
import Rocket from "../../components/icons/Rocket.vue";
import Dollar from "../../components/icons/Dollar.vue";
import Dashboard from "../../components/icons/Dashboard.vue";
</script>

<template>
  <div class="services">
    <div class="hero">
      <Container>
        <h1>Services</h1>
        <p>I build fast web interfaces and automate business processes.</p>
        <Button
          href="https://forms.fillout.com/t/q9mEPmvDvBus"
          target="blank"
          variant="primary"
          size="smaller"
          >Let's talk</Button
        >
      </Container>
    </div>
    <Container class="block">
      <h2>Automation & Data management</h2>
      <div class="tools"></div>
      <div class="flex gap-2 jc-space-between ai-center pt-4 two-columns">
        <div class="content">
          <ul class="details" style="list-style-type: none">
            <li class="flex ai-center gap-1">
              <Mag class="icon" /><span>
                Let me review your <b>internal data</b></span
              >
            </li>
            <li class="flex ai-center gap-1">
              <Database class="icon" /><span>
                Create and manage a <b>single source of truth</b></span
              >
            </li>
            <li class="flex ai-center gap-1">
              <Bolt class="icon" /><span>
                Figure out how to <b>save energy & time</b></span
              >
            </li>
            <li class="flex ai-center gap-1">
              <Link class="icon" /><span>
                Keep <b>data synced, up to date, interlinked</b></span
              >
            </li>
            <li class="flex ai-center gap-1">
              <Map class="icon" /><span>
                Let's <b>map and review processes</b></span
              >
            </li>
            <li class="flex ai-center gap-1">
              <Bulb class="icon" /><span>
                And come up with <b>new approaches & workflows</b></span
              >
            </li>
          </ul>
        </div>
        <video
          src="/videos/automation.mp4"
          class="media"
          autoplay
          loop
          playsinline
          muted
        />
      </div>
      <div class="pt-7">
        <h2>Dashboards</h2>
        <div class="flex gap-2 jc-space-between ai-center pt-4 two-columns">
          <video
            src="/videos/interfaces.mp4"
            class="media"
            autoplay
            loop
            playsinline
            muted
          />
          <ul class="details" style="list-style-type: none">
            <li class="flex ai-center gap-1">
              <Dashboard class="icon" />
              <span>Data visualized, <b>always up to date</b></span>
            </li>
            <li class="flex ai-center gap-1">
              <Dollar class="icon" />
              <span>Financial overviews</span>
            </li>
            <li class="flex ai-center gap-1">
              <Chart class="icon" />
              <span>Analytics</span>
            </li>
            <li class="flex ai-center gap-1">
              <Rocket class="icon" />
              <span>Performance Metrics</span>
            </li>
            <li class="flex ai-center gap-1">
              <Link class="icon" />
              <span>Data aggregated, integrated</span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
    <div class="mb-8 mt-8 my-sm-2" />
    <Container class="block">
      <h2>Web development</h2>
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
    </Container>
    <div class="mt-10 py-5">
      <SiteFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  max-width: 100%;
  padding: $space * 6 $space * 4;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 0, 0.08),
    rgba(0, 0, 0, 0.06)
  );
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    padding-left: $space * 2;
    padding-right: $space * 2;
    padding-top: $space * 6;
  }

  h1 {
    margin-top: 0;
    font-size: 38px;
    line-height: 1.4;
  }

  p {
    line-height: 1.6;
    font-size: 19px;
    font-weight: 500;
  }
}

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

.media {
  width: 400px;
  max-width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.two-columns {
  @media (max-width: 900px) {
    display: block;
  }
}
</style>
