// import { Request, Response, NextFunction } from "express";
import { Request, NextFunction, Response } from "express";
import bcrypt from "bcryptjs";

import User from "../models/userModel";

// REGISTER A NEW USER
export const userRegister = async (req: Request, res: Response, next: NextFunction) => {
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

// USER LOG IN
export const userLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res.status(409).send({
        success: false,
        message: "Please provide email and password",
      });
    }

    // Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(409).send({
        success: false,
        message: "Email not registered",
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(409).send({
        success: false,
        message: "Incorrect password",
      });
    }

    // Success message
    res.status(200).send({
      success: true,
      message: "User logged in successfully",
      user,
    });

  } catch (error) {
    next(error);
  }
};

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