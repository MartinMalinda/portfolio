<script lang="ts" setup>
import Button from "../../components/Button.vue";
import Container from "../../components/Container.vue";
import SiteFooter from "../../components/SiteFooter.vue";
</script>

<template>
  <div class="products">
    <div class="hero">
      <Container>
        <h1>Products</h1>
        <p>
          Practical tools built from real client workflows and everyday
          automation needs.
        </p>
      </Container>
    </div>
    <Container class="block">
      <div class="product-card">
        <div>
          <h2>Powersave</h2>
          <p>
            Save ASAP with AI. Save more, categorize & analyze as you browse to
            Airtable, Coda, Notion and elsewhere.
          </p>
        </div>
        <div class="actions">
          <Button
            href="https://powersave.pro"
            target="_blank"
            variant="secondary"
            size="small"
            >Visit site</Button
          >
        </div>
      </div>
      <div class="product-card">
        <div>
          <h2>Powersync</h2>
          <p>
            Supercharge your Airtable and unlock new flows Track base history,
            connect Slack and Stripe and more.
          </p>
        </div>
        <div class="actions">
          <Button
            href="https://sync.powersave.pro"
            target="_blank"
            variant="secondary"
            size="small"
            >Visit site</Button
          >
        </div>
      </div>
    </Container>
    <div class="mt-10 py-5">
      <SiteFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  max-width: 100%;
  padding: $space * 6 $space * 4;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.05),
    rgba(255, 255, 255, 0.4)
  );
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    padding-left: $space * 2;
    padding-right: $space * 2;
    padding-top: $space * 6;
  }

  h1 {
    margin-top: 0;
    font-size: 38px;
  }

  p {
    line-height: 1.6;
    font-size: 19px;
    font-weight: 500;
  }
}

.product-card {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  padding: $space * 2.5;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: $space * 2;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  margin-bottom: $space * 2.5;

  h2 {
    margin: 0 0 $space 0;
    font-size: 28px;
  }

  p {
    margin: 0;
    line-height: 1.6;
    color: $dark-grey;
    max-width: 520px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.product-card:first-of-type {
  margin-top: $space * 3;
}
</style>
