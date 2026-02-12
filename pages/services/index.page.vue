<script lang="ts" setup>
import CardLink from "../../components/CardLink.vue";
import ServicesShell from "../../components/ServicesShell.vue";
import SiteFooter from "../../components/SiteFooter.vue";
import Airtable from "../../components/icons/Airtable.vue";
import Bolt from "../../components/icons/Bolt.vue";
import Dashboard from "../../components/icons/Dashboard.vue";
import Database from "../../components/icons/Database.vue";
import Link from "../../components/icons/Link.vue";
import Mag from "../../components/icons/Mag.vue";
import VueLogo from "../../components/icons/Vue.vue";
</script>

<template>
  <div class="services">
    <ServicesShell>
      <div class="cards">
        <CardLink
          href="/services/process-automation"
          title="Process automation"
          description="Workflow mapping, automation strategy, and reliable execution across teams."
          cta="View service"
          :icon="Bolt"
        />
        <CardLink
          href="/services/airtable-development"
          title="Airtable development"
          description="Airtable bases, data models, and internal tools built for clarity and scale."
          cta="View service"
          :icon="Airtable"
        />
        <CardLink
          href="/services/airtable-audit"
          title="Airtable audit"
          description="Audit, cleanup, and performance review for existing Airtable systems."
          cta="View service"
          :icon="Airtable"
        />
        <CardLink
          href="/services/web-development"
          title="Web development"
          description="Fast, dependable internal UIs and web apps with clean architecture."
          cta="View service"
          :icon="VueLogo"
        />
        <CardLink
          href="/services/data-synchronization"
          title="Data synchronization"
          description="Keep data synced, accurate, and traceable across tools and teams."
          cta="View service"
          :icon="Database"
        />
        <CardLink
          href="/services/internal-tooling"
          title="Internal tooling"
          description="Dashboards, admin tools, and bespoke workflows for ops teams."
          cta="View service"
          :icon="Dashboard"
        />
      </div>
    </ServicesShell>
    <div class="mt-10 py-5">
      <SiteFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-direction: column;
  gap: $space * 2.5;
  margin-top: $space * 3;
}
</style>
