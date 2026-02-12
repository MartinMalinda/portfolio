<script lang="ts" setup>
import CardLink from "../../components/CardLink.vue";
import Container from "../../components/Container.vue";
import SiteFooter from "../../components/SiteFooter.vue";
import PowersaveLogo from "../../components/icons/PowersaveLogo.vue";
import PowersyncLogo from "../../components/icons/PowersyncLogo.vue";
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
      <div class="cards">
        <CardLink
          href="https://powersave.pro"
          title="Powersave"
          description="Save ASAP with AI. Save more, categorize & analyze as you browse to Airtable, Coda, Notion and elsewhere."
          cta="Visit site"
          :icon="PowersaveLogo"
        />
        <CardLink
          href="https://sync.powersave.pro"
          title="Powersync"
          description="Supercharge your Airtable and unlock new flows Track base history, connect Slack and Stripe and more."
          cta="Visit site"
          :icon="PowersyncLogo"
        />
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

.cards {
  display: flex;
  flex-direction: column;
  gap: $space * 2.5;
  margin-top: $space * 3;
}
</style>
