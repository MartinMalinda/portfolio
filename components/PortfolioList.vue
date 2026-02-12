<script lang="ts" setup>
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
</script>

<template>
  <section class="portfolio-section" id="Automation-portfolio">
    <h2>Automation &amp; Data</h2>
    <div class="projects flex gap-1">
      <a
        v-for="portfolioItem in automationPortfolio"
        :key="portfolioItem.id"
        :href="`/portfolio/${portfolioItem.fields.Slug}`"
        class="project"
        :class="{ active: isActive(portfolioItem.fields.Slug) }"
      >
        <img
          :alt="portfolioItem.fields.Name"
          loading="lazy"
          :src="`/images-portfolio/${portfolioItem.id}.png`"
        />
        <div class="px-1 py-1">
          <b>{{ portfolioItem.fields.Name }}</b>
        </div>
      </a>
    </div>
  </section>
  <section class="portfolio-section" id="Web-portfolio">
    <h2>Web development</h2>
    <div class="projects flex gap-1">
      <a
        v-for="portfolioItem in webPortfolio"
        :key="portfolioItem.id"
        :href="`/portfolio/${portfolioItem.fields.Slug}`"
        class="project"
        :class="{ active: isActive(portfolioItem.fields.Slug) }"
      >
        <img
          :alt="portfolioItem.fields.Name"
          loading="lazy"
          :src="`/images-portfolio/${portfolioItem.id}.png`"
        />
        <div class="px-1 py-1">
          <b>{{ portfolioItem.fields.Name }}</b>
        </div>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio-section {
  margin-bottom: $space * 4;

  h2 {
    font-size: 30px;
    margin-bottom: $space * 2;
  }
}

.projects {
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
}

.project {
  border-radius: 5px;
  max-width: 200px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: 0.2s transform, 0.2s box-shadow;
  background: white;

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    max-width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:hover {
    transform: scale(1.05);
  }

  &.active {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.14);
    border-color: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 900px) {
    width: calc(50% - 4px);
    flex-shrink: 0;
  }
}
</style>
