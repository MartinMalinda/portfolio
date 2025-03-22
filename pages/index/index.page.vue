<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import Button from "../../components/Button.vue";
import Supabase from "../../components/icons/Supabase.vue";
import Database from "../../components/icons/Database.vue";
import Bolt from "../../components/icons/Bolt.vue";
import Bulb from "../../components/icons/Bulb.vue";
import Map from "../../components/icons/Map.vue";
import Link from "../../components/icons/Link.vue";
import Chart from "../../components/icons/Chart.vue";
import Mag from "../../components/icons/Mag.vue";
import Rocket from "../../components/icons/Rocket.vue";
import Dollar from "../../components/icons/Dollar.vue";
import studentDatabase from "../../data/student-database.json";
import feedbackMachine from "../../data/feedback-machine.json";
import cashflowDashboard from "../../data/cashflow-dashboard.json";
import releaseManagement from "../../data/release-management.json";
import herohero from "../../data/herohero.json";
import powersave from "../../data/powersave.json";
import goout from "../../data/goout.json";
import leadfeeder from "../../data/leadfeeder.json";
import Container from "../../components/Container.vue";

const Calendar = defineAsyncComponent(
  () => import("../../components/Calendar.vue"),
);
const Airtable = defineAsyncComponent(
  () => import("../../components/icons/Airtable.vue"),
);
const Pipedream = defineAsyncComponent(
  () => import("../../components/icons/Pipedream.vue"),
);
const Vue = defineAsyncComponent(
  () => import("../../components/icons/Vue.vue"),
);
const Typescript = defineAsyncComponent(
  () => import("../../components/icons/Typescript.vue"),
);
const Zapier = defineAsyncComponent(
  () => import("../../components/icons/Zapier.vue"),
);
const Retool = defineAsyncComponent(
  () => import("../../components/icons/Retool.vue"),
);
const Dashboard = defineAsyncComponent(
  () => import("../../components/icons/Dashboard.vue"),
);

// Define a ref to hold the portfolio items
const automationPortfolio = [
  studentDatabase,
  feedbackMachine,
  cashflowDashboard,
  releaseManagement,
];

const webPortfolio = [powersave, herohero, goout, leadfeeder];
</script>

<template>
  <div class="index">
    <div class="pb-5 pb-sm-2 jc-center">
      <div class="intro">
        <Container>
          <h1>Crafting Fast UIs & Efficient Automations</h1>
          <h4>
            I build fast web interfaces and automate business processes.
            <br />
            <b>I'm open for collaboration:</b> workshops, consulting, and
            hands-on projects.
          </h4>
          <Button
            href="https://forms.fillout.com/t/q9mEPmvDvBus"
            target="blank"
            variant="primary"
            :icon="Calendar"
            size="smaller"
            >Let's talk</Button
          >
        </Container>
      </div>
    </div>
    <Container class="pt-sm-2 block">
      <div class="pos-rel" style="top: -100px" id="automation"></div>
      <h2>Automation & Data management</h2>
      <div class="tools flex gap-xs">
        <Button
          href="https://airtable.com"
          target="_blank"
          :icon="Airtable"
          variant="secondary"
          size="small"
        />
        <Button
          href="http://pipedream.com/?via=martin"
          target="_blank"
          :icon="Pipedream"
          variant="secondary"
          size="small"
        />
        <Button
          href="https://zapier.com/"
          target="_blank"
          :icon="Zapier"
          variant="secondary"
          size="small"
        />
        <Button
          href="https://retool.com/"
          target="_blank"
          :icon="Retool"
          variant="secondary"
          size="small"
        />
      </div>
      <div class="flex gap-2 jc-space-between ai-center pt-4 two-columns">
        <div class="content">
          <ul style="list-style-type: none">
            <li class="flex ai-center gap-1">
              <Mag class="icon" /><span>
                Let me review your <b>internal data</b></span
              >
            </li>
            <li class="flex ai-center gap-1">
              <Database class="icon" /><span>
                Create and manage a <b>single source of truth</b></span
              >
            </li>
            <li class="flex ai-center gap-1">
              <Bolt class="icon" /><span>
                Figure out how to <b>save energy & time</b></span
              >
            </li>
            <li class="flex ai-center gap-1">
              <Link class="icon" /><span>
                Keep <b>data synced, up to date, interlinked</b></span
              >
            </li>
            <li class="flex ai-center gap-1">
              <Map class="icon" /><span>
                Let's <b>map and review processes</b></span
              >
            </li>
            <li class="flex ai-center gap-1">
              <Bulb class="icon" /><span>
                And come up with <b>new approaches & workflows</b></span
              >
            </li>
          </ul>
        </div>
        <video
          src="/videos/automation.mp4"
          style="
            width: 400px;
            max-width: 100%;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
          "
          autoplay
          loop
          playsinline
          muted
        />
      </div>
      <div class="pt-7">
        <h2>Dashboards</h2>
        <div class="flex gap-2 jc-space-between ai-center pt-4 two-columns">
          <video
            src="/videos/interfaces.mp4"
            style="
              width: 400px;
              max-width: 100%;
              border-radius: 8px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            "
            autoplay
            loop
            playsinline
            muted
          />
          <ul style="list-style-type: none">
            <li class="flex ai-center gap-1">
              <Dashboard class="icon" />
              <span>Data visualized, <b>always up to date</b></span>
            </li>
            <li class="flex ai-center gap-1">
              <Dollar class="icon" />
              <span>Financial overviews</span>
            </li>
            <li class="flex ai-center gap-1">
              <Chart class="icon" />
              <span>Analytics</span>
            </li>
            <li class="flex ai-center gap-1">
              <Rocket class="icon" />
              <span>Performance Metrics</span>
            </li>
            <li class="flex ai-center gap-1">
              <Link class="icon" />
              <span>Data aggregated, integrated</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="portfolio">
        <div id="Automation-portfolio" class="pos-rel" style="top: -100px" />
        <h3 class="mt-10">Selected automations</h3>
        <div class="projects flex gap-1">
          <a
            v-for="portfolioItem in automationPortfolio"
            :href="`/portfolio/${portfolioItem.fields.Slug}`"
            class="project"
          >
            <img
              :alt="portfolioItem.fields.Name"
              loading="lazy"
              :src="`/images-portfolio/${portfolioItem.id}.png`"
            />
            <div class="px-1 py-1">
              <b>{{ portfolioItem.fields.Name }}</b>
            </div>
          </a>
        </div>
      </div>
      <!-- <div class="pb-8"></div> -->
    </Container>
    <div class="mb-8 mt-8 my-sm-2" />
    <Container class="block">
      <div class="pos-rel" style="top: -100px" id="web-development"></div>
      <h2>Web development</h2>
      <div class="tools flex gap-xs">
        <Button
          href="https://vuejs.org/"
          target="_blank"
          :icon="Vue"
          variant="secondary"
          size="small"
        />
        <Button
          href="https://supabase.com/"
          target="_blank"
          :icon="Supabase"
          variant="secondary"
          size="small"
        />
        <Button
          href="https://www.typescriptlang.org/"
          target="_blank"
          :icon="Typescript"
          variant="secondary"
          size="small"
        />
      </div>
      <p>
        My expertise lies in building web user interfaces that load fast and
        stay fast. I have a lot of experience with Vue.js, TypeScript and
        building complex web applications.
      </p>
      <h3>Services</h3>
      <ul>
        <li>
          <b>Building MVPs</b>
        </li>
        <li>
          <b>Code review & consulting:</b> Help pick the right libraries, set up
          architecture, build tooling and design quality reusable components.
        </li>
        <li>
          <b>Performance:</b> Identify performance bottlenecks and implement
          fixes to make web apps load fast and stay fast.
        </li>
      </ul>
      <div class="portfolio">
        <div id="Web-portfolio" class="pos-rel" style="top: -80px" />
        <h3 class="mt-6">Selected web apps</h3>
        <div class="projects flex gap-1">
          <a
            v-for="portfolioItem in webPortfolio"
            :href="`/portfolio/${portfolioItem.fields.Slug}`"
            class="project"
          >
            <img
              :alt="portfolioItem.fields.Name"
              loading="lazy"
              :src="`/images-portfolio/${portfolioItem.id}.png`"
            />
            <div class="px-1 py-1">
              <b>{{ portfolioItem.fields.Name }}</b>
            </div>
          </a>
        </div>
      </div>
    </Container>
    <div class="mt-10 py-5">
      <footer>
        <Container>
          <div class="flex ai-center jc-space-between footer-row">
            <div>
              <div>&copy; Martin Malinda</div>
              Business ID: 05668115
            </div>
            <div class="contact-row flex gap-1">
              <Button
                href="https://forms.fillout.com/t/q9mEPmvDvBus"
                target="blank"
                variant="primary"
                :icon="Calendar"
                size="smaller"
                >Book a meeting</Button
              >
            </div>
          </div>
        </Container>
      </footer>
    </div>
  </div>
</template>
<style lang="scss" scoped>
h2 {
  font-size: 35px;
  line-height: 1.5;

  @media (max-width: 900px) {
    font-size: 25px;
  }
}

h3 {
  font-size: 26px;
}

li {
  margin-top: $space;
  line-height: 1.5;
}

p {
  line-height: 2;
}

ul {
  padding: 0;
  color: #444;
  font-size: 20px;

  @media (max-width: 950px) {
    font-size: 16px;
  }

  .icon {
    width: 28px !important;
    height: 28px !important;
  }

  li {
    margin-top: $space * 2;
  }
}

a {
  color: $almost-black;

  line-height: 1.2;
}

.two-columns {
  @media (max-width: 900px) {
    display: block;
  }
}

.intro {
  /* width: 950px; */
  max-width: 100%;
  padding: $space * 6 $space * 4;
  border-radius: 15px;
  background: transparentize(rgb(166, 161, 1), 0.4);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 0, 0.1),
    rgba(255, 0, 0, 0.1)
  );
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    margin-top: 0;
    padding-left: $space * 2;
    padding-right: $space * 2;
    padding-top: $space * 6;
    border-radius: 0;
  }

  h1 {
    margin-top: 0;
    font-size: 40px;
    line-height: 1.5;
    padding-top: 0;

    @media (max-width: 800px) {
      font-size: 30px;
    }
  }

  h4 {
    line-height: 1.5;
    font-weight: 500;
    font-size: 20px;

    @media (max-width: 800px) {
      font-size: 18px;
    }
  }
}

.service {
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: $space;
  line-height: 1.25;
  border-radius: 5px;
  display: flex;
  gap: $space;

  b {
    display: block;
    margin: $space * 1 0;
  }

  .icon {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
  }
}

.projects {
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
}

.project {
  border-radius: 5px;
  max-width: 200px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: 0.2s transform;

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    max-width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    // transition: 0.1s transform;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    width: calc(50% - 4px);
    flex-shrink: 0;
  }
}

footer {
  padding: $space * 2;
  color: $almost-black;
  // box-shadow: inset 0 20px 100px #00000005;
  // border-top: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 12px;
  // padding: $space * 2;
  // background: lighten($almost-black, 5%);
  // border-top: 3px solid black;

  h3 {
    font-size: 14px;
    margin-bottom: -$space / 3;
  }

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
