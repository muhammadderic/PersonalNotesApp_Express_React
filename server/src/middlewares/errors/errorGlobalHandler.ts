import { NextFunction, Request, Response } from "express";

export const errorGlobalHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  res.status(500)
    .json({
      message: "Internal Server Error"
    });
};