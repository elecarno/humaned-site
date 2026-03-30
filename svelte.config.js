// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// export default {
//   // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
//   // for more information about preprocessors
//   preprocess: vitePreprocess(),
// }

import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    adapter: adapter({
      fallback: null
    }),
    paths: {
      base: dev ? '' : '', // No base path for root GitHub Pages deployment
    },
    appDir: 'internal', // optional
    trailingSlash: 'ignore' // optional
  }
};