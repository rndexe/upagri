import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 1234,
    host: true
  },
  integrations: [tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    config: { applyBaseStyles: false },
  })],
  experimental: {
    integrations: true
  }
});
