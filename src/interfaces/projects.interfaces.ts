import { z } from "zod";
import { QueryResult } from "pg";
import {
  createProjectSchema,
  projectSchema,
} from "../schemas/projects.schemas";

type Project = z.infer<typeof projectSchema>;
type ProjectsRequest = z.infer<typeof createProjectSchema>;
type ProjectResult = QueryResult<Project>;

export { Project, ProjectsRequest, ProjectResult };