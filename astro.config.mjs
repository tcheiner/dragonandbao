
import {defineConfig} from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    // Add your domain here
    site: 'https://dragonandbao.netlify.app',
    integrations: [
        sitemap(),
        react(),
        mdx(),
    ],

});
