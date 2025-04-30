// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://pbo-pros.netlify.app/', // Add site URL for development
  integrations: [tailwind()],
  output: 'static', // Enable SSR for Stripe integration
  adapter: netlify()
});