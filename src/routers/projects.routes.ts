import { Router } from "express";
import ensureDatalsValidMiddleware from "../middlewares/ensureDatalsValid.middleware";
import { createProjectSchema, projectSchema } from "../schemas/projects.schemas";
import eensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { addDeveloperToProjectController, createProjectController, deleteDeveloperFromProjectController } from "../controllers/projects.controllers";
import { ensureIsTokenOwnerMiddleware } from "../middlewares/ensureIsTokenOwner.middleware";


export const projectRouter: Router = Router();

projectRouter.post(
  "",
  ensureDatalsValidMiddleware(createProjectSchema),
  createProjectController
);

projectRouter.post(
  "/:projectId/developers/:developerId",
  eensureTokenIsValidMiddleware,
  ensureIsTokenOwnerMiddleware,
  addDeveloperToProjectController
);

projectRouter.delete(
  "/:projectId/developers/:developerId",
  eensureTokenIsValidMiddleware,
  ensureIsTokenOwnerMiddleware,
  deleteDeveloperFromProjectController
);