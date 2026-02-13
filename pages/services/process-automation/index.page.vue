<script lang="ts" setup>
import BackButton from "../../../components/BackButton.vue";
import ServiceBlock from "../../../components/ServiceBlock.vue";
import ServicesShell from "../../../components/ServicesShell.vue";
import SiteFooter from "../../../components/SiteFooter.vue";
</script>

<template>
  <div class="service-detail">
    <ServicesShell>
      <BackButton class="mt-2" url="/services">Back to services</BackButton>
      <ServiceBlock class="pt-2">
        <h2 class="service-title">Process audit</h2>
        <p>Operational clarity before automation.</p>
      </ServiceBlock>
      <ServiceBlock title="Process Management">
        <p>
          Most workflows inside companies don’t start as systems. They emerge. A
          tool is added. A workaround appears. Someone takes ownership
          informally. Over time, complexity accumulates.
        </p>
        <p>Process work starts by observing what already exists.</p>
        <p>
          The goal of process design is simple: remove friction and bring
          clarity.
        </p>
      </ServiceBlock>
      <ServiceBlock title="Process Mapping" class="service-block--media-top">
        <p>Process mapping is about making implicit logic explicit.</p>
        <ul class="simple-list">
          <li>What happens?</li>
          <li>When does it happen?</li>
          <li>Who is involved?</li>
          <li>What are the prerequisites?</li>
          <li>What are the possible outcomes?</li>
        </ul>
        <p>
          Most organizations already have patterns. They’re just undocumented,
          inconsistently executed, or dependent on specific individuals.
        </p>
        <p>
          Good process work identifies recurring structures, clarifies
          ownership, and solidifies what is already there. It should remain
          adaptable and evolve when reality changes.
        </p>
        <template #media>
          <img
            class="media"
            src="/process-flow.png"
            alt="Process flow diagram"
            loading="lazy"
          />
        </template>
      </ServiceBlock>
      <ServiceBlock title="From Clarity to Automation">
        <p>Clear processes enable automation.</p>
        <p>Once the logic is explicit, we can distinguish between:</p>
        <ul class="simple-list">
          <li>Deterministic actions that are rule based and repeatable</li>
          <li>Contextual decisions that may be assisted by AI</li>
          <li>True human judgment and accountability</li>
        </ul>
        <p>Deterministic work should not require human attention.</p>
        <p>
          Traditional automation handles defined inputs, predictable routes, and
          clear outputs. AI extends automation into contextual territory, but
          only when the underlying process is structured.
        </p>
        <p>Structure first. Automation second. AI last.</p>
      </ServiceBlock>
    </ServicesShell>
    <div class="mt-10 py-5">
      <SiteFooter />
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

p {
  color: #444;
  font-size: 16px;
  line-height: 1.7;
  margin: 0;
}

.service-block__body {
  gap: $space * 1.5;
}

.simple-list {
  margin: 0;
  padding-left: 20px;
  color: #444;
  font-size: 16px;
  line-height: 1.7;
}

.simple-list li {
  margin: 0 0 2px 0;
}

.media {
  width: 400px;
  max-width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.service-block--media-top :deep(.service-block__media) {
  align-items: flex-start;
}
</style>
