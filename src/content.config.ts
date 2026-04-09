import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const recipes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    prepTime: z.string(),
    cookTime: z.string(),
    servings: z.number().int().positive(),
    region: z.string(),
    tags: z.array(z.string()).min(1),
    hero: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  recipes,
};
