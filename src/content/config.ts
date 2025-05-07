import { defineCollection, z } from "astro:content";

const weeklyMenusCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        image: z
            .object({
                url: z.string().optional(),
                alt: z.string().optional(),
            })
            .optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    weeklyMenus: weeklyMenusCollection,
};