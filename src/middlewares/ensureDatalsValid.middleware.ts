import { NextFunction, Request, Response } from "express"
import { ZodTypeAny } from "zod"

const ensureDatalsValidMiddleware =
    (schema: ZodTypeAny) =>
        (req: Request, res: Response, next: NextFunction): Response | void => {
            const validatedData: any = schema.parse(req.body)

            req.body = validatedData

            return next()
        }

export default ensureDatalsValidMiddleware