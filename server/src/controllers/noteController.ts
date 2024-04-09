// import { Request, Response, NextFunction } from "express";
import { Request, NextFunction, Response } from "express";
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
    const note = await noteModel.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

// Create a note
export const createNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newNote = new noteModel(req.body);
    await newNote.save();
    res.status(201).json({ message: "New note has created" });
  } catch (error) {
    next(error);
  }
};

// Update a note
export const updateNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedNote = await noteModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    next(error);
  }
};

// Delete a note
export const deleteNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedNote = await noteModel.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note has deleted" });
  } catch (error) {
    next(error);
  }
};