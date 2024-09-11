export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

import { renderToString as renderToString_ } from '@vue/server-renderer'
import type { App } from 'vue'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import { createApp } from './app'
import type { PageContextServer } from './types'

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const app = createApp(Page, pageProps, pageContext)

  const appHtml = await renderToString(app)

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Martin Malinda - Automation, Web dev, Startups'
  const desc = (documentProps && documentProps.description) || `I've been building and helping startups for over 10 years. I can help you develop web apps, analyze the technical landscape & automate the mundane.`

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <meta name="twitter:site" content="@martinmalindacz">
        <meta name="view-transition" content="same-origin">
        <meta property="og:type" content="profile">
        <script type="application/ld+json">{
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "Martin Malinda",
  "disambiguatingDescription": "I've been building and helping startups for over 10 years. I can help you develop web apps, analyze the technical landscape & automate the mundane.",
  "jobTitle": " Automation, Web dev, Startups",
  "url" : "https://wwww.martinmalinda.cz",
  "birthDate": "1992-10-19",
  "birthPlace": {
    "@type": "Place",
    "name": "Prague"
  },
  "gender": "Male",
  "makesOffer": {
    "@type": "Offer",
    "name": "Startups consultancy | Business process automation | Web development"
  },
  "nationality": {
    "@type": "Country",
    "name": "Czech Republic"
  },
  "url": "https://www.martinmalinda.cz",
  "sameAs" : [
    "https://twitter.com/martinmalindacz",
    "https://github.com/martinmalinda"
  ]
}</script>
 <style>
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

</style>
        <title>${title}</title>
      </head>
      <body>
       <script>
        // No need to wait for DOMContentLoaded or load
if (window.location.hash) {
  const element = document.querySelector(window.location.hash);
  if (element) {
    element.scrollIntoView({ behavior: 'instant' });
  }
}
  </script>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
        <script>
        // No need to wait for DOMContentLoaded or load
if (window.location.hash) {
  const element = document.querySelector(window.location.hash);
  if (element) {
    element.scrollIntoView({ behavior: 'instant' }); // Instant scroll to the element
  }
}
  </script>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}

async function renderToString(app: App) {
  let err: unknown
  // Workaround: renderToString_() swallows errors in production, see https://github.com/vuejs/core/issues/7876
  app.config.errorHandler = (err_) => {
    err = err_
  }
  const appHtml = await renderToString_(app)
  if (err) throw err
  return appHtml
}

export async function prerender() {
  return ['/'];
}
