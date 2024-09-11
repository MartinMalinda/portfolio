export { render }

import { createApp } from './app'
import type { PageContextClient } from './types'

// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')

  if (!pageContext.isHydration) {
    document.querySelector('#app')!.innerHTML = '';
    const app = createApp(Page, pageProps, pageContext);
    app.mount('#app');

    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'instant' }); // Instant scroll to the element
      }
    }
  }
}

export const clientRouting = true;
/* To enable Client-side Routing:
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
