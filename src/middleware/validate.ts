import type { RequestHandler } from "express";
import type { ZodType } from "zod";

import { AppError } from "../errors/app-error.js";

export function validate(schema: ZodType): RequestHandler {
    return (req, _res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const error = new AppError(
                400,
                "VALIDATION_ERROR",
                "Invalid request data",
                result.error.issues,
            );

            next(error);

            return;
        }

        req.body = result.data;

        next();
    };
}