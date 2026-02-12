<script lang="ts" setup>
import { computed, DefineComponent } from "vue";

const props = defineProps<{
  href: string;
  title: string;
  description: string;
  cta: string;
  icon: DefineComponent;
}>();

const isExternal = computed(() => /^https?:\/\//.test(props.href));
</script>

<template>
  <a
    class="card"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <div class="card-icon">
      <component :is="icon" />
    </div>
    <div class="card-copy">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="card-cta">
      {{ cta }} <span class="arrow">→</span>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  padding: $space * 2.5;
  background: white;
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) auto;
  grid-template-areas: "icon copy cta";
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

  h2 {
    margin: 0 0 $space 0;
    font-size: 28px;
  }

  p {
    margin: 0;
    line-height: 1.6;
    color: $dark-grey;
    max-width: 520px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 54px 1fr;
    grid-template-areas:
      "icon copy"
      "cta cta";
    row-gap: $space * 1.5;
    justify-items: start;
  }
}

.card-icon {
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.04);
  display: grid;
  place-items: center;
  flex-shrink: 0;
  grid-area: icon;

  :deep(svg) {
    width: 28px;
    height: 28px;
  }
}

.card-copy {
  grid-area: copy;
  min-width: 0;
  text-align: left;
  padding-right: $space * 2;
}

.card-cta {
  color: $dark-grey;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: $space / 2;
  white-space: nowrap;
  justify-self: end;
  grid-area: cta;

  @media (max-width: 800px) {
    justify-self: start;
  }
}

.arrow {
  transition: 0.2s transform;
}
</style>
