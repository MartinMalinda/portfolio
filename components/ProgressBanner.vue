<script lang="ts" setup>
withDefaults(
  defineProps<{ text?: string }>(),
  { text: "This page is in progress." }
);
</script>

<template>
  <div class="progress-banner">{{ text }}</div>
</template>

<style lang="scss" scoped>
.progress-banner {
  margin-top: $space;
  margin-bottom: $space * 1.5;
  padding: $space;
  border-radius: 12px;
  background: #fff5b1;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #4a3b00;
  font-weight: 600;
}
</style>
