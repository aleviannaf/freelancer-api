import { Response, Request } from "express";
import { createProjectService } from "../services/projects/createProject.service";
import { addDeveloperToProjectService } from "../services/projects/addDeveloperToProject.service";
import { deleteDeveloperFromProjectService } from "../services/projects/deleteDeveloperFromProject.service";

const createProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newProduct = await createProjectService(req.body);

  return res.status(201).json(newProduct);
};

const addDeveloperToProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { projectId, developerId } = req.params;

  const addDeveloper = await addDeveloperToProjectService(
    developerId,
    projectId
  );

  return res.status(201).json(addDeveloper);
};

const deleteDeveloperFromProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { projectId, developerId } = req.params;

  await deleteDeveloperFromProjectService(developerId, projectId);

  return res.status(204).send();
};

export {
  createProjectController,
  addDeveloperToProjectController,
  deleteDeveloperFromProjectController 
};