import { Request, Response } from "express";
import createDeveloperService from "../services/developers/createDevelopers.service";
import { deleteDeveloperService } from "../services/developers/deleteDeveloper.service";
import { listDeveloperProjectsService } from "../services/developers/listDeveloperProjects.service";



const createDeveloperController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newDeveloper = await createDeveloperService(req.body);

  return res.status(201).json(newDeveloper);
};

const listDeveloperProjectsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
 
  const projectsDeveloper = await listDeveloperProjectsService(req.params.id)
  
  return res.status(200).json(projectsDeveloper);
};

const deleteDeveloperController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  
  await deleteDeveloperService(req.params.id)

  return res.status(204).json();
};

export {
  createDeveloperController,
  listDeveloperProjectsController,
  deleteDeveloperController
};