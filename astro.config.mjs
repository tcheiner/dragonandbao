
import {defineConfig} from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

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
});
