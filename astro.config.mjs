import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import {astroImageTools} from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [astroImageTools]
  },
  server: { port: 1234, host: true},
  integrations: [svelte(), tailwind(), sitemap()],
});
