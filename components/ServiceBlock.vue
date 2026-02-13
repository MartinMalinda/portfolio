<script setup lang="ts">
import { computed, useSlots } from "vue";

const props = defineProps<{
  title?: string;
  eyebrow?: string;
}>();

const slots = useSlots();
const hasMedia = computed(() => !!slots.media);
</script>

<template>
  <section class="service-block">
    <div class="service-block__grid" :class="{ 'has-media': hasMedia }">
      <div class="service-block__content">
        <p v-if="eyebrow" class="service-block__eyebrow">
          {{ eyebrow }}
        </p>
        <h3 v-if="title" class="service-block__title">{{ title }}</h3>
        <slot name="description" />
        <div class="service-block__body">
          <slot />
        </div>
      </div>
      <div v-if="hasMedia" class="service-block__media">
        <slot name="media" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.service-block {
  border: 1px solid rgba(23, 33, 48, 0.08);
  border-radius: 5px;
  padding: $space * 2;
  background: #ffffff;
  margin-top: $space * 2;
}

.service-block__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 32px;
}

.service-block__grid.has-media {
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
}

.service-block__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.service-block__eyebrow {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7a5f4b;
}

.service-block__title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #1c2330;
}

.service-block__body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.service-block__media {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 900px) {
  .service-block__grid.has-media {
    grid-template-columns: 1fr;
  }
}
</style>
