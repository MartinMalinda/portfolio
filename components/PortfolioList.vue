<script lang="ts" setup>
import CardLink from "./CardLink.vue";
import studentDatabase from "../data/student-database.json";
import feedbackMachine from "../data/feedback-machine.json";
import cashflowDashboard from "../data/cashflow-dashboard.json";
import releaseManagement from "../data/release-management.json";
import herohero from "../data/herohero.json";
import powersave from "../data/powersave.json";
import goout from "../data/goout.json";
import leadfeeder from "../data/leadfeeder.json";

const props = defineProps<{
  activeSlug?: string;
}>();

const automationPortfolio = [
  studentDatabase,
  feedbackMachine,
  cashflowDashboard,
  releaseManagement,
];

const webPortfolio = [powersave, herohero, goout, leadfeeder];

const isActive = (slug: string) => props.activeSlug === slug;

const cleanSummary = (text: string) => {
  if (!text) return "";
  const firstBlock = text.split(/\n\n|\n/)[0] || text;
  return firstBlock
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .replace(/[*_`>#-]/g, "")
    .trim();
};

const summarize = (text: string, maxLength = 140) => {
  const summary = cleanSummary(text);
  if (summary.length <= maxLength) return summary;
  return `${summary.slice(0, maxLength - 1).trim()}…`;
};
</script>

<template>
  <section class="portfolio-section" id="Automation-portfolio">
    <h2>Automation &amp; Data</h2>
    <div class="portfolio-cards">
      <CardLink
        v-for="portfolioItem in automationPortfolio"
        :key="portfolioItem.id"
        :href="`/portfolio/${portfolioItem.fields.Slug}`"
        :title="portfolioItem.fields.Name"
        :description="
          summarize(portfolioItem.fields['Description (from Notion)'])
        "
        cta="View case study"
        class="portfolio-card"
        :class="{ active: isActive(portfolioItem.fields.Slug) }"
      >
        <img
          :alt="portfolioItem.fields.Name"
          loading="lazy"
          :src="`/images-portfolio/${portfolioItem.id}.png`"
        />
      </CardLink>
    </div>
  </section>
  <section class="portfolio-section" id="Web-portfolio">
    <h2>Web development</h2>
    <div class="portfolio-cards">
      <CardLink
        v-for="portfolioItem in webPortfolio"
        :key="portfolioItem.id"
        :href="`/portfolio/${portfolioItem.fields.Slug}`"
        :title="portfolioItem.fields.Name"
        :description="
          summarize(portfolioItem.fields['Description (from Notion)'])
        "
        cta="View case study"
        class="portfolio-card"
        :class="{ active: isActive(portfolioItem.fields.Slug) }"
      >
        <img
          :alt="portfolioItem.fields.Name"
          loading="lazy"
          :src="`/images-portfolio/${portfolioItem.id}.png`"
        />
      </CardLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio-section {
  margin-bottom: $space * 4;

  h2 {
    font-size: 24px;
    margin-bottom: $space * 2;
  }
}

.portfolio-cards {
  display: flex;
  flex-direction: column;
  gap: $space * 2;
}

.portfolio-card {
  --card-padding: #{$space * 2};
  --card-columns: 140px minmax(0, 1fr) auto;
  --card-areas: "icon copy cta";
  --card-media-width: 140px;
  --card-media-height: 100px;
  --card-media-radius: 12px;
  --card-media-border: 1px solid rgba(0, 0, 0, 0.08);
  --card-media-background: rgba(0, 0, 0, 0.03);
  --card-media-overflow: hidden;
}

.portfolio-card.active {
  --card-border-color: rgba(0, 0, 0, 0.2);
  --card-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}

@media (max-width: 900px) {
  .portfolio-card {
    --card-columns-mobile: 1fr;
    --card-areas-mobile: "icon" "copy" "cta";
    --card-media-width: 100%;
    --card-media-height: 180px;
  }
}
</style>
