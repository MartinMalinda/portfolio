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
      <a
        v-for="portfolioItem in automationPortfolio"
        :key="portfolioItem.id"
        :href="`/portfolio/${portfolioItem.fields.Slug}`"
        class="portfolio-card"
        :class="{ active: isActive(portfolioItem.fields.Slug) }"
      >
        <div class="card-image">
          <img
            :alt="portfolioItem.fields.Name"
            loading="lazy"
            :src="`/images-portfolio/${portfolioItem.id}.png`"
          />
        </div>
        <div class="card-copy">
          <h3>{{ portfolioItem.fields.Name }}</h3>
          <p>
            {{ summarize(portfolioItem.fields["Description (from Notion)"]) }}
          </p>
        </div>
        <div class="card-cta">
          View case study <span class="arrow">→</span>
        </div>
      </a>
    </div>
  </section>
  <section class="portfolio-section" id="Web-portfolio">
    <h2>Web development</h2>
    <div class="portfolio-cards">
      <a
        v-for="portfolioItem in webPortfolio"
        :key="portfolioItem.id"
        :href="`/portfolio/${portfolioItem.fields.Slug}`"
        class="portfolio-card"
        :class="{ active: isActive(portfolioItem.fields.Slug) }"
      >
        <div class="card-image">
          <img
            :alt="portfolioItem.fields.Name"
            loading="lazy"
            :src="`/images-portfolio/${portfolioItem.id}.png`"
          />
        </div>
        <div class="card-copy">
          <h3>{{ portfolioItem.fields.Name }}</h3>
          <p>
            {{ summarize(portfolioItem.fields["Description (from Notion)"]) }}
          </p>
        </div>
        <div class="card-cta">
          View case study <span class="arrow">→</span>
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

.portfolio-cards {
  display: flex;
  flex-direction: column;
  gap: $space * 2;
}

.portfolio-card {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  padding: $space * 2;
  background: white;
  display: grid;
  grid-template-columns: 140px minmax(0, 1fr) auto;
  grid-template-areas: "image copy cta";
  align-items: center;
  justify-items: start;
  gap: $space * 2;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  text-decoration: none;
  color: inherit;
  transition: 0.2s transform, 0.2s box-shadow, 0.2s border-color;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.12);

    .arrow {
      transform: translateX(4px);
    }
  }

  &.active {
    border-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "image"
      "copy"
      "cta";
    justify-items: start;
  }
}

.card-image {
  grid-area: image;
  width: 140px;
  height: 100px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(0, 0, 0, 0.03);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 0;
    display: block;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 180px;
  }
}

.card-copy {
  grid-area: copy;
  min-width: 0;
  text-align: left;
  padding-right: $space * 2;

  h3 {
    margin: 0 0 $space / 1.5 0;
    font-size: 24px;
  }

  p {
    margin: 0;
    line-height: 1.6;
    color: $dark-grey;
  }
}

.card-cta {
  grid-area: cta;
  color: $dark-grey;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: $space / 2;
  white-space: nowrap;
  justify-self: end;

  @media (max-width: 900px) {
    justify-self: start;
  }
}

.arrow {
  transition: 0.2s transform;
}
</style>
