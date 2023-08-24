import { Router } from "express";
import { sessionController } from "../controllers/session.controllers";
import ensureDatalsValidMiddleware from "../middlewares/ensureDatalsValid.middleware";
import { sessionSchema } from "../schemas/session.schemas";


export const sessionRouter: Router = Router();

sessionRouter.post(
  "",
  ensureDatalsValidMiddleware(sessionSchema),
  sessionController
);