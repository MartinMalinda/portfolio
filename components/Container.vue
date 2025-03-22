<template>
  <div class="container">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 950px;
  max-width: 100%;

  @media (max-width: 950px) {
    width: 100%;
    padding-left: $space * 2;
    padding-right: $space * 2;
  }
}
</style>
