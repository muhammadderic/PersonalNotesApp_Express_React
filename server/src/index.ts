import express from "express";

import middleware from "./middlewares/middleware";
import errorGlobalHandler from "./middlewares/errorHandler";
import router from "./routes/noteRoutes";

const app = express();

// Middlewares
middleware(app);

// Routes
app.use("/", router);

// Global error handling
app.use(errorGlobalHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})