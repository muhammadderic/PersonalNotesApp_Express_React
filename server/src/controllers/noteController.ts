import { Request, Response, NextFunction } from "express";
import noteModel from "../models/noteModel";

// Get all notes
export const getAllNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await noteModel.find();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

// Get a note
export const getNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: "Get a note" });
  } catch (error) {
    next(error);
  }
};

// Create a note
export const createNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(201).json({ message: "Create a note" });
  } catch (error) {
    next(error);
  }
};

// Update a note
export const updateNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: "Update a note" });
  } catch (error) {
    next(error);
  }
};

// Delete a note
export const deleteNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: "Delete a note" });
  } catch (error) {
    next(error);
  }
};