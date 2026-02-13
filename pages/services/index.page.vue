<script lang="ts" setup>
import Button from "../../components/Button.vue";
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
          title="Process audit"
          description="Hollistic workflow mapping, automation strategy."
          cta="View service"
          :icon="Bolt"
        />
        <CardLink
          href="/services/airtable-development"
          title="Airtable development"
          description="Airtable bases and internal tools built for clarity and scale."
          cta="View service"
          :icon="Airtable"
        />
        <CardLink
          href="/services/airtable-audit"
          title="Airtable audit"
          description="Audit, and performance review for existing Airtable systems."
          cta="View service"
          :icon="Airtable"
          :disabled="true"
        />
        <CardLink
          href="/services/web-development"
          title="Web development"
          description="Fast, dependable internal UIs and web apps with clean architecture."
          cta="View service"
          :icon="VueLogo"
          :disabled="true"
        />
        <CardLink
          href="/services/data-synchronization"
          title="Data synchronization"
          description="Keep data synced, accurate, and traceable across tools and teams."
          cta="View service"
          :icon="Database"
          :disabled="true"
        />
        <CardLink
          href="/services/internal-tooling"
          title="Internal tooling"
          description="Dashboards, admin tools, and bespoke workflows for ops teams."
          cta="View service"
          :icon="Dashboard"
          :disabled="true"
        />
      </div>
      <section class="ask-ai-block">
        <h2>Ask AI about my services</h2>
        <p>Build a focused prompt and open it in your AI chatbot of choice.</p>
        <Button href="/chat" size="smaller">Open Ask AI</Button>
      </section>
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

.ask-ai-block {
  margin-top: $space * 4;
  padding: $space * 3;
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: linear-gradient(
    135deg,
    rgba(189, 104, 255, 0.12),
    rgba(255, 255, 255, 0.6)
  );
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $space;
}

.ask-ai-block h2 {
  margin: 0;
  font-size: 26px;
}

.ask-ai-block p {
  margin: 0;
  max-width: 520px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.6;
}
</style>
