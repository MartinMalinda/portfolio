<script lang="ts" setup>
import { computed, DefineComponent } from "vue";

const props = defineProps<{
  href: string;
  title: string;
  description: string;
  cta: string;
  icon?: DefineComponent;
  disabled?: boolean;
}>();

const isExternal = computed(() => /^https?:\/\//.test(props.href));
</script>

<template>
  <a
    class="card"
    :class="{ 'card--disabled': disabled }"
    :href="disabled ? undefined : href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :aria-disabled="disabled ? 'true' : undefined"
    :tabindex="disabled ? -1 : undefined"
  >
    <div class="card-icon">
      <slot>
        <component v-if="icon" :is="icon" />
      </slot>
    </div>
    <div class="card-copy">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div v-if="!disabled" class="card-cta">
      {{ cta }} <span class="arrow">→</span>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid var(--card-border-color, rgba(0, 0, 0, 0.08));
  border-radius: var(--card-radius, 14px);
  padding: var(--card-padding, #{$space * 2.5});
  background: var(--card-background, white);
  display: grid;
  grid-template-columns: var(--card-columns, 64px minmax(0, 1fr) auto);
  grid-template-areas: var(--card-areas, "icon copy cta");
  align-items: center;
  justify-items: start;
  gap: var(--card-gap, #{$space * 2});
  box-shadow: var(--card-shadow, 0 10px 25px rgba(0, 0, 0, 0.06));
  text-decoration: none;
  color: inherit;
  transition:
    0.2s transform,
    0.2s box-shadow,
    0.2s border-color;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--card-shadow-hover, 0 16px 30px rgba(0, 0, 0, 0.1));
    border-color: var(--card-border-color-hover, rgba(0, 0, 0, 0.12));

    .arrow {
      transform: translateX(4px);
    }
  }

  h2 {
    margin: 0;
    font-size: var(--card-title-size, 20px);
  }

  p {
    margin: 0;
    line-height: 1.45;
    color: $dark-grey;
    max-width: 520px;
    opacity: 0.8;
  }

  @media (max-width: 800px) {
    grid-template-columns: var(--card-columns-mobile, 54px 1fr);
    grid-template-areas: var(--card-areas-mobile, "icon copy" "cta cta");
    row-gap: var(--card-row-gap-mobile, #{$space * 1.5});
    justify-items: start;
  }
}

.card--disabled {
  border-color: var(--card-border-color-disabled, rgba(0, 0, 0, 0.05));
  box-shadow: none;
  cursor: default;

  &:hover {
    transform: none;
    box-shadow: none;
    border-color: var(--card-border-color-disabled, rgba(0, 0, 0, 0.05));
  }
}

.card-icon {
  width: var(--card-media-width, 54px);
  height: var(--card-media-height, 54px);
  border-radius: var(--card-media-radius, 16px);
  background: var(--card-media-background, rgba(0, 0, 0, 0.04));
  border: var(--card-media-border, none);
  overflow: var(--card-media-overflow, visible);
  display: grid;
  place-items: center;
  flex-shrink: 0;
  grid-area: icon;

  :deep(svg) {
    width: 28px;
    height: 28px;
  }

  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 0;
    display: block;
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
