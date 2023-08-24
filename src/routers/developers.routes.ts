import { Router } from "express";
import { createDeveloperController, deleteDeveloperController, listDeveloperProjectsController } from "../controllers/developers.controller";
import ensureDatalsValidMiddleware from "../middlewares/ensureDatalsValid.middleware";
import { createDeveloperSchema } from "../schemas/developers.schemas";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";


export const developerRouter: Router = Router();

developerRouter.post(
  "",
  ensureDatalsValidMiddleware(createDeveloperSchema),
  createDeveloperController
);

developerRouter.get(
  "/:id",
  ensureTokenIsValidMiddleware,
  listDeveloperProjectsController
);

developerRouter.delete("/:id",
  deleteDeveloperController
);