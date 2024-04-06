import app from "./app";
import mongoose from "mongoose";
import env from "./utils/validateEnv";

mongoose.connect(env.MONGODB_URI!)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(env.PORT, () => {
      console.log(`Server is listening on port ${env.PORT}`)
    })
  })
