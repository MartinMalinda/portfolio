<script lang="ts" setup>
import ServicesShell from "../../../components/ServicesShell.vue";
import SiteFooter from "../../../components/SiteFooter.vue";
import Bolt from "../../../components/icons/Bolt.vue";
import Bulb from "../../../components/icons/Bulb.vue";
import Chart from "../../../components/icons/Chart.vue";
import Dashboard from "../../../components/icons/Dashboard.vue";
import Database from "../../../components/icons/Database.vue";
import Dollar from "../../../components/icons/Dollar.vue";
import Link from "../../../components/icons/Link.vue";
import Mag from "../../../components/icons/Mag.vue";
import Map from "../../../components/icons/Map.vue";
import Rocket from "../../../components/icons/Rocket.vue";
</script>

<template>
  <div class="service-detail">
    <ServicesShell>
      <div class="pt-3">
        <div class="breadcrumbs">
          <a href="/services">Services</a>
          \ Airtable development
        </div>
        <h2 class="service-title">Airtable development</h2>
        <p>
          Airtable systems, automation workflows, and internal interfaces built
          for reliability.
        </p>
      </div>
      <h3>Automation & Data management</h3>
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
      <div class="proof">
        <h3>Proof of depth</h3>
        <p>
          Systems work I handle often looks like this. Short, concrete, and
          reliability-focused.
        </p>
        <ul class="details" style="list-style-type: none">
          <li class="flex ai-center gap-1">
            <Bolt class="icon" />
            <span>
              Airtable ↔ Slack integrations with high-volume activity and
              clear audit trails
            </span>
          </li>
          <li class="flex ai-center gap-1">
            <Database class="icon" />
            <span>
              Schema caching and base design for large, evolving Airtable
              structures
            </span>
          </li>
          <li class="flex ai-center gap-1">
            <Link class="icon" />
            <span>OAuth migrations, token custody, and permission hygiene</span>
          </li>
          <li class="flex ai-center gap-1">
            <Rocket class="icon" />
            <span>Performance-focused UI systems for internal tools</span>
          </li>
        </ul>
      </div>
      <div class="pt-7">
        <h3>Dashboards</h3>
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

.proof {
  margin-top: $space * 4;

  p {
    max-width: 720px;
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
