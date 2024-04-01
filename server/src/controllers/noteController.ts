import { Request, Response, NextFunction } from "express";

const noteController = {
  starting: async (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello Deric");
  }
}

export default noteController;