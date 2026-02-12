<script lang="ts" setup>
import Container from "../../components/Container.vue";
import SiteFooter from "../../components/SiteFooter.vue";
</script>

<template>
  <div class="about">
    <div class="hero">
      <Container>
        <h1>About</h1>
        <p>
          A short story of how I ended up building automation systems and web
          interfaces.
        </p>
      </Container>
    </div>
    <Container class="block">
      <p class="about-text">
        <img
          src="/teaching.png"
          width="300"
          height="300"
          alt="Teaching"
          class="teaching-image"
        />
        I learned to code to build community websites for MMORPG games when I
        was 12 and have played around with web tech ever since. I got a bachelor
        degree in
        <a
          href="https://natur.cuni.cz/en/admissions/study-programmes/doctoral-studies/environmental-science"
          target="_blank"
          >environmental science</a
        >
        but started a tech career right after. At
        <a href="https://www.topmonks.com/index.html" target="_blank"
          >TopMonks</a
        >, I built JS-heavy webapps and later committed to building the UI for
        <a href="https://www.leadfeeder.com" target="_blank">Leadfeeder</a>. I
        also taught programming and web development at
        <a href="https://www.instagram.com/greenfox_official/" target="_blank"
          >Green Fox Academy</a
        >
        and created a state-of-the-art, highly optimized event discovery website
        for
        <a href="https://goout.net/" target="_blank">GoOut</a> — a key ticketing
        service in the Czech Republic. There, I met the people with whom I
        co-founded
        <a href="https://about.herohero.co/en/" target="_blank">Herohero</a> — a
        monetization platform for creators that now dominates the creator
        economy market in the Czech Republic and Slovakia, outcompeting Patreon
        and others.
        <br />
        Currently, I'm focused on freelance automation development & consulting,
        which allows me to collaborate closely with clients, learn from each
        other, and apply AI in pragmatic ways. On the side, I'm building
        <a href="https://powersave.pro" target="_blank">Powersave</a> - a chrome
        extension to save to your database ASAP. <br />
        When I'm away from screens, I like to surround myself with nature,
        history and art.
      </p>
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
  line-height: 2;

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
  shape-outside: circle();
  -webkit-shape-outside: circle();
  margin-left: 1rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  display: block;

  @media (max-width: 600px) {
    width: 180px;
    height: 180px;
  }
}
</style>
