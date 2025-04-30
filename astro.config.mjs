// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000', // Add site URL for development
  integrations: [tailwind()],
  output: 'server', // Enable SSR for Stripe integration
  adapter: node({
    mode: 'standalone'
  })
});