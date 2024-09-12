<script lang="ts" setup>
import LinkedinLogo from "../components/LinkedinLogo.vue";
import MediumLogo from "../components/MediumLogo.vue";
import GithubLogo from "../components/GithubLogo.vue";
import Envelope from "../components/Envelope.vue";
import Pin from "../components/Pin.vue";
</script>

<template>
  <div class="page-shell">
    <nav class="intro">
      <div class="inner">
        <div class="left flex ai-center gap-2">
          <div class="identity flex ai-center gap-2">
            <div class="cover">
              <img
                src="https://res.cloudinary.com/serenity-themes/image/upload/w_350,f_webp/v1716215445/portfolio-2/pic.png"
                class="profile-pic"
                alt="Profile picture of Martin Malinda"
              />
            </div>
            <h2>
              <span>Martin Malinda</span>
            </h2>
          </div>
          <section class="services flex ai-center gap-1">
            <a href="/#automation">Automation</a>
            <a href="/#web-development">Web development</a>
          </section>
        </div>
        <div class="right flex ai-enter gap-2">
          <section class="flex ai-center gap-2">
            <div class="location"><Pin class="pin" />Prague / Portugal</div>
            <div class="socials">
              <a
                target="_blank"
                class="linkedin-link"
                title="LinkedIn"
                href="https://www.linkedin.com/in/martin-malinda-58b03253/"
              >
                <LinkedinLogo class="link-logo" />
              </a>
              <a
                target="_blank"
                class="medium-link"
                title="Medium.com blog"
                href="https://medium.com/@martinmalinda"
              >
                <MediumLogo class="link-logo" />
              </a>
              <a
                href="https://github.com/martinmalinda"
                class="github-link"
                target="_blank"
                title="Github"
              >
                <GithubLogo class="link-logo" />
              </a>
              <a
                target="_blank"
                title="Send an email"
                href="mailto:martin@otimo.us"
                class="medium-link"
              >
                <Envelope class="link-logo" />
              </a>
            </div>
          </section>
        </div>
        <!-- <div class="mobile-menu">Menu</div> -->
      </div>
    </nav>
    <main>
      <div class="page w100p">
        <slot />
      </div>
    </main>
  </div>
</template>
<style lang="scss">
@import "../style.scss";
</style>
<style lang="scss" scoped>
$yellow: #f2eac1;

.page-shell {
  padding-top: 71px;
  // display: flex;
}

a {
  text-decoration: none;
}

nav.intro {
  display: flex;
  justify-content: center;
  position: fixed;
  background: white;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: $space 0;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(800px + 16px);
    max-width: 100%;
  }

  @media (max-width: 900px) {
    .inner {
      width: 100%;
      padding: 0 $space * 2;
      flex-wrap: wrap;
    }

    .left {
      flex-direction: column;
      align-items: start;
    }

    .services {
      display: none;
    }

    .location {
      display: none;
    }

    .right {
      // display: none;
    }

    .identity {
      width: 100%;
      flex-shrink: 0;
    }
  }
}

main {
  width: 100%;
  display: flex;
  justify-content: center;
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
  height: 50px;
  width: 50px;
  object-fit: cover;
  object-position: 100% 100%;
  border-radius: 50%;
  display: block;
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
    top: 1px;
  }
}

.socials {
  display: flex;
  gap: $space;
  height: 1.5em;

  a {
    padding: $space / 3;
    font-size: 15px;
    padding-left: 0;
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
