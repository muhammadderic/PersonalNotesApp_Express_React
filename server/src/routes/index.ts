import express from "express";
const router = express.Router();

import noteRoutes from "./noteRoutes";

router.use("/notes", noteRoutes);

export default router;