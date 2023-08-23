import { z } from "zod";

const developerSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  email: z.string().max(50).email(),
  password: z.string().max(120),
  active: z.boolean().default(true),
});

const createDeveloperSchema = developerSchema.omit({
  id: true,
  active: true,
});

const developerWithoutPassword = developerSchema.omit({
  password: true,
});

export { developerSchema, createDeveloperSchema, developerWithoutPassword };