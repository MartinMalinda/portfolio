<script lang="ts" setup>
import BookingButton from "./BookingButton.vue";
import Container from "./Container.vue";
</script>

<template>
  <footer class="site-footer">
    <Container>
      <div class="footer-row flex ai-center jc-space-between">
        <div>
          <div>&copy; Martin Malinda</div>
          Business ID: 05668115
        </div>
        <div class="contact-row flex gap-1">
          <BookingButton />
        </div>
      </div>
    </Container>
  </footer>
</template>

<style lang="scss" scoped>
.site-footer {
  padding: $space * 2;
  color: $almost-black;
  font-size: 12px;

  @media (max-width: 900px) {
    .footer-row {
      align-items: flex-start !important;
      gap: $space * 2;
      flex-direction: column;
    }

    .contact-row {
      flex-direction: column;
    }
  }
}
</style>
