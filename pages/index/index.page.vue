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
import powersave from "../../data/powersave.json";
import goout from "../../data/goout.json";
import leadfeeder from "../../data/leadfeeder.json";
import Container from "../../components/Container.vue";
import Envelope from "../../components/Envelope.vue";

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

const webPortfolio = [powersave, herohero, goout, leadfeeder];
</script>

<template>
  <div class="index">
    <div class="pb-5 pb-sm-2 flex jc-center">
      <div class="intro">
        <Container>
          <h1>Crafting Fast UIs & Efficient Automations</h1>
          <h4>
            I specialize in building fast web UIs and automating business
            processes.
            <br />
            <b>I'm available for freelance:</b> workshops, consultations,
            building solutions for you.
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
      <h2>Automation</h2>
      <div class="tools flex gap-xs">
        <Button
          href="https://airtable.com/invite/r/swvrx671"
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
      <p>
        For me, automation is all about saving time, energy and empowering
        people with efficient dashboards and tools. It's about coming up with
        completely new approaches to well known problems.
      </p>
      <p>
        I can integrate existing tools together or I can come up with new
        solutions from the ground up. With the help of
        <a href="https://airtable.com/invite/r/swvrx671">Airtable</a>, I can
        design a tailored solution for project management, CRM, content
        management, feedback collection, metrics collection or just about
        anything else.
        <br />
      </p>
      <div class="flex fd-column gap-1 mt-8 mb-8">
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
              Automate repetitive tasks and have more energy left for the
              creative and human parts of work.
            </div>
          </div>
        </div>
        <div class="service">
          <Rocket class="icon" />
          <div class="texts">
            <b>New approaches</b>
            <div>
              Every small automation or change can unlock new workflows, opening
              up new automations, adding up to a transformative "snowball
              effect".
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio">
        <div id="Automation-portfolio" class="pos-rel" style="top: -100px" />
        <h3 class="mt-6">Selected automations</h3>
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

  @media (max-width: 900px) {
    font-size: 25px;
  }
}

li {
  margin-top: $space;
  line-height: 1.5;
}

p {
  line-height: 1.7;
}

a {
  color: $almost-black;

  line-height: 1.2;
}

.block {
  // border: 1px solid rgba(0, 0, 0, 0.099);
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  padding: $space * 3;

  @media (max-width: 900px) {
    box-shadow: none;
  }
}

.intro {
  width: 950px;
  max-width: 100%;
  margin-top: $space * 4;
  padding: $space * 4;
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
    margin-top: -$space * 1.5;
    font-size: 40px;
    line-height: 1.5;

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
