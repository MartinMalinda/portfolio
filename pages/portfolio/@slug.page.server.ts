import portfolioSlugs from '../../data/portfolio.json';

// /pages/star-wars/movie.page.server.js
// Environment: server

export async function prerender() {
  return portfolioSlugs.map(slug => `/portfolio/${slug}`);
}

export async function onBeforeRender(pageContext) {
  // The route parameter of `/star-wars/@movieId` is available at `pageContext.routeParams`
  const { slug } = pageContext.routeParams

  const portfolioItem = await import(`../../data/${slug}.json`);
  const pageProps = { portfolioItem };

  // We make `pageProps` available as `pageContext.pageProps`
  return {
    pageContext: {
      pageProps
    }
  }
}

// By default `pageContext.*` are available only on the server. But our hydrate function
// we defined earlier runs in the browser and needs `pageContext.pageProps`; we use
// `passToClient` to tell `vite-plugin-ssr` to serialize and make `pageContext.pageProps`
// available to the browser.
export const passToClient = ['pageProps']
