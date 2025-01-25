<template>
  <div class="container">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 950px;

  @media (max-width: 820px) {
    width: 100%;
    padding-left: $space * 2;
    padding-right: $space * 2;
  }
}
</style>
