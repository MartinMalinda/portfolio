export { render };
export const clientRouting = true;

import { createApp } from "./app";
import type { PageContextClient } from "./types";

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error(
      "Client-side render() hook expects pageContext.Page to be defined",
    );

  const container = document.querySelector("#app")!;
  if (!pageContext.isHydration) {
    container.innerHTML = "";
  }

  const app = createApp(Page, pageProps, pageContext);
  app.mount("#app", pageContext.isHydration);

  // optional: only after CSR nav; during initial load browser already handles #hash
  if (!pageContext.isHydration && window.location.hash) {
    document
      .querySelector(window.location.hash)
      ?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
  }
}
