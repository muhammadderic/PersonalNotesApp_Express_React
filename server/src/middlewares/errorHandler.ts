import { ErrorRequestHandler, Request, Response } from "express";

const errorGlobalHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response
) => {
  console.log(err.stack);
  res.status(500).json({ message: "Something went wrong" });
}

export default errorGlobalHandler;