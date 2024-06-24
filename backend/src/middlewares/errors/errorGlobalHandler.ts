import { NextFunction, Request, Response } from "express";

export const errorGlobalHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res
    .status(500)
    .json({
      success: false,
      message: "Internal Server Error",
      err,
    });
  next();
};