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
    <a href="/#portfolio"> Automation </a>
    \ {{ portfolioItem.fields.Name }}
  </div>
  <div class="flex mt-4 gap-2">
    <div>
      <h1>{{ portfolioItem.fields.Name }}</h1>
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
</template>

<style lang="scss" scoped>
.main-image {
  max-width: 100%;
  // position: absolute;
  // right: 0;
  // top: 0;
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
