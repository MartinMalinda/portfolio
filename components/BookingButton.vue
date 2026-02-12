<script lang="ts" setup>
import Button from "./Button.vue";
import Calendar from "./Calendar.vue";

withDefaults(
  defineProps<{
    label?: string;
    size?: "small" | "smaller" | "medium" | "big" | "tiny";
  }>(),
  {
    label: "Book a meeting",
    size: "smaller",
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
</template>
