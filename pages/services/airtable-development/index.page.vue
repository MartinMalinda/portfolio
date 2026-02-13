<script lang="ts" setup>
import BackButton from "../../../components/BackButton.vue";
import ServicesShell from "../../../components/ServicesShell.vue";
import SiteFooter from "../../../components/SiteFooter.vue";
import Button from "../../../components/Button.vue";
import ServiceBlock from "../../../components/ServiceBlock.vue";
import Bolt from "../../../components/icons/Bolt.vue";
import Bulb from "../../../components/icons/Bulb.vue";
import Chart from "../../../components/icons/Chart.vue";
import Dashboard from "../../../components/icons/Dashboard.vue";
import Database from "../../../components/icons/Database.vue";
import Dollar from "../../../components/icons/Dollar.vue";
import Link from "../../../components/icons/Link.vue";
import Map from "../../../components/icons/Map.vue";
import Rocket from "../../../components/icons/Rocket.vue";
</script>

<template>
  <div class="service-detail">
    <ServicesShell>
      <BackButton class="mt-2" url="/services">Back to services</BackButton>
      <ServiceBlock class="pt-2">
        <h2 class="service-title">Airtable development</h2>
        <div>
          Airtable systems, automation workflows, and internal interfaces built
          for reliability.
        </div>
      </ServiceBlock>
      <ServiceBlock title="Database design">
        <ul class="details" style="list-style-type: none">
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
            <Bulb class="icon" /><span>
              And come up with <b>new approaches & workflows</b></span
            >
          </li>
        </ul>
      </ServiceBlock>
      <ServiceBlock title="Automation">
        <ul class="details" style="list-style-type: none">
          <li class="flex ai-center gap-1">
            <Link class="icon" />
            <span>Keep <b>data synced, up to date, interlinked</b></span>
          </li>
          <li class="flex ai-center gap-1">
            <Bolt class="icon" />
            <span>Figure out how to <b>save energy & time</b></span>
          </li>
          <li class="flex ai-center gap-1">
            <Rocket class="icon" />
            <span>Tailored integrations & streamlining</span>
          </li>
        </ul>
        <template #media>
          <video
            src="/videos/automation.mp4"
            class="media"
            autoplay
            loop
            playsinline
            muted
          />
        </template>
      </ServiceBlock>
      <ServiceBlock title="Dashboards">
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
        <template #media>
          <video
            src="/videos/interfaces.mp4"
            class="media"
            autoplay
            loop
            playsinline
            muted
          />
        </template>
      </ServiceBlock>
      <ServiceBlock
        title="Airtable Invoicing Base"
        eyebrow="Free template"
        class="template-feature"
      >
        <template #description>
          <p class="template-feature__description">
            A lightweight invoicing system built on Airtable with dashboards,
            client tracking, and exports. Use it as a starting point or adapt it
            to your own workflow.
          </p>
        </template>
        <div class="template-feature__actions">
          <Button
            class="template-feature__button"
            href="https://airtable-invoicing-base.netlify.app/"
            target="_blank"
            size="small"
          >
            View template
          </Button>
        </div>
        <template #media>
          <a
            class="template-feature__preview"
            href="https://airtable-invoicing-base.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="template-feature__image"
              src="/invoicing-base.png"
              alt="Airtable invoicing base diagram"
              loading="lazy"
            />
          </a>
        </template>
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

.media {
  width: 400px;
  max-width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.template-feature .service-block__content {
  height: 100%;
}

.template-feature .service-block__body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.template-feature__description {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #3e4a5a;
  max-width: 520px;
}

.template-feature__actions {
  display: flex;
  gap: 12px;
  margin-top: auto;
  align-items: flex-start;
  justify-content: flex-start;
}

.template-feature__preview {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $space * 2;
  border-radius: 5px;
  background: #0f1115;
  border: 1px solid rgba(28, 35, 48, 0.12);
  text-decoration: none;
  position: relative;
  min-height: 220px;
  overflow: hidden;
}

.template-feature__image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

@media (max-width: 900px) {
  .template-feature__preview {
    min-height: 140px;
  }
}
</style>
