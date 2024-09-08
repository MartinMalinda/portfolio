<script setup lang="ts">
import MarkdownIt from "markdown-it";
import releaseManagement from "../../data/release-management.json";
import Button from "../../components/Button.vue";
import CornerArrow from "../../components/icons/CornerArrow.vue";

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
  <div class="breadcrumbs">
    <a href="/#portfolio"> Automation projects </a>
    \ {{ portfolioItem.fields.Name }}
  </div>
  <div class="flex mt-4">
    <div>
      <h1>{{ portfolioItem.fields.Name }}</h1>
      <!-- Render the markdown content as raw HTML -->
      <div class="content" v-html="markdownContent"></div>
    </div>
    <div>
      <img
        class="main-image"
        :src="`/images-portfolio/${portfolioItem.id}.png`"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-image {
  max-width: 150px;
  border-radius: 10px;
  float: right;
  margin-left: $space * 2;
  // position: absolute;
  // right: 0;
  // top: 0;
}

.breadcrumbs {
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.01);
  padding: $space * 2;
  border-radius: 5px;
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
</style>
