
import {defineConfig} from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    site: 'https://dragonandbao.netlify.app/',
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        mdx(),
    ],
    output: "server",
    adapter: node({
        mode: "standalone"
    }),
});
