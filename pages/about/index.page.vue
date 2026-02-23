<script lang="ts" setup>
import Container from "../../components/Container.vue";
import SiteFooter from "../../components/SiteFooter.vue";
</script>

<template>
  <div class="about">
    <div class="hero">
      <Container>
        <h1>About</h1>
        <!-- <p>
          A short story of how I ended up building automation systems and web
          interfaces.
        </p> -->
      </Container>
    </div>
    <Container class="block">
      <div class="about-text">
        <p>
          <img
            src="/teaching.png"
            width="350"
            height="350"
            alt="Teaching"
            class="teaching-image"
          />
          I build operational infrastructure for growing businesses.
          <br />
          <br />
          Over the past decade, I've worked on production systems used by real
          customers, handled monetization flows, modernized legacy applications,
          and helped teams scale their technical foundations without losing
          coherence.
          <br />
          <br />
          I've contributed to and led architecture work at companies such as
          <a href="https://www.leadfeeder.com" target="_blank">Leadfeeder</a>,
          <a href="https://goout.net/" target="_blank">GoOut</a>, and
          <a href="https://www.topmonks.com/index.html" target="_blank"
            >TopMonks</a
          >, and later co-founded
          <a href="https://about.herohero.co/en/" target="_blank">Herohero</a>,
          where I was responsible for frontend architecture and core platform
          infrastructure. Along the way, I also taught programming and led
          projects at
          <a href="https://www.instagram.com/greenfox_official/" target="_blank"
            >Green Fox Academy</a
          >, combining hands-on engineering with mentorship and delivery
          ownership.
          <br />
          <br />
          Across these roles, the common thread was complexity: scaling
          applications, improving performance, integrating payments, structuring
          data, and maintaining code quality as systems evolved.
          <br />
          <br />
          <strong
            >Today, my focus is on automation, internal tooling, and AI.</strong
          >
          <br />
          <br />
          I work with small and medium businesses to:
        </p>
        <ul>
          <li>
            Structure data and processes so they remain manageable as the
            company grows
          </li>
          <li>
            Connect tools into coherent systems instead of fragmented
            automations
          </li>
          <li>Replace fragile manual work with reliable infrastructure</li>
          <li>Introduce AI in pragmatic, business-aligned ways</li>
        </ul>
        <p>
          Alongside client work, I build products that embody the same
          philosophy:
          <br />
          <br />
          <strong>Powersync</strong> - infrastructure for reliable data
          synchronization and automation in Airtable-based systems.
          <br />
          <strong>Powersave</strong> - a browser extension that turns everyday
          web activity into structured, database-ready input.
          <br />
          <br />
          Whether working with SMBs or stepping into technical leadership roles,
          my goal is consistent: design systems that stay stable, observable,
          and adaptable as complexity increases.
          <br />
          <br />
          Outside of work, I recharge in nature and draw inspiration from
          history and art.
        </p>
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
    rgba(255, 0, 0, 0.08),
    rgba(0, 0, 0, 0.06)
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

.about-text {
  line-height: 1.8;
  margin-top: $space * 4;

  p {
    margin: 0 0 $space;
    line-height: 1.5;
  }

  p:first-child {
    margin-top: $space * 1.5;
  }

  p:last-child {
    margin-bottom: 0;
  }

  ul {
    margin: 0 0 $space * 2;
    padding-left: 1.4rem;
  }

  li {
    margin-bottom: $space * 0.75;
  }

  li:last-child {
    margin-bottom: 0;
  }

  a {
    display: inline-block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 2px 4px;
    background: rgba(0, 0, 0, 0.03);
    transition: 0.05s all;

    &:hover {
      background: black;
      color: white;
      border-radius: 5px;
    }
  }
}

.teaching-image {
  border-radius: 50%;
  float: right;
  shape-outside: circle(50%) border-box;
  -webkit-shape-outside: circle(50%) border-box;
  shape-margin: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-top: 1.25rem;

  @media (max-width: 600px) {
    width: 180px;
    height: 180px;
  }
}
</style>
