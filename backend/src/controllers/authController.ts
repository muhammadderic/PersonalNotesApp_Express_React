// import { Request, Response, NextFunction } from "express";
import { Request, NextFunction, Response } from "express";
import bcrypt from "bcryptjs";

import User from "../models/userModel";

// Create a new user
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userName, email, password, address, phone, avatar, userType } = req.body;

    // Input validation
    if (!userName || !email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    // Check user
    const exisiting = await User.findOne({ email });
    if (exisiting) {
      return res.status(500).send({
        success: false,
        message: "Email Already Registerd please Login",
      });
    }

    // Hashing password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      address,
      phone,
      avatar,
      userType,
    });

    // Success message
    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });

  } catch (error) {
    next(error);
  }
};

// Get a note
// export const getNote = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const note = await authModel.findById(req.params.id);
//     if (!note) {
//       return res.status(404).json({ message: "Note not found" });
//     }
//     res.status(200).json(note);
//   } catch (error) {
//     next(error);
//   }
// };

// Create a note
// export const createNote = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const newNote = new authModel(req.body);
//     await newNote.save();
//     res.status(201).json({ message: "New note has created" });
//   } catch (error) {
//     next(error);
//   }
// };

// Update a note
// export const updateNote = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const updatedNote = await authModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedNote) {
//       return res.status(404).json({ message: "Note not found" });
//     }
//     res.status(200).json(updatedNote);
//   } catch (error) {
//     next(error);
//   }
// };

// Delete a note
// export const deleteNote = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const deletedNote = await authModel.findByIdAndDelete(req.params.id);
//     if (!deletedNote) {
//       return res.status(404).json({ message: "Note not found" });
//     }
//     res.status(200).json({ message: "Note has deleted" });
//   } catch (error) {
//     next(error);
//   }
// };