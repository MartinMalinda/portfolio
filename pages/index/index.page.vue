<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import Button from "../../components/Button.vue";
import Supabase from "../../components/icons/Supabase.vue";

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
</script>

<template>
  <div class="index">
    <h1>Crafting Fast UIs & Efficient Automations</h1>
    <h4>
      I specialize in building fast web UIs and automating business processes.
      <br />
      <b>I'm available for freelance:</b> workshops, consultations, building
      solutions for you.
    </h4>
    <Button :icon="Calendar" size="smaller">Let's talk</Button>
    <h2>Automations</h2>
    <div class="tools flex gap-xs">
      <Button :icon="Airtable" variant="secondary" size="small" />
      <Button :icon="Pipedream" variant="secondary" size="small" />
      <Button :icon="Zapier" variant="secondary" size="small" />
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
    <h3>Why?</h3>
    <ul>
      <li>
        <b>Internal dashboards:</b> make sure key people can access relevant
        data in most user friendly way. No need for manual reports because
        dashboards stay always up to date.
      </li>
      <li>
        <b>Single source of truth:</b> no need to create new spreadsheets over
        and over again. Instead define references and formulas. Data reference
        each other instead of copying each other. This ensures correctness: no
        danger of looking at outdated data.
      </li>
      <li>
        <b>Save time and energy:</b> eliminiate mundane repetitive tasks and
        have more time left for more creative and human parts of the job.
      </li>
      <li>
        <b>New possibilities:</b> efficient storage and usage of tools can
        unlock completely new processes. New approaches to sales, customer
        success, product management and so on.
      </li>
    </ul>
    <h2>Web development</h2>
    <div class="tools flex gap-xs">
      <Button :icon="Vue" variant="secondary" size="small" />
      <Button :icon="Supabase" variant="secondary" size="small" />
      <Button :icon="Typescript" variant="secondary" size="small" />
    </div>
    <p>
      My expertise lies in building web user interfaces that load fast and stay
      fast. I have a lot of experience with Vue.js, TypeScript and building
      complex web applications.
    </p>
  </div>
</template>
<style lang="scss" scoped>
h4 {
  line-height: 1.5;
  font-weight: 500;
}

h2 {
  font-size: 30px;
  margin-top: $space * 4;
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
</style>
