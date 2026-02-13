<script setup lang="ts">
import Button from "./Button.vue";

const { url } = defineProps<{
  url: string;
}>();
</script>

<template>
  <Button class="back-button" :href="url" variant="secondary" size="small">
    <span class="back-button__arrow">&larr;</span>
    <slot>Back</slot>
  </Button>
</template>

<style lang="scss" scoped>
.back-button__arrow {
  margin-right: $space / 2;
  display: inline-block;
  transition: 0.2s transform;
}

/* .back-button:hover .back-button__arrow {
  transform: translateX(-2px);
} */
</style>
