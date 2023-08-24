import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const ensureIsTokenOwnerMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): Response | void => {
    const { decoded } = res.locals

    if (decoded.sub !== req.params.developerId){
        throw new AppError("Only the account owner can do this", 403)
    }

    return next()
}

export { ensureIsTokenOwnerMiddleware }