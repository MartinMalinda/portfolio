<script lang="ts" setup>
import Container from "./Container.vue";
</script>

<template>
  <div class="portfolio-shell">
    <div class="hero">
      <Container>
        <h1>Case Studies</h1>
        <p>
          Selected automation systems, Airtable workflows, and internal tools
          with real-world constraints and outcomes.
        </p>
      </Container>
    </div>
    <Container class="block">
      <slot />
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  max-width: 100%;
  padding: $space * 6 $space * 4;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 0, 0.08),
    rgba(0, 0, 0, 0.06)
  );
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    padding-left: $space * 2;
    padding-right: $space * 2;
    padding-top: $space * 6;
  }

  h1 {
    margin-top: 0;
    font-size: 38px;
  }

  p {
    line-height: 1.6;
    font-size: 19px;
    font-weight: 500;
  }
}

</style>
