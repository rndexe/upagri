import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import prefetch from '@astrojs/prefetch';

// https://astro.build/config

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://upagri.netlify.app", 
  server: {
    port: 1234,
    host: true
  },
  integrations: [tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    config: {
      applyBaseStyles: false
    }
  }), prefetch(), sitemap()],
  experimental: {
    integrations: true
  },
  vite: {
    build: {
      target: "es2018"
    }
  }
});