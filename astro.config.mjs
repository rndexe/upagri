import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
//import { astroImageTools } from "astro-imagetools";


import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 1234,
    host: true
  },
  integrations: [svelte(), sitemap(), image(), tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    config: { applyBaseStyles: false },
  })],
  experimental: {
    integrations: true
  }
});
