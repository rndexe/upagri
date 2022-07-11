import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 1234,
    host: true
  },
  integrations: [svelte(), tailwind(), sitemap(), image()],
  experimental: {
    integrations: true
  }
});
