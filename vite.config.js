import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: 'docs', // Output to docs folder
    emptyOutDir: true
  },
  plugins: [svelte()],
  optimizeDeps: {
    include: ['@mateothegreat/svelte5-router']
  }
});