<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from "vue";

type TypingHeadlineProps = {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
};

const props = withDefaults(defineProps<TypingHeadlineProps>(), {
  typingSpeed: 70,
  deletingSpeed: 35,
  pauseTime: 1600,
});

const phraseIndex = ref(0);
const caretIndex = ref(0);
const isDeleting = ref(false);
let timeoutId: number | undefined;

const clearTimer = () => {
  if (timeoutId !== undefined) {
    window.clearTimeout(timeoutId);
  }
};

const schedule = (delay: number) => {
  clearTimer();
  timeoutId = window.setTimeout(tick, delay);
};

const phrases = computed(() => props.phrases ?? []);
const currentPhrase = computed(() => {
  if (phrases.value.length === 0) return "";
  return phrases.value[phraseIndex.value % phrases.value.length];
});

const currentTextArray = computed(() => Array.from(currentPhrase.value));
const currentTextLength = computed(() => currentTextArray.value.length);
const numLeftChars = computed(() =>
  Math.max(0, Math.min(caretIndex.value, currentTextLength.value)),
);
const numRightChars = computed(
  () => currentTextLength.value - numLeftChars.value,
);

const leftChars = computed(() =>
  currentTextArray.value.slice(0, numLeftChars.value),
);
const rightChars = computed(() =>
  currentTextArray.value.slice(numLeftChars.value),
);

const caretClasses = computed(() => ({
  typing: !isDeleting.value,
  erasing: isDeleting.value,
}));

const rightCharClasses = computed(() => ({
  erasing: isDeleting.value,
}));

const tick = () => {
  console.log("tick");

  if (phrases.value.length === 0) return;

  if (!isDeleting.value) {
    caretIndex.value = Math.min(caretIndex.value + 1, currentTextLength.value);
    if (caretIndex.value >= currentTextLength.value) {
      isDeleting.value = true;
      schedule(props.pauseTime);
      return;
    }
    schedule(props.typingSpeed);
    return;
  }

  caretIndex.value = Math.max(0, caretIndex.value - 1);
  if (caretIndex.value === 0) {
    isDeleting.value = false;
    phraseIndex.value = (phraseIndex.value + 1) % phrases.value.length;
    schedule(props.typingSpeed);
    return;
  }

  schedule(props.deletingSpeed);
};

onMounted(() => {
  if (props.phrases.length > 0) {
    caretIndex.value = 0;
    schedule(props.typingSpeed);
  }
});

onUnmounted(() => {
  clearTimer();
});
</script>

<template>
  <h1 class="typing-headline" aria-live="polite">
    <span class="left">
      <span
        v-for="(char, index) in leftChars"
        :key="`l-${index}`"
        class="char typed"
      >
        {{ char }}
      </span>
    </span>
    <span class="caret" :class="caretClasses" aria-hidden="true"></span>
    <span class="right">
      <span
        v-for="(char, index) in rightChars"
        :key="`r-${index}`"
        class="char"
        :class="rightCharClasses"
      >
        {{ char }}
      </span>
    </span>
  </h1>
</template>

<style lang="scss" scoped>
.typing-headline {
  margin-top: 0;
  font-size: 40px;
  line-height: 1.3;
  min-height: 1.3em;
  white-space: pre-wrap;

  @media (max-width: 800px) {
    font-size: 30px;
  }
}

.left,
.right {
  display: inline;
}

.char {
  display: inline;
}

.right .char {
  opacity: 0;
}

.right .char.erasing {
  opacity: 0.35;
}

.caret {
  display: inline-block;
  width: 0.6ch;
  height: 1em;
  border-right: 2px solid currentColor;
  animation: caret-blink 0.9s steps(2, start) infinite;
  transform: translateY(2px);
}

@keyframes caret-blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .caret {
    animation: none;
  }
}
</style>
