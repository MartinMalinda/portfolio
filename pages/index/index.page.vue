<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import Button from "../../components/Button.vue";
import Supabase from "../../components/icons/Supabase.vue";
import Database from "../../components/icons/Database.vue";
import Bolt from "../../components/icons/Bolt.vue";
import Rocket from "../../components/icons/Rocket.vue";
import studentDatabase from "../../data/student-database.json";
import feedbackMachine from "../../data/feedback-machine.json";
import cashflowDashboard from "../../data/cashflow-dashboard.json";
import releaseManagement from "../../data/release-management.json";
import herohero from "../../data/herohero.json";
import powersave from "../../data/airtable-powersave.json";

const Calendar = defineAsyncComponent(
  () => import("../../components/Calendar.vue")
);
const Airtable = defineAsyncComponent(
  () => import("../../components/icons/Airtable.vue")
);
const Pipedream = defineAsyncComponent(
  () => import("../../components/icons/Pipedream.vue")
);
const Vue = defineAsyncComponent(
  () => import("../../components/icons/Vue.vue")
);
const Typescript = defineAsyncComponent(
  () => import("../../components/icons/Typescript.vue")
);
const Zapier = defineAsyncComponent(
  () => import("../../components/icons/Zapier.vue")
);
const Retool = defineAsyncComponent(
  () => import("../../components/icons/Retool.vue")
);
const Dashboard = defineAsyncComponent(
  () => import("../../components/icons/Dashboard.vue")
);

// Define a ref to hold the portfolio items
const automationPortfolio = [
  studentDatabase,
  feedbackMachine,
  cashflowDashboard,
  releaseManagement,
];

const webPortfolio = [powersave, herohero];
</script>

<template>
  <div class="index pt-5">
    <h1>Crafting Fast UIs & Efficient Automations</h1>
    <h4>
      I specialize in building fast web UIs and automating business processes.
      <br />
      <b>I'm available for freelance:</b> workshops, consultations, building
      solutions for you.
    </h4>
    <Button
      href="https://forms.fillout.com/t/q9mEPmvDvBus"
      target="blank"
      :icon="Calendar"
      size="smaller"
      >Let's talk</Button
    >
    <h2 id="automation">Automation</h2>
    <div class="tools flex gap-xs">
      <Button
        href="https://airtable.com/"
        target="_blank"
        :icon="Airtable"
        variant="secondary"
        size="small"
      />
      <Button
        href="https://pipedream.com/"
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
    <p>
      I am able to streamline and automate processes for your company to save
      time, energy and to empower people with efficient dashboards and tools.
    </p>
    <p>
      I can integrate your existing tools together or I can come up with new
      solutions from the ground up. With the help of
      <a href="https://airtable.com/">Airtable</a>, I can design a tailored
      solution for project management, CRM, content management, feedback
      collection, metrics collection or just about anything else.
      <br />
    </p>
    <div class="flex fd-column gap-1">
      <div class="service">
        <Dashboard class="icon" />
        <div class="texts">
          <b>Dashboards</b>
          <div>Access relevant up to date data at the same place.</div>
        </div>
      </div>
      <div class="service">
        <Database class="icon" />
        <div class="texts">
          <b>Single source of truth</b>
          <div>Internal data always up to date, live, interlinked.</div>
        </div>
      </div>
      <div class="service">
        <Bolt class="icon" />
        <div class="texts">
          <b>Save time & energy</b>
          <div>
            Automate repetitive tasks and have more energy left for the creative
            and human parts of work.
          </div>
        </div>
      </div>
      <div class="service">
        <Rocket class="icon" />
        <div class="texts">
          <b>New approaches</b>
          <div>
            Every small automation or change can unlock new workflows, opening
            up new automations, adding up to a transformative "snowball effect".
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio">
      <div id="Automation-portfolio" class="pos-rel" style="top: -80px" />
      <h3 class="mt-6">Automation portfolio</h3>
      <div class="projects flex gap-1">
        <a
          v-for="portfolioItem in automationPortfolio"
          :href="`/portfolio/${portfolioItem.fields.Slug}`"
          class="project"
        >
          <img :src="`/images-portfolio/${portfolioItem.id}.png`" />
          <div class="px-1 py-1">
            <b>{{ portfolioItem.fields.Name }}</b>
          </div>
        </a>
      </div>
    </div>
    <h2 id="web-development">Web development</h2>
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
      My expertise lies in building web user interfaces that load fast and stay
      fast. I have a lot of experience with Vue.js, TypeScript and building
      complex web applications.
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
        <b>Performance:</b> Identify performance bottlenecks and implement fixes
        to make web apps load fast and stay fast.
      </li>
    </ul>
    <div class="portfolio">
      <div id="Web-portfolio" class="pos-rel" style="top: -80px" />
      <h3 class="mt-6">Web development portfolio</h3>
      <div class="projects flex gap-1">
        <a
          v-for="portfolioItem in webPortfolio"
          :href="`/portfolio/${portfolioItem.fields.Slug}`"
          class="project"
        >
          <img :src="`/images-portfolio/${portfolioItem.id}.png`" />
          <div class="px-1 py-1">
            <b>{{ portfolioItem.fields.Name }}</b>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
h4 {
  line-height: 1.5;
  font-weight: 500;
}

h2 {
  font-size: 30px;
  margin-top: $space * 12;
}

li {
  margin-top: $space;
  line-height: 1.5;
}

p {
  line-height: 1.5;
}

a {
  color: $almost-black;
  display: inline-block;
  border-bottom: 1px solid black;
  line-height: 1.2;
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

.project {
  border-radius: 5px;
  max-width: 200px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    max-width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
