<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import BookingButton from "../../components/BookingButton.vue";
import CardLink from "../../components/CardLink.vue";
import Container from "../../components/Container.vue";
import SiteFooter from "../../components/SiteFooter.vue";
import TypingHeadline from "../../components/TypingHeadline.vue";
import LinkedinLogo from "../../components/LinkedinLogo.vue";
import TwitterLogo from "../../components/TwitterLogo.vue";
import Bolt from "../../components/icons/Bolt.vue";
import Rocket from "../../components/icons/Rocket.vue";
import Chart from "../../components/icons/Chart.vue";
import PenTool from "../../components/icons/PenTool.vue";
import User from "../../components/icons/User.vue";

type Testimonial = {
  id: string;
  author: string;
  role: string;
  source: string;
  date?: string;
  text: string;
  image: string;
};

const testimonialsList = ref<Testimonial[]>([
  {
    id: "tobias-czudej",
    author: "Tobias Czudej",
    role: "Partner at Czudej McDonough",
    source: "",
    date: "February 24, 2026",
    image: "/tobias-czudej.jpeg",
    text: "Martin is that rare developer who combines strong technical ability with real understanding of how a business actually operates. He thinks carefully about what you need, asks the right questions, and delivers work that holds up to everyday use. In a landscape where AI tools can generate code quickly, what sets Martin apart is the depth of his thinking: architecture, security, reliability, and long-term maintainability. We trust him with critical systems and he consistently delivers.",
  },
  {
    id: "yusef-smith",
    author: "Dr Yusef Smith",
    role: "Co-Founder of PropaneFitness",
    source: "Twitter",
    date: "July 5, 2025",
    image: "/yusef-smith.png",
    text: "If you need a developer and/or data guy - @martinmalindacz is easily the best we've ever worked with. He truly got on board with our vision rather than just the narrow scope of the code.",
  },
  {
    id: "kristof-bardos",
    author: "Kristof Bardos",
    role: "CEO of Green Fox Academy",
    source: "LinkedIn",
    date: "November 12, 2024",
    image: "/kristof-bardos.jpeg",
    text: "Martin is a go-to person if you need automation and lightweight ERP for your company. He is a senior dev, armed with deep tooling and business process knowledge combined with excellent communication and expectation management skills. And a fun guy!",
  },
]);

const heroHeadlines = [
  "Systems that think like you do.",
  "One system. No chaos.",
  "Workflows you can actually trust.",
  "The single source of truth, at last.",
  "A company OS that makes you relax.",
];

const slider = ref<HTMLElement | null>(null);
const currentIndex = ref(0);

function getSourceIcon(source: string) {
  if (source === "LinkedIn") return LinkedinLogo;
  if (source === "Twitter") return TwitterLogo;
  return null;
}

function goTo(index: number) {
  if (!slider.value) return;
  const slideElement = slider.value.querySelector(".slide") as HTMLElement;
  if (!slideElement) return;
  const slideWidth =
    slideElement.offsetWidth +
    parseInt(getComputedStyle(slideElement).marginRight);
  slider.value.scrollTo({
    left: index * slideWidth,
    behavior: "smooth",
  });
  currentIndex.value = index;
}

function next() {
  if (currentIndex.value < testimonialsList.value.length - 1) {
    currentIndex.value++;
    goTo(currentIndex.value);
  }
}

function previous() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    goTo(currentIndex.value);
  }
}

function handleScroll() {
  if (!slider.value) return;
  const slideElement = slider.value.querySelector(".slide") as HTMLElement;
  if (!slideElement) return;
  const slideWidth =
    slideElement.offsetWidth +
    parseInt(getComputedStyle(slideElement).marginRight);
  currentIndex.value = Math.round(slider.value.scrollLeft / slideWidth);
}

onMounted(() => {
  slider.value?.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  slider.value?.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="index">
    <div class="hero">
      <Container>
        <TypingHeadline :phrases="heroHeadlines" />
        <p>
          I design reliable workflow architecture, Airtable bases, and fast
          internal UIs.
          <br />
          <b>I'm open for collaboration:</b> audits, consulting, and hands-on
          builds.
        </p>
        <BookingButton />
      </Container>
    </div>
    <Container class="block">
      <a class="intro-block" href="/about">
        <p class="intro-copy">
          I bring 10 years of web development experience and 3 years focused on
          business automation, with a strong emphasis on Airtable systems.
          <br />
          I’ve worked with startups, agencies, and growing companies to build
          scalable internal tools and reliable workflows.
        </p>
        <span class="intro-link"> Read more <span class="arrow">→</span> </span>
      </a>
      <div class="cards">
        <CardLink
          href="/services"
          title="Services"
          description="Automation systems, Airtable builds, and internal tools focused on clarity and outcomes."
          cta="Explore services"
          :icon="Bolt"
        />
        <CardLink
          href="/products"
          title="Products"
          description="Tools I build for workflow speed and reliability."
          cta="View products"
          :icon="Rocket"
        />
        <CardLink
          href="/portfolio"
          title="Case studies"
          description="Automation systems, Airtable workflows, and web apps I've contributed to."
          cta="See the work"
          :icon="Chart"
        />
        <CardLink
          href="/writing"
          title="Writing"
          description="Notes on Airtable, workflow reliability, and performance engineering."
          cta="Read writing"
          :icon="PenTool"
        />
        <CardLink
          href="/about"
          title="About"
          description="Background, systems work, and the path that led me to automation and product work."
          cta="Read more"
          :icon="User"
        />
      </div>
    </Container>
    <section class="testimonials">
      <Container>
        <div class="testimonials-header">
          <h2>Testimonials</h2>
          <p>Notes from founders, operators, and teams I have worked with.</p>
        </div>
        <div class="slider-container">
          <div ref="slider" class="slider" aria-live="polite">
            <article
              v-for="testimonial in testimonialsList"
              :key="testimonial.id"
              class="slide"
            >
              <div class="testimonial-card">
                <div class="testimonial-header">
                  <img
                    class="avatar"
                    :src="testimonial.image"
                    :alt="testimonial.author"
                    loading="lazy"
                  />
                  <div class="meta">
                    <div class="author-row">
                      <span class="author">{{ testimonial.author }}</span>
                      <span
                        v-if="testimonial.source"
                        class="source"
                        :aria-label="testimonial.source"
                      >
                        <component
                          :is="getSourceIcon(testimonial.source)"
                          v-if="getSourceIcon(testimonial.source)"
                          class="source-icon"
                          aria-hidden="true"
                        />
                        <span v-else>{{ testimonial.source }}</span>
                      </span>
                    </div>
                    <div class="role">{{ testimonial.role }}</div>
                    <div v-if="testimonial.date" class="date">
                      {{ testimonial.date }}
                    </div>
                  </div>
                </div>
                <p class="testimonial-text">{{ testimonial.text }}</p>
              </div>
            </article>
          </div>
        </div>
        <div class="navigation">
          <button
            class="nav-arrow"
            type="button"
            aria-label="Previous testimonial"
            @click="previous"
            :disabled="currentIndex === 0"
          >
            ‹
          </button>
          <button
            class="nav-arrow"
            type="button"
            aria-label="Next testimonial"
            @click="next"
            :disabled="currentIndex >= testimonialsList.length - 1"
          >
            ›
          </button>
        </div>
      </Container>
    </section>
    <div class="mt-10 py-5">
      <SiteFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  max-width: 100%;
  padding: $space * 6 $space * 4;
  background: transparentize(rgb(166, 161, 1), 0.4);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 0, 0.1),
    rgba(255, 0, 0, 0.1)
  );
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    padding-left: $space * 2;
    padding-right: $space * 2;
    padding-top: $space * 6;
  }

  p {
    line-height: 1.6;
    font-size: 20px;
    font-weight: 500;

    @media (max-width: 800px) {
      font-size: 18px;
    }
  }
}

.cards {
  display: flex;
  flex-direction: column;
  gap: $space * 2.5;
  margin-top: $space * 3;
}

.intro-copy {
  margin: 0;
  font-size: 18px;
  line-height: 1.7;
  max-width: 720px;
  color: rgba(0, 0, 0, 0.8);

  @media (max-width: 800px) {
    font-size: 16px;
  }
}

.intro-block {
  margin-top: $space * 3;
  padding: $space * 2;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  column-gap: $space * 2;
  text-decoration: none;
  color: inherit;
  transition:
    0.2s transform,
    0.2s box-shadow,
    0.2s border-color;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.2);

    .arrow {
      transform: translateX(4px);
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    row-gap: $space;
    justify-items: start;
  }
}

.intro-link {
  display: inline-flex;
  align-items: center;
  gap: $space / 2;
  font-weight: 600;
  color: $dark-grey;
  text-decoration: none;
  width: fit-content;
  justify-self: end;

  @media (max-width: 800px) {
    justify-self: start;
  }
}

.arrow {
  transition: 0.2s transform;
}

.testimonials {
  margin-top: $space * 6;
  padding-bottom: $space * 3;
}

.testimonials-header {
  display: flex;
  flex-direction: column;
  gap: $space / 2;
  margin-bottom: $space * 2;

  h2 {
    margin: 0;
    font-size: 28px;
  }

  p {
    margin: 0;
    color: rgba(0, 0, 0, 0.6);
  }
}

.slider-container {
  overflow: hidden;
}

.slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: $space * 2;
  padding: $space 0 $space * 2;
  -webkit-overflow-scrolling: touch;
}

.slide {
  scroll-snap-align: start;
  flex: 0 0 auto;
  width: 520px;
  margin-right: $space * 2;

  @media (max-width: 900px) {
    width: 85vw;
  }
}

.testimonial-card {
  display: flex;
  flex-direction: column;
  gap: $space * 1.5;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: $space * 2;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
  height: 100%;
}

.testimonial-header {
  display: flex;
  gap: $space;
  align-items: flex-start;
}

.avatar {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.08);
  object-fit: cover;
  flex-shrink: 0;
}

.meta {
  display: flex;
  flex-direction: column;
  gap: $space / 3;
}

.author-row {
  display: flex;
  align-items: center;
  gap: $space / 2;
  font-weight: 600;
}

.source {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
}

.source :deep(svg) {
  width: 14px;
  height: 14px;
}

.role {
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.95rem;
}

.date {
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.5);
}

.testimonial-text {
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0;
}

.navigation {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: $space;
}

.nav-arrow {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 999px;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
}

.nav-arrow:disabled {
  opacity: 0.3;
  cursor: default;
}
</style>
