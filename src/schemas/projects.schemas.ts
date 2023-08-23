import { z } from "zod";

const projectSchema = z.object({
  id: z.number().positive(),
  title: z.string().max(50),
  description: z.string(),
  technology: z.string().max(30),
  repository: z.string(),
});

const createProjectSchema = projectSchema.omit({
  id: true,
});

export { projectSchema, createProjectSchema };