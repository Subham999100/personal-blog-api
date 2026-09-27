import type { ErrorRequestHandler } from "express";

import { AppError } from "../errors/app-error.js";

export const errorHandler: ErrorRequestHandler = (
    err,
    _req,
    res,
    _next,
) => {
    console.error(err);

    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            error: {
                code: err.code,
                message: err.message,
            },
        });

        return;
    }

    res.status(500).json({
        error: {
            code: "INTERNAL_SERVER_ERROR",
            message: "Internal server error",
        },
    });
};