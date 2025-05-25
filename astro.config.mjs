import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  // Add your domain here
  site: 'https://dragonnbao.co',

  integrations: [
      sitemap(),
      react(),
      mdx(),
  ],

  adapter: node({
    mode: 'standalone',
  }),
});