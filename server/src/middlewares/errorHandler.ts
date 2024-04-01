import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

const errorGlobalHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err.stack);
  res.status(500).json({ message: "Something went wrong" });
}

export default errorGlobalHandler;