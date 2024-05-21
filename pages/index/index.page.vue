<script lang="ts" setup>
import HeroheroLogo from "./components/HeroheroLogo.vue";
import OtimoLogo from "./components/OtimoLogo.vue";
import LinkedinLogo from "./components/LinkedinLogo.vue";
import MediumLogo from "./components/MediumLogo.vue";
import GithubLogo from "./components/GithubLogo.vue";
import Envelope from "./components/Envelope.vue";

const email = () => {
  window.open("mailto:malindacz@gmail.com");
};
</script>

<template>
  <main>
    <div class="inner">
      <div class="intro">
        <div class="cover">
          <div>
            <img
              src="https://res.cloudinary.com/serenity-themes/image/upload/w_350,f_webp/v1716215445/portfolio-2/pic.png"
              class="profile-pic"
              alt="Profile picture of Martin Malinda"
            />
          </div>
        </div>
        <h1>
          <span>Martin Malinda</span>
        </h1>
        <div class="socials">
          <a
            target="_blank"
            class="linkedin-link"
            href="https://www.linkedin.com/in/martin-malinda-58b03253/"
          >
            <LinkedinLogo class="link-logo" />
          </a>
          <a
            target="_blank"
            class="medium-link"
            href="https://medium.com/@martinmalinda"
          >
            <MediumLogo class="link-logo" />
          </a>
          <a
            href="https://github.com/martinmalinda"
            class="github-link"
            target="_blank"
          >
            <GithubLogo class="link-logo" />
          </a>
          <a target="_blank" class="medium-link" @click="email">
            <Envelope class="link-logo" />
          </a>
        </div>
        <p class="bio">
          I've been building and helping startups for over 10 years. I can help
          you develop web apps, analyze the technical landscape & automate the
          mundane.
        </p>
      </div>
      <div class="startups slide">
        <div class="inner">
          <h2>Technical founder & consultant</h2>
          <div class="flex gap-2 ai-center mt-4">
            <HeroheroLogo class="logo" />
            <p>
              I co-founded
              <a target="_blank" href="https://herohero.co">Herohero</a>, a
              monetisation service for creators. <br />
              Herohero has seen a rapid growth in Czech Republic and Slovakia
              and is currently expanding to Spain & USA.
            </p>
          </div>
          <div class="flex gap-2 ai-center mt-4">
            <OtimoLogo class="logo" />
            <p>
              I am currently building
              <a target="_blank" href="https://otimo.us">Otimo</a> - A web app
              to save & share quality&nbsp;content.
            </p>
          </div>
          <div class="mt-4">
            <p>
              I can share my experience with web app frontend architecture,
              rapid prototyping & top performance.
            </p>
          </div>
        </div>
      </div>
      <div class="automation slide">
        <div class="inner">
          <div class="flex gap-4 ai-center f-sm-wrap">
            <div style="width: 400px; max-width: 90vw">
              <h2>Automation specialist</h2>
              <div class="mt-2" />
              <p>
                I've been helping companies automate their business processes
                for over 2 years now. I can organize internal data, interconnect
                tools and use AI effectively. <br />I aim to empower people with
                technology, not to replace them by it.
              </p>
              <div class="mt-2">
                <p>
                  My main toolstack is
                  <a href="https://airtable.com" target="blank">Airtable</a>,
                  <a href="https://pipedream.com" target="_blank">Pipedream</a>
                  and <a href="https://zapier.com" target="_blank">Zapier</a>.
                </p>
              </div>
            </div>
            <img
              alt="Giving a talk"
              class="photo"
              src="https://res.cloudinary.com/serenity-themes/image/upload/w_700,f_webp/v1716223319/portfolio-2/1714922488655.jpg"
            />
          </div>
        </div>
      </div>
      <div class="teaching slide">
        <div class="inner">
          <div class="flex gap-4 ai-center f-wrap f-sm-wrap">
            <div style="width: 400px; max-width: 90vw">
              <h2>Sharing knowledge</h2>
              <div class="mt-2" />
              <p>
                For over a year, I taught TypeScript, C# and Java in
                <a
                  target="_blank"
                  href="https://www.greenfoxacademy.com/en/home"
                  >Green&nbsp;Fox&nbsp;Academy</a
                >
                - a coding bootcamp based in Prague and Budapest.
              </p>
              <div class="mt-2" />
              <p>
                I also have experience teaching code online on
                <a
                  href="https://www.codementor.io/@martinmalinda657"
                  target="_blank"
                  >CodeMentor.io</a
                >.
              </p>
            </div>
            <img
              style="width: 400px; max-width: 90%"
              class="photo"
              alt="Teaching code"
              src="https://res.cloudinary.com/serenity-themes/image/upload/w_900,f_webp/v1716233411/portfolio-2/1601820372122.jpg"
            />
          </div>
        </div>
      </div>
      <div class="contact slide">
        <div class="inner">
          <h2>Contact</h2>
          <div class="mt-2" />
          <p>
            Let's discuss business process automation, web performance or
            overall technical strategy for your small or medium sized business.
          </p>
          <div class="mt-2" />
          <p>
            <a @click="email">Send me an email</a>,
            <a href="https://calendly.com/martinmalinda/30-minute-meeting"
              >schedule a meeting</a
            >
            or connect on
            <a href="https://www.linkedin.com/in/martin-malinda-58b03253/"
              >LinkedIn</a
            >.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
$yellow: #f2eac1;

img {
  max-width: 85vw;
}

a {
  cursor: pointer;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  padding: 0;
  margin: 0;
}

.intro {
  width: 100%;
  padding-bottom: 40px;
  border-bottom: 3px solid darken($yellow, 5%);
}

.cover {
  width: 100%;
  // background: #f2eac1;
  padding: $space * 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0;
}

p {
  font-size: 18px;
  margin: 0;
  line-height: 1.5;
  text-align: center;
}

.bio {
  padding: $space * 2;
  max-width: 500px;
  margin: 0 auto;
}

h1 {
  letter-spacing: 0.5px;
  margin-top: $space * 8;
  margin-bottom: 0;
  text-align: center;
}

.inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile-pic {
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: 50% 100%;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 0 0 4px $yellow;
  position: relative;
  top: $space * 4;
}

.slide {
  min-height: 40vh;
  background: $yellow;
  position: relative;
  padding: 150px $space * 2;

  @media (max-width: 800px) {
    padding-top: $space * 6;
    padding-bottom: $space * 6;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  &::before {
    position: absolute;
    top: 20px;
    left: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 40px);
    max-width: 1000px;
    height: calc(100% - 40px);
    background: white;
    border-radius: 10px;
    content: "";

    @media (max-width: 800px) {
      width: 100vw !important;
      left: 0 !important;
      transform: translateX(0%);
      border-radius: 0;
    }
  }

  &:not(:last-child) {
    border-bottom: 0;

    &::before {
      height: calc(100% - 20px);
    }
  }
  width: 100%;

  h2 {
    text-align: left;
    margin: 0;
  }

  .inner {
    align-items: flex-start;
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
  }

  p {
    font-size: 16px;
    text-align: left;
    max-width: 500px;
  }
}

.logo {
  width: 70px;
  height: 70px;
  flex-shrink: 0;
}

.row {
  display: flex;
  gap: $space * 2;
  align-items: center;
}

a {
  color: rgb(155, 155, 31);
  display: inline-block;
  border-bottom: 1px dashed rgb(155, 155, 31);
  padding-bottom: 0px;

  &.linkedin-link,
  &.medium-link,
  &.github-link {
    border: 0;
  }
}

.photo {
  width: 300px;
  border-radius: 10px;
  display: block;
  box-shadow: 10px 10px 10px 0px $yellow;
}

.link-logo {
  width: 1em;
  height: 1em;
}

.socials {
  margin-top: $space;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  gap: 0;

  ::v-deep(svg) {
    width: 1em;
    height: 1em;
  }

  & > * {
    // border: 1px solid darken($yellow, 5%) !important;
    border: 1px solid transparent;
    background: rgb(255, 255, 255);
    display: inline-flex;
    padding: $space $space * 1.5;
    border-radius: 5px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);

    &:hover {
      background: lighten($yellow, 20%);

      & > * {
        transform: scale(1.1);
      }
    }

    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: 0 !important;
    }
  }
}
</style>
