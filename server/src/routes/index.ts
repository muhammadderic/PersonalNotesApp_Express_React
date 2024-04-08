import express from "express";
import noteRoutes from "./noteRoutes";

const router = express.Router();

router.use("/notes", noteRoutes);

export default router;