import app from "./app";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`)
    })
  })
