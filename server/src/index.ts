import express from "express";
import dotenv from "dotenv";
import path from "path";

import middleware from "./middlewares/middleware";
import { errorGlobalHandler } from "./middlewares/errorGlobalHandler";
import router from "./routes";

const app = express();

dotenv.config({ path: path.join(__dirname, "config", ".env") });

// Middlewares
middleware(app);

// Routes
app.use("/api/v1", router);

// Global error handling
app.use(errorGlobalHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})