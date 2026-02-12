<script lang="ts" setup>
import BookingButton from "../../components/BookingButton.vue";
import Container from "../../components/Container.vue";
import SiteFooter from "../../components/SiteFooter.vue";
import Bolt from "../../components/icons/Bolt.vue";
import Rocket from "../../components/icons/Rocket.vue";
import Chart from "../../components/icons/Chart.vue";
import PenTool from "../../components/icons/PenTool.vue";
import Bulb from "../../components/icons/Bulb.vue";
</script>

<template>
  <div class="index">
    <div class="hero">
      <Container>
        <h1>Crafting Fast UIs &amp; Efficient Automations</h1>
        <p>
          I build fast web interfaces and automate business processes.
          <br />
          <b>I'm open for collaboration:</b> workshops, consulting, and
          hands-on projects.
        </p>
        <BookingButton />
      </Container>
    </div>
    <Container class="block">
      <div class="cards">
        <a class="card" href="/services">
          <div class="card-icon">
            <Bolt />
          </div>
          <div class="card-copy">
            <h2>Services</h2>
            <p>
              Automation, dashboards, and web development focused on outcomes
              and clarity.
            </p>
          </div>
          <div class="card-cta">
            Explore services <span class="arrow">→</span>
          </div>
        </a>
        <a class="card" href="/products">
          <div class="card-icon">
            <Rocket />
          </div>
          <div class="card-copy">
            <h2>Products</h2>
            <p>
              Tools I build for real-world workflows, starting with Powersave.
            </p>
          </div>
          <div class="card-cta">
            View products <span class="arrow">→</span>
          </div>
        </a>
        <a class="card" href="/portfolio">
          <div class="card-icon">
            <Chart />
          </div>
          <div class="card-copy">
            <h2>Portfolio</h2>
            <p>
              Selected automation systems, dashboards, and web apps from recent
              work.
            </p>
          </div>
          <div class="card-cta">
            See the work <span class="arrow">→</span>
          </div>
        </a>
        <a class="card" href="/writing">
          <div class="card-icon">
            <PenTool />
          </div>
          <div class="card-copy">
            <h2>Writing</h2>
            <p>
              Notes on automation, performance, and building reliable software.
            </p>
          </div>
          <div class="card-cta">
            Read writing <span class="arrow">→</span>
          </div>
        </a>
        <a class="card" href="/about">
          <div class="card-icon">
            <Bulb />
          </div>
          <div class="card-copy">
            <h2>About</h2>
            <p>
              Background, projects, and the path that led me to automation and
              product work.
            </p>
          </div>
          <div class="card-cta">
            Learn about me <span class="arrow">→</span>
          </div>
        </a>
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
  background: transparentize(rgb(166, 161, 1), 0.4);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 0, 0.1),
    rgba(255, 0, 0, 0.1)
  );
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    padding-left: $space * 2;
    padding-right: $space * 2;
    padding-top: $space * 6;
  }

  h1 {
    margin-top: 0;
    font-size: 40px;
    line-height: 1.3;

    @media (max-width: 800px) {
      font-size: 30px;
    }
  }

  p {
    line-height: 1.6;
    font-size: 20px;
    font-weight: 500;

    @media (max-width: 800px) {
      font-size: 18px;
    }
  }
}

.cards {
  display: flex;
  flex-direction: column;
  gap: $space * 2.5;
  margin-top: $space * 3;
}

.card {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  padding: $space * 2.5;
  background: white;
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) auto;
  grid-template-areas: "icon copy cta";
  align-items: center;
  justify-items: start;
  gap: $space * 2;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  text-decoration: none;
  color: inherit;
  transition: 0.2s transform, 0.2s box-shadow, 0.2s border-color;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.12);

    .arrow {
      transform: translateX(4px);
    }
  }

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
    grid-template-columns: 54px 1fr;
    grid-template-areas:
      "icon copy"
      "cta cta";
    row-gap: $space * 1.5;
    justify-items: start;
  }
}

.card-icon {
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.04);
  display: grid;
  place-items: center;
  flex-shrink: 0;
  grid-area: icon;

  :deep(svg) {
    width: 28px;
    height: 28px;
  }
}

.card-copy {
  grid-area: copy;
  min-width: 0;
  text-align: left;
  padding-right: $space * 2;
}

.card-cta {
  color: $dark-grey;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: $space / 2;
  white-space: nowrap;
  justify-self: end;
  grid-area: cta;

  @media (max-width: 800px) {
    justify-self: start;
  }
}

.arrow {
  transition: 0.2s transform;
}
</style>
