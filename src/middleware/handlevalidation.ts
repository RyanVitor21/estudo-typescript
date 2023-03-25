import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req)

    if (error.isEmpty()) {
        return next()
    }

    const extratecErrors: object[] = []

    error.array().map((err) => extratecErrors.push({[err.param]: err.msg}))

    return res.status(422).json({
        erros: extratecErrors,
    })
}
