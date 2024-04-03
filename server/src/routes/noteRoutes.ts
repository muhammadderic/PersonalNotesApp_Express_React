import express from "express";
const router = express.Router();

import noteController from "../controllers/noteController";

router.get("/", noteController.getAllNotes);
router.get("/:id", noteController.getNote);
router.post("/", noteController.createNote);
router.put("/:id", noteController.updateNote);
router.delete("/:id", noteController.deleteNote);

export default router;