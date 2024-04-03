import { Request, Response, NextFunction } from "express";

const noteController = {
  // Get all notes
  getAllNotes: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ message: "Get all notes" });
    } catch (error) {
      next(error);
    }
  },

  // Get a note
  getNote: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ message: "Get a note" });
    } catch (error) {
      next(error);
    }
  },

  // Create a note
  createNote: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).json({ message: "Create a note" });
    } catch (error) {
      next(error);
    }
  },

  // Update a note
  updateNote: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ message: "Update a note" });
    } catch (error) {
      next(error);
    }
  },

  // Delete a note
  deleteNote: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ message: "Delete a note" });
    } catch (error) {
      next(error);
    }
  }
}

export default noteController;