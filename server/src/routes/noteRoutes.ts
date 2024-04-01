import express from "express";
const router = express.Router();

import noteController from "../controllers/noteController";

router.use("/", noteController.starting);

export default router;