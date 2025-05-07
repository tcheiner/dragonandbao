import { defineCollection, z } from "astro:content";

const weeklyMenusCollection = defineCollection({
    type: "content",
    schema: z.object({
        slug: z.string(),
        title: z.string(),
        image: z
            .object({
                url: z.string(),
                alt: z.string(),
            })
            .optional(),
        tags: z.array(z.string()),
    }),
});

const recipeCollection = defineCollection({
    type: "content", // Content type for recipes
    schema: z.object({
        slug: z.string(),
        title: z.string(), // Recipe title
        creditUrl: z.string().url().optional(), // Optional URL for credit/source
        image: z.object({
            url: z.string(), // Image URL
            alt: z.string(), // Alt text for the image
        }).optional(),
        idealImage: z.string().optional(), // Ideal image path
        realisticImage: z.string().optional(), // Realistic image path
        prepTime: z.number().optional(), // Preparation time in minutes
        cookTime: z.number().optional(), // Cooking time in minutes
        servings: z.number().optional(), // Number of servings
        calories: z.string().optional(), // Calories as a string (e.g., "339k")
        tags: z.array(z.string()), // Tags for categorization
    }),
});


export const collections = {
    recipes: recipeCollection,
    weeklyMenus: weeklyMenusCollection,
};