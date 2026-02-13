<script lang="ts" setup>
import { computed, ref } from "vue";
import Button from "../../components/Button.vue";
import ChatGptLogo from "../../components/ChatGptLogo.vue";
import ClaudeLogo from "../../components/ClaudeLogo.vue";
import CopyIcon from "../../components/CopyIcon.vue";
import MistralLogo from "../../components/MistralLogo.vue";
import Container from "../../components/Container.vue";
import SiteFooter from "../../components/SiteFooter.vue";

type ToggleOption = {
  id: string;
  label: string;
  prompt: string;
  group: "Services" | "Goals" | "Pain points" | "Constraints";
};

const sourceUrl = "http://martinmalinda.cz/llms-full.txt";

const toggleOptions: ToggleOption[] = [
  {
    id: "process-audit",
    label: "Process audit",
    prompt: "process audit and workflow mapping",
    group: "Services",
  },
  {
    id: "airtable-development",
    label: "Airtable development",
    prompt: "Airtable development and base design",
    group: "Services",
  },
  {
    id: "internal-tooling",
    label: "Internal tooling",
    prompt: "internal tools and admin interfaces",
    group: "Services",
  },
  {
    id: "data-sync",
    label: "Data synchronization",
    prompt: "data synchronization across tools",
    group: "Services",
  },
  {
    id: "web-dev",
    label: "Web development",
    prompt: "web development for internal products",
    group: "Services",
  },
  {
    id: "single-source-of-truth",
    label: "Single source of truth",
    prompt: "create a single source of truth",
    group: "Goals",
  },
  {
    id: "reduce-manual-work",
    label: "Reduce manual work",
    prompt: "reduce manual work and fragile processes",
    group: "Goals",
  },
  {
    id: "connect-tools",
    label: "Connect tools",
    prompt: "connect tools into a coherent system",
    group: "Goals",
  },
  {
    id: "ai-augmentation",
    label: "AI augmentation",
    prompt: "introduce AI in pragmatic, business-aligned ways",
    group: "Goals",
  },
  {
    id: "workflow-chaos",
    label: "Workflow chaos",
    prompt: "processes are fragmented or unclear",
    group: "Pain points",
  },
  {
    id: "data-inconsistency",
    label: "Data inconsistency",
    prompt: "data is inconsistent or out of sync across tools",
    group: "Pain points",
  },
  {
    id: "slow-internal-ops",
    label: "Slow internal ops",
    prompt: "internal operations are slow or manual",
    group: "Pain points",
  },
  {
    id: "legacy-systems",
    label: "Legacy systems",
    prompt: "legacy systems are holding the team back",
    group: "Pain points",
  },
  {
    id: "timeline",
    label: "Timeline",
    prompt: "timeline expectations and engagement length",
    group: "Constraints",
  },
  {
    id: "budget",
    label: "Budget",
    prompt: "budget expectations or pricing model",
    group: "Constraints",
  },
  {
    id: "tech-stack",
    label: "Existing stack",
    prompt: "existing tools and tech stack constraints",
    group: "Constraints",
  },
];

const activeIds = ref<string[]>(["process-audit", "airtable-development"]);
const copyState = ref("Copy prompt");
const companyUrl = ref("");
const companyDescription = ref("");
const lastFetchedUrl = ref("");
const isFetchingDescription = ref(false);
let urlDebounceTimer: ReturnType<typeof setTimeout> | null = null;

const groupedOptions = computed(() => {
  const groups: Record<ToggleOption["group"], ToggleOption[]> = {
    Services: [],
    Goals: [],
    "Pain points": [],
    Constraints: [],
  };

  for (const option of toggleOptions) {
    groups[option.group].push(option);
  }

  return groups;
});

const selectedPrompts = computed(() => {
  return toggleOptions
    .filter((option) => activeIds.value.includes(option.id))
    .reduce<Record<ToggleOption["group"], string[]>>(
      (acc, option) => {
        acc[option.group].push(option.prompt);
        return acc;
      },
      { Services: [], Goals: [], "Pain points": [], Constraints: [] },
    );
});

const prompt = computed(() => {
  const lines: string[] = [];

  const cleanedUrl = companyUrl.value.trim();
  const cleanedDescription = companyDescription.value.trim();

  if (cleanedDescription || cleanedUrl) {
    const companyLabel = cleanedUrl
      ? `My company (${cleanedUrl})`
      : "My company";
    if (cleanedDescription) {
      lines.push(`${companyLabel} is focused on: ${cleanedDescription}.`);
    } else if (cleanedUrl) {
      lines.push(`My company: ${cleanedUrl}.`);
    }
  }

  lines.push(
    "I am evaluating a potential collaboration with Martin Malinda - a process & automation specialist & a web developer.",
    `Review his summarized website at: ${sourceUrl}.`,
  );

  const {
    Services,
    Goals,
    "Pain points": PainPoints,
    Constraints,
  } = selectedPrompts.value;

  if (Services.length) {
    lines.push("", `Focus on: ${Services.join(", ")}.`);
  }

  if (Goals.length) {
    lines.push(`Goals: ${Goals.join(", ")}.`);
  }

  if (PainPoints.length) {
    lines.push(`Current pain points: ${PainPoints.join(", ")}.`);
  }

  if (Constraints.length) {
    lines.push(`Constraints to consider: ${Constraints.join(", ")}.`);
  }

  return lines.join("\n");
});

const encodedPrompt = computed(() => encodeURIComponent(prompt.value));

const chatGptUrl = computed(
  () => `https://chatgpt.com/?q=${encodedPrompt.value}`,
);
const claudeUrl = computed(
  () => `https://claude.ai/new?q=${encodedPrompt.value}`,
);
const mistralUrl = computed(
  () => `https://chat.mistral.ai/chat?q=${encodedPrompt.value}`,
);

function toggleOption(optionId: string) {
  if (activeIds.value.includes(optionId)) {
    activeIds.value = activeIds.value.filter((id) => id !== optionId);
    return;
  }

  activeIds.value = [...activeIds.value, optionId];
}

function normalizeUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return null;

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.toString();
    }
  } catch (error) {
    // ignore
  }

  try {
    const parsed = new URL(`https://${trimmed}`);
    return parsed.toString();
  } catch (error) {
    return null;
  }
}

function buildDescriptionFromMicrolink(payload: {
  data?: {
    description?: string;
    title?: string;
    publisher?: string;
  };
}) {
  const description = payload?.data?.description?.trim();
  const title = payload?.data?.title?.trim();
  const publisher = payload?.data?.publisher?.trim();

  const details: string[] = [];

  if (title) details.push(title);
  if (publisher && publisher !== title) details.push(publisher);

  if (description) {
    if (details.length) {
      return `${description} (${details.join(" — ")})`;
    }
    return description;
  }

  if (details.length) {
    return details.join(" — ");
  }

  return "";
}

async function fetchCompanyDescription() {
  if (companyDescription.value.trim()) return;

  const normalizedUrl = normalizeUrl(companyUrl.value);
  if (!normalizedUrl) return;
  if (normalizedUrl === lastFetchedUrl.value) return;

  isFetchingDescription.value = true;

  try {
    const response = await fetch(
      `https://api.microlink.io/?url=${encodeURIComponent(normalizedUrl)}`,
    );

    if (!response.ok) return;

    const payload = await response.json();
    const description = buildDescriptionFromMicrolink(payload);

    if (description && !companyDescription.value.trim()) {
      companyDescription.value = description;
    }

    lastFetchedUrl.value = normalizedUrl;
  } catch (error) {
    // ignore
  } finally {
    isFetchingDescription.value = false;
  }
}

function handleUrlInput() {
  if (urlDebounceTimer) {
    clearTimeout(urlDebounceTimer);
  }

  urlDebounceTimer = setTimeout(() => {
    fetchCompanyDescription();
  }, 600);
}

function handleUrlBlur() {
  if (urlDebounceTimer) {
    clearTimeout(urlDebounceTimer);
    urlDebounceTimer = null;
  }

  fetchCompanyDescription();
}

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(prompt.value);
    copyState.value = "Copied!";
    setTimeout(() => {
      copyState.value = "Copy prompt";
    }, 1600);
  } catch (error) {
    copyState.value = "Copy failed";
    setTimeout(() => {
      copyState.value = "Copy prompt";
    }, 1600);
  }
}
</script>

<template>
  <div class="chat">
    <div class="hero">
      <Container>
        <h1 class="hero-title">Ask AI about my services</h1>
        <p>
          Build a focused prompt by toggling the service and output details
          below.
        </p>
      </Container>
    </div>
    <Container class="block">
      <div class="builder">
        <div
          class="section"
          v-for="(options, group) in groupedOptions"
          :key="group"
        >
          <h2>{{ group }}</h2>
          <div class="toggle-row">
            <button
              v-for="option in options"
              :key="option.id"
              type="button"
              class="toggle"
              :class="{ active: activeIds.includes(option.id) }"
              @click="toggleOption(option.id)"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
        <div class="section">
          <h2>Company context</h2>
          <div class="field">
            <label for="company-url">Company URL</label>
            <input
              id="company-url"
              v-model="companyUrl"
              type="url"
              placeholder="https://example.com"
              class="text-input"
              @input="handleUrlInput"
              @blur="handleUrlBlur"
            />
          </div>
          <div class="field">
            <label for="company-description">Company description</label>
            <textarea
              id="company-description"
              v-model="companyDescription"
              placeholder="Short description of what you do, team size, or key systems."
              class="text-area"
              rows="3"
            />
          </div>
        </div>
        <div class="section">
          <h2>Prompt</h2>
          <textarea class="prompt" :value="prompt" readonly />
          <div class="actions">
            <Button
              type="button"
              size="smaller"
              variant="primary"
              :icon="CopyIcon"
              @click="copyPrompt"
            >
              {{ copyState }}
            </Button>
            <Button
              variant="secondary"
              size="smaller"
              :href="chatGptUrl"
              target="_blank"
              :icon="ChatGptLogo"
            >
              Open in ChatGPT
            </Button>
            <Button
              variant="secondary"
              size="smaller"
              :href="claudeUrl"
              target="_blank"
              :icon="ClaudeLogo"
            >
              Open in Claude
            </Button>
            <Button
              variant="secondary"
              size="smaller"
              :href="mistralUrl"
              target="_blank"
              :icon="MistralLogo"
            >
              Open in Mistral
            </Button>
          </div>
        </div>
      </div>
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
    rgba(3, 18, 140, 0.08),
    rgba(255, 132, 0, 0.08)
  );
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    padding-left: $space * 2;
    padding-right: $space * 2;
    padding-top: $space * 6;
  }

  .hero-title {
    display: inline-flex;
    align-items: center;
    gap: $space;
  }

  h1 {
    margin-top: 0;
    font-size: 38px;
  }

  p {
    line-height: 1.6;
    font-size: 18px;
    font-weight: 500;
    margin: $space 0 0;
  }
}

.builder {
  margin-top: $space * 4;
  display: flex;
  flex-direction: column;
  gap: $space * 3;
}

.section h2 {
  margin: 0 0 $space;
  font-size: 22px;
}

.toggle-row {
  display: flex;
  flex-wrap: wrap;
  gap: $space;
}

.toggle {
  border-radius: 999px;
  padding: $space * 0.9 $space * 1.6;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.15s all;
}

.toggle:hover {
  border-color: rgba(0, 0, 0, 0.4);
  transform: translateY(-1px);
}

.toggle.active {
  background: $dark-blue;
  border-color: $dark-blue;
  color: white;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.15);
}

.chatgpt-logo {
  width: 34px;
  height: 34px;
  fill: rgba(0, 0, 0, 0.75);
}

.field {
  display: flex;
  flex-direction: column;
  gap: $space / 2;
  margin-bottom: $space * 1.5;
}

.field label {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.75);
}

.text-input,
.text-area {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: $space;
  font-size: 15px;
  line-height: 1.5;
}

.text-area {
  resize: vertical;
}

.prompt {
  width: 100%;
  min-height: 220px;
  resize: vertical;
  padding: $space * 1.5;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.9);
  font-size: 15px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.85);
}

.actions {
  margin-top: $space * 1.5;
  display: flex;
  flex-wrap: wrap;
  gap: $space;
}

@media (max-width: 700px) {
  .actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
