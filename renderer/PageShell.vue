<script lang="ts" setup>
import LinkedinLogo from "../components/LinkedinLogo.vue";
import MediumLogo from "../components/MediumLogo.vue";
import GithubLogo from "../components/GithubLogo.vue";
import Envelope from "../components/Envelope.vue";
import Pin from "../components/Pin.vue";
import Button from "../components/Button.vue";
import Calendar from "../components/Calendar.vue";

const email = () => {
  window.open("mailto:malindacz@gmail.com");
};
</script>

<template>
  <div class="app">
    <aside class="intro">
      <div class="cover">
        <div>
          <img
            src="https://res.cloudinary.com/serenity-themes/image/upload/w_350,f_webp/v1716215445/portfolio-2/pic.png"
            class="profile-pic"
            alt="Profile picture of Martin Malinda"
          />
        </div>
      </div>
      <h2>
        <span>Martin Malinda</span>
      </h2>
      <section class="services">
        <h2>Services</h2>
        <a>Automations</a>
        <a>Web development</a>
      </section>
      <section class="portfolio-pages">
        <h2>Projects</h2>
        <a>Powersave.pro</a>
        <a>Automations</a>
        <a>Web development</a>
      </section>
      <section>
        <h2>Links</h2>
        <div class="location"><Pin class="pin" /> Czech Rep. & Portugal</div>
        <div class="socials">
          <a
            target="_blank"
            class="linkedin-link"
            href="https://www.linkedin.com/in/martin-malinda-58b03253/"
          >
            <LinkedinLogo class="link-logo" />
            LinkedIn
          </a>
          <a
            target="_blank"
            class="medium-link"
            href="https://medium.com/@martinmalinda"
          >
            <MediumLogo class="link-logo" /> Tech articles
          </a>
          <a
            href="https://github.com/martinmalinda"
            class="github-link"
            target="_blank"
          >
            <GithubLogo class="link-logo" /> Github
          </a>
          <a target="_blank" class="medium-link" @click="email">
            <Envelope class="link-logo" /> Email
          </a>
        </div>
      </section>
    </aside>
    <main>
      <div class="page">
        <slot />
      </div>
    </main>
  </div>
</template>
<style lang="scss" scoped>
$yellow: #f2eac1;

.app {
  display: flex;
}

a {
  text-decoration: none;
}

main {
  width: 100%;
  display: flex;
  justify-content: center;
}

aside {
  justify-self: flex-start;
  padding: $space * 3;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  min-height: 100vh;
}

.page {
  margin: $space * 2 0;
  // padding: $space * 2;
  // border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 800px;

  h1 {
    margin: 0;
  }

  h4 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
  }
}

.portfolio-pages {
  display: flex;
  flex-direction: column;
  gap: $space / 2;
  margin-bottom: $space;
}

h2 {
  font-size: 18px;
}

img {
  height: 130px;
  width: 130px;
  object-fit: cover;
  object-position: 100% 100%;
  border-radius: 50%;
}

section {
  display: flex;
  flex-direction: column;
  gap: $space / 2;

  h2 {
    margin: 0;
    margin-top: $space * 2;
    left: 0;
    font-size: 16px;
    font-weight: 600;
    color: rgb(57, 57, 57);
  }
}

.location {
  display: flex;
  align-items: center;
  font-size: 15px;
  gap: $space;

  .pin {
    position: relative;
    width: 1.5em;
    height: 1.5em;
    top: -2px;
  }
}

.socials {
  display: flex;
  flex-direction: column;

  a {
    padding: $space / 3;
    font-size: 15px;
    padding-left: 0;
    display: flex;
    align-items: center;
    gap: $space;
    color: black;
    cursor: pointer;
  }

  ::v-deep(svg) {
    width: 1.5em;
    height: 1.5em;
    position: relative;
    top: -2px;
  }
}
</style>
