import { z } from "zod";
import { QueryResult } from "pg";
import {
  createDeveloperSchema,
  developerSchema,
  developerWithoutPassword,
} from "../schemas/developers.schemas";

type Developer = z.infer<typeof developerSchema>;
type DeveloperRequest = z.infer<typeof createDeveloperSchema>;
type DeveloperReturn = z.infer<typeof developerWithoutPassword>;
type DeveloperResult = QueryResult<Developer>;

export { Developer, DeveloperRequest, DeveloperReturn, DeveloperResult };