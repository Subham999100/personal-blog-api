import type { Request, Response, NextFunction } from "express";

export function logger(
    req: Request,
    _res: Response,
    next: NextFunction,
): void {
    console.log(`${req.method} ${req.url}`);

    next();
}