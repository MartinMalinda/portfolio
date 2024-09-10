<script setup lang="ts">
import MarkdownIt from "markdown-it";
import releaseManagement from "../../data/release-management.json";
import Button from "../../components/Button.vue";
import Container from "../../components/Container.vue";

// Initialize markdown-it instance
const md = new MarkdownIt();

const props = defineProps<{
  portfolioItem: typeof releaseManagement;
}>();

// Render markdown string to HTML
const markdownContent = md.render(
  props.portfolioItem.fields["Description (from Notion)"]
);
</script>

<template>
  <Container class="pt-3">
    <div class="breadcrumbs">
      <a :href="`/#${portfolioItem.fields.Select}-portfolio`">
        {{ portfolioItem.fields.Select }}
      </a>
      \ {{ portfolioItem.fields.Name }}
    </div>
    <div class="flex mt-4 gap-4">
      <div>
        <h1>{{ portfolioItem.fields.Name }}</h1>
        <div class="period mt-2 flex">
          <div class="tag">
            {{ portfolioItem.fields["Year start"] }}
            <template v-if="!portfolioItem.fields['Year end']">
              - Now
            </template>
            <template
              v-else-if="
                portfolioItem.fields['Year end'] !==
                portfolioItem.fields['Year start']
              "
            >
              - {{ portfolioItem.fields["Year end"] }}
            </template>
          </div>
        </div>
        <!-- Render the markdown content as raw HTML -->
        <div class="content" v-html="markdownContent"></div>
      </div>
      <div class="side-panel">
        <img
          class="main-image"
          :src="`/images-portfolio/${portfolioItem.id}.png`"
        />
        <div class="px-1 py-1">
          <strong>Project size</strong>
          <div class="flex mt-1">
            <div class="tag">
              {{ portfolioItem.fields["Project size"] }}
            </div>
          </div>
          <div class="mt-2"></div>
          <strong>Tags</strong>
          <div class="flex mt-1 flex-wrap gap-xs">
            <div class="tag" v-for="tag in portfolioItem.fields.Tags">
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="cta py-4 mt-2 mb-4 px-4 flex fd-column ai-center jc-center text-center"
    >
      <h3>{{ portfolioItem.fields.CTA.value }}</h3>
      <Button
        href="https://forms.fillout.com/t/q9mEPmvDvBus"
        target="blank"
        variant="primary"
        style="width: 200px"
        >Let's talk</Button
      >
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.main-image {
  max-width: 100%;
}

.breadcrumbs {
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.01);
  padding: $space * 2;
  border-radius: 5px;
}

.side-panel {
  background: rgba(0, 0, 0, 0.01);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  overflow: hidden;
  width: 180px;
  flex-shrink: 0;

  strong {
    font-size: 14px;
  }
}

.cta {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 0, 0.2),
    rgba(255, 0, 0, 0.15),
    /* Slight red in the middle */ rgba(0, 140, 255, 0.2)
  );
  // border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  h3 {
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.516);
    font-size: 22px;
    line-height: 1.5;
    max-width: 500px;
    margin-top: 0;
  }
}

h1 {
  margin: 0;
}

.content {
  ::v-deep(*) {
    line-height: 1.5;
  }

  ::v-deep(a) {
    color: darken(yellow, 20%);
  }

  ::v-deep(li) {
    margin-bottom: $space / 2;
  }

  ::v-deep(strong) {
    font-weight: 600;
    letter-spacing: 0.2px;
  }
}

.tag {
  // background: lighten($yellow, 20%);
  background: rgb(250, 225, 145);
  border-radius: 5px;
  // color: white;
  padding: $space / 4 $space / 2;
  font-size: 14px;
}
</style>
