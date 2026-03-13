import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  schema: z.object({
    articleId: z.string().optional(),
    title: z.string(),
    subtitle: z.string().optional(),
    published: z.string().optional(), // ISO date
    date: z.string().optional(), // legacy field
    boundary: z.string().optional(),
    audience: z.string().optional(),
    symptom: z.string().optional(),
    featured: z.boolean().optional(),
    source: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    canonicalUrl: z.string().url().optional(),
    canonical: z.string().url().optional(), // legacy field
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { insights };
