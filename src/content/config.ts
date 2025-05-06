import { defineCollection, z } from "astro:content";

const weeklyMenus = defineCollection({
    schema: z.object({
        slug: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    weeklyMenus,
};