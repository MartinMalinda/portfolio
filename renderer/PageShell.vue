<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import Link from "./Link.vue";
import LinkedinLogo from "../components/LinkedinLogo.vue";
import MediumLogo from "../components/MediumLogo.vue";
import GithubLogo from "../components/GithubLogo.vue";
import Envelope from "../components/Envelope.vue";
import Pin from "../components/Pin.vue";

const isNavOpen = ref(false);
const navRef = ref<HTMLElement | null>(null);

const closeNav = () => {
  isNavOpen.value = false;
};

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};


const getIsMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 900px)").matches;

const updateBodyScroll = (locked: boolean) => {
  if (typeof document === "undefined") return;
  document.body.style.overflow = locked ? "hidden" : "";
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && isNavOpen.value) {
    closeNav();
  }
};

watch(isNavOpen, async (value) => {
  if (!getIsMobile()) return;
  updateBodyScroll(value);
  if (value) {
    await nextTick();
    navRef.value?.focus();
  }
});

onMounted(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", onKeydown);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("keydown", onKeydown);
  }
  updateBodyScroll(false);
});
</script>

<template>
  <div class="page-shell" :class="{ 'nav-open': isNavOpen }">
    <header class="topbar">
      <button
        class="menu-button"
        type="button"
        aria-controls="site-sidebar"
        :aria-expanded="isNavOpen"
        @click="toggleNav"
      >
        <span class="menu-icon" aria-hidden="true"></span>
        <span class="menu-label">Menu</span>
      </button>
      <div class="topbar-title">Martin Malinda</div>
      <div class="topbar-spacer"></div>
    </header>
    <div class="overlay" @click="closeNav" />
    <nav
      id="site-sidebar"
      ref="navRef"
      class="sidebar"
      tabindex="-1"
      aria-label="Primary"
    >
      <div class="sidebar-inner">
        <div class="identity flex ai-center gap-2">
          <div class="cover">
            <img
              src="https://res.cloudinary.com/serenity-themes/image/upload/w_350,f_webp/v1716215445/portfolio-2/pic.png"
              class="profile-pic"
              alt="Profile picture of Martin Malinda"
            />
          </div>
          <div class="identity-text">
            <h2>
              <span>Martin Malinda</span>
            </h2>
            <div class="location"><Pin class="pin" />Prague / Lisbon</div>
          </div>
        </div>
        <div class="nav-links">
          <Link href="/" class="nav-link theme-home" @click="closeNav">
            <span class="label">Home</span>
            <span class="short">Home</span>
          </Link>
          <Link href="/services" class="nav-link theme-services" @click="closeNav">
            <span class="label">Services</span>
            <span class="short">Svc</span>
          </Link>
          <Link href="/products" class="nav-link theme-products" @click="closeNav">
            <span class="label">Products</span>
            <span class="short">Prod</span>
          </Link>
          <Link href="/portfolio" class="nav-link theme-portfolio" @click="closeNav">
            <span class="label">Case Studies</span>
            <span class="short">Work</span>
          </Link>
          <Link href="/writing" class="nav-link theme-writing" @click="closeNav">
            <span class="label">Writing</span>
            <span class="short">Wrt</span>
          </Link>
          <Link href="/about" class="nav-link theme-about" @click="closeNav">
            <span class="label">About</span>
            <span class="short">About</span>
          </Link>
        </div>
        <div class="sidebar-footer">
          <div class="socials">
            <a
              target="_blank"
              class="linkedin-link"
              title="LinkedIn"
              href="https://www.linkedin.com/in/martin-malinda-58b03253/"
            >
              <LinkedinLogo class="link-logo" />
            </a>
            <a
              target="_blank"
              class="medium-link"
              title="Medium.com blog"
              href="https://medium.com/@martinmalinda"
            >
              <MediumLogo class="link-logo" />
            </a>
            <a
              href="https://github.com/martinmalinda"
              class="github-link"
              target="_blank"
              title="Github"
            >
              <GithubLogo class="link-logo" />
            </a>
            <a
              target="_blank"
              title="Send an email"
              href="mailto:martin@otimo.us"
              class="medium-link"
            >
              <Envelope class="link-logo" />
            </a>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="page w100p">
        <slot />
      </div>
    </main>
  </div>
</template>
<style lang="scss">
@import "../style.scss";
</style>
<style lang="scss" scoped>
$yellow: #f2eac1;


.page-shell {
  display: block;
  min-height: 100vh;
}

a {
  text-decoration: none;
}

.topbar {
  display: none;
  position: sticky;
  top: 0;
  z-index: 200;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: $space $space * 2;
  justify-content: space-between;
  align-items: center;

  .topbar-title {
    font-size: 14px;
    font-weight: 600;
  }

  .topbar-spacer {
    width: 60px;
  }
}

.menu-button {
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: white;
  border-radius: 999px;
  padding: 8px 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  .menu-icon {
    width: 18px;
    height: 2px;
    background: $almost-black;
    position: relative;
    display: block;
  }

  .menu-icon::before,
  .menu-icon::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: $almost-black;
  }

  .menu-icon::before {
    top: -6px;
  }

  .menu-icon::after {
    top: 6px;
  }
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  pointer-events: none;
  transition: 0.2s opacity ease-in-out;
  z-index: 150;
}

.sidebar {
  width: 260px;
  background: white;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 160;
  padding: $space * 2;
  box-sizing: border-box;
  transition: 0.2s transform ease-in-out, 0.2s width ease-in-out;
  overflow-y: auto;

  .sidebar-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: $space * 2;
  }

  .identity {
    align-items: center;
  }

  .identity-text {
    display: flex;
    flex-direction: column;
    gap: $space / 4;

    h2 {
      margin: 0;
      line-height: 1.2;
    }
  }
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-left: -$space * 2;
  margin-right: -$space * 2;

  .nav-link {
    padding: 12px $space * 2;
    border-radius: 0;
    color: $almost-black;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0;
    transition: 0.15s background, 0.15s border-color;

    &.active {
      background: var(--nav-bg);
    }

    &:hover {
      background: var(--nav-bg);
    }

    .short {
      display: none;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
}

.theme-home {
  --nav-bg: linear-gradient(
    135deg,
    rgba(255, 255, 0, 0.1),
    rgba(255, 0, 0, 0.1)
  );
}

.theme-services {
  --nav-bg: linear-gradient(
    135deg,
    rgba(255, 255, 0, 0.08),
    rgba(0, 0, 0, 0.06)
  );
}

.theme-products {
  --nav-bg: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.05),
    rgba(255, 255, 255, 0.4)
  );
}

.theme-portfolio {
  --nav-bg: linear-gradient(
    135deg,
    rgba(255, 255, 0, 0.08),
    rgba(0, 0, 0, 0.06)
  );
}

.theme-writing {
  --nav-bg: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.6),
    rgba(0, 0, 0, 0.06)
  );
}

.theme-about {
  --nav-bg: linear-gradient(
    135deg,
    rgba(255, 0, 0, 0.08),
    rgba(0, 0, 0, 0.06)
  );
}

.sidebar-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: $space;
}

main {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 260px;
  box-sizing: border-box;
}

h2 {
  font-size: 18px;
}

img {
  height: 50px;
  width: 50px;
  object-fit: cover;
  object-position: 100% 100%;
  border-radius: 50%;
  display: block;
}

.location {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  gap: $space / 2;

  .pin {
    position: relative;
    width: 1em;
    height: 1em;
    top: 1px;
  }
}

.socials {
  display: flex;
  gap: $space;
  height: 1.5em;

  a {
    padding: $space / 3;
    font-size: 15px;
    padding-left: 0;
    color: black;
    cursor: pointer;
  }

  ::v-deep(svg) {
    width: 1.5em;
    height: 1.5em;
    position: relative;
    top: -2px;
  }
}

@media (max-width: 900px) {
  .topbar {
    display: flex;
  }

  .sidebar {
    transform: translateX(-100%);
    width: 280px;
  }

  .page-shell.nav-open {
    .sidebar {
      transform: translateX(0);
    }

    .overlay {
      opacity: 1;
      pointer-events: auto;
    }
  }

  main {
    padding-left: 0;
  }
}
</style>
