<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import Button from "../../components/Button.vue";

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
</script>

<template>
  <div class="index">
    <h1>Crafting Fast UIs & Efficient Automations</h1>
    <h4>
      I specialize in building fast web UIs and automating business processes.
      <br />
      <b>I'm available for freelance:</b> workshops, consultations, building
      solutions.
    </h4>
    <Button :icon="Calendar" size="smaller">Let's talk</Button>
    <h2>Automations</h2>
    <div class="tools flex gap-xs">
      <Button :icon="Airtable" variant="secondary" size="small" />
      <Button :icon="Pipedream" variant="secondary" size="small" />
    </div>
    <p>
      I am able to streamline and automate processes for your company to save
      time, energy and to empower everyone with efficient dashboards and tools.
    </p>
    <p>
      With the help of <a href="https://airtable.com/">Airtable</a>, I can
      design a tailored solution for project management, CRM, content
      management, feedback collection, metrics collection or just about anything
      else. I can integrate your existing tools together.
      <br />
    </p>
    <h2>Web development</h2>
    <div class="tools flex gap-xs">
      <Button :icon="Vue" variant="secondary" size="small" />
    </div>
    <p>
      My expertise lies in building user interfaces that load fast and stay
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

p {
  line-height: 1.5;
}

a {
  color: $almost-black;
}
</style>
