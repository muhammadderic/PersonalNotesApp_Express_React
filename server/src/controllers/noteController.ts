import { Request, Response } from "express";

const noteController = {
  starting: async (req: Request, res: Response) => {
    res.send("Hello Deric");
  }
}

export default noteController;