<template>
  <a v-bind="attrs" :class="[attrs.class, { active: isActive }]">
    <slot />
  </a>
</template>
<style scoped>
a {
  padding: 3px 10px;
}
a.active {
  background-color: #eee;
}
</style>
<script lang="ts" setup>
import { computed, useAttrs } from "vue";
import { usePageContext } from "./usePageContext";

const attrs = useAttrs();
const pageContext = usePageContext();

const isActive = computed(() => {
  const href = typeof attrs.href === "string" ? attrs.href : "";
  const path = pageContext.urlPathname || "";
  if (!href) return false;
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
});
</script>
