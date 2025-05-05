<<<<<<< HEAD
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});
=======
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import sitemap from "@astrojs/sitemap";
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Add your domain here
   site: 'https://lexingtonthemes.com',
  integrations: [
      sitemap(),
      react()]
});
>>>>>>> 1694624 (Initial commit)
