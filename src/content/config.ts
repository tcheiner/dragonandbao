import { defineCollection, z } from "astro:content";

const weeklyMenus = defineCollection({
    schema: z.object({
        slug: z.string(),
        image: z.object({
            url: z.string().default("/images/default.png"), // Default image URL
            alt: z.string().default("Default image description"), // Default alt text
        }),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    weeklyMenus,
};