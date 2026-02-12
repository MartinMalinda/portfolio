<script lang="ts" setup>
import Button from "./Button.vue";
import Calendar from "./Calendar.vue";

withDefaults(
  defineProps<{
    label?: string;
    size?: "small" | "smaller" | "medium" | "big" | "tiny";
    showSubtext?: boolean;
  }>(),
  {
    label: "Book a meeting",
    size: "smaller",
    showSubtext: true,
  },
);
</script>

<template>
  <Button
    href="https://forms.fillout.com/t/q9mEPmvDvBus"
    target="blank"
    variant="primary"
    :icon="Calendar"
    :size="size"
  >
    {{ label }}
  </Button>
  <div v-if="showSubtext" class="cta-subtext">
    30 minutes free - operations, automations, single source of truth
  </div>
</template>

<style lang="scss" scoped>
.cta-subtext {
  margin-top: $space;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: 500;
}
</style>
