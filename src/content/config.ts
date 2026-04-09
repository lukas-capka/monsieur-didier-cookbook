import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		prepTime: z.string(),
		cookTime: z.string(),
		servings: z.number().int().positive(),
		region: z.string(),
		tags: z.array(z.string()),
		hero: z.string(),
		draft: z.boolean().default(false),
	}),
});

export const collections = {
	recipes,
};
