import { Request, Response } from "express";
import sessionService from "../services/session/session.service";


const sessionController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = await sessionService(req.body)

  return res.status(200).json({ token });
};

export { sessionController }