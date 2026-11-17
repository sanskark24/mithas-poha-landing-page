import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/mithas-poha-landing-page/' : '/',
  css: {
    postcss: {
      plugins: [],
    },
  },
});
