<script lang="ts" setup>
import Container from "../../components/Container.vue";
import SiteFooter from "../../components/SiteFooter.vue";
import LinkedinLogo from "../../components/LinkedinLogo.vue";
import MediumLogo from "../../components/MediumLogo.vue";
</script>

<template>
  <div class="writing">
    <div class="hero">
      <Container>
        <h1>Writing</h1>
        <p>Thoughts on automation, performance, and shipping reliable systems.</p>
      </Container>
    </div>
    <Container class="block">
      <ul class="writing-list">
        <li>
          <a
            href="https://martinmalinda.medium.com/imagining-a-universal-workflow-automation-2c17c6907377"
            target="_blank"
          >
            <MediumLogo class="writing-link__icon" />
            Imagining a universal workflow automation
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/js-dojo/lazy-rendering-in-vue-to-improve-performance-dcccd445d5f"
            target="_blank"
          >
            <MediumLogo class="writing-link__icon" />
            Lazy rendering in Vue to improve performance
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7310975020497829954/"
            target="_blank"
          >
            <LinkedinLogo class="writing-link__icon" />
            Validation fields in Airtable
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/martin-malinda-58b03253_heres-my-current-productivity-stack-todoist-activity-7295866065731907584-1tDc"
            target="_blank"
          >
            <LinkedinLogo class="writing-link__icon" />
            My current productivity stack
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/martin-malinda-58b03253_heres-an-airtable-trick-how-you-can-significantly-activity-7290332082159939586-K0u1"
            target="_blank"
          >
            <LinkedinLogo class="writing-link__icon" />
            Airtable automations reacting to bulk changes
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/martin-malinda-58b03253_heres-one-trick-how-to-use-airtable-ai-fields-activity-7281344724592975872-G-Of"
            target="_blank"
          >
            <LinkedinLogo class="writing-link__icon" />
            Effective AI analysis in Airtable
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/martin-malinda-58b03253_things-to-check-about-a-public-api-before-activity-7275233377480253440-QiCL"
            target="_blank"
          >
            <LinkedinLogo class="writing-link__icon" />
            API quality evaluation
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/martin-malinda-58b03253_vcard-activity-7269370769225175040-_iia"
            target="_blank"
          >
            <LinkedinLogo class="writing-link__icon" />
            How to add a contact from Airtable to your phone ASAP
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/martin-malinda-58b03253_airtable-email-clients-activity-7268736015073222656-_PK7"
            target="_blank"
          >
            <LinkedinLogo class="writing-link__icon" />
            A formula to open email client with dynamic content from Airtable
            ASAP
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/martin-malinda-58b03253_if-you-have-checklists-that-you-want-activity-7266910744263168000-rrZ7"
            target="_blank"
          >
            <LinkedinLogo class="writing-link__icon" />
            An alternative approach to checklists in Airtable
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/martin-malinda-58b03253_when-if-and-how-to-use-custom-search-activity-7263553177101193216--8pf"
            target="_blank"
          >
            <LinkedinLogo class="writing-link__icon" />
            Effective use of Chrome via custom search engines
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/martin-malinda-58b03253_airtable-add-to-calendar-button-activity-7243952014890553344-k4pV"
            target="_blank"
          >
            <LinkedinLogo class="writing-link__icon" />
            A formula button in Airtable to add an event to google calendar
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/martin-malinda-58b03253_portfolio-website-activity-7242832515948810241-GOt8"
            target="_blank"
          >
            <LinkedinLogo class="writing-link__icon" />
            How I built this website
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/martin-malinda-58b03253_today-i-checked-how-major-workflow-automation-activity-7235602071930998784-xNt1"
            target="_blank"
          >
            <LinkedinLogo class="writing-link__icon" />
            How do well known workflow platforms compare when it comes to
            writing code
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/martin-malinda-58b03253_ive-improved-my-flow-for-billable-hours-activity-7214913446994182148-g-wj"
            target="_blank"
          >
            <LinkedinLogo class="writing-link__icon" />
            How I'm tracking billable hours in Airtable
          </a>
        </li>
      </ul>
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
    rgba(255, 255, 255, 0.6),
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

.writing-list {
  padding: 0;
  list-style: none;

  li {
    margin-top: $space;
    line-height: 1.5;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
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

.writing-link__icon {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
}

.writing-list a:hover .writing-link__icon {
  filter: invert(1);
}
</style>
