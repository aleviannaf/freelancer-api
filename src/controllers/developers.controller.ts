import { Request, Response } from "express";
import createDeveloperService from "../services/developers/createDevelopers.service";



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
 

  return res.status(200).json();
};

const deleteDeveloperController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  
  return res.status(204).json();
};

export {
  createDeveloperController,
  listDeveloperProjectsController,
  deleteDeveloperController
};