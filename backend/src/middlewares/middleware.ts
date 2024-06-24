import { json, urlencoded, Application } from "express";
import cors from "cors";
import morgan from "morgan";

export default (app: Application): void => {
  // CORS
  app.use(cors());

  // Parse JSON
  app.use(json());
  app.use(urlencoded({ extended: true }));

  // Logging
  app.use(morgan("dev"));
}