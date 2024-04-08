import { json, urlencoded, Application } from "express";
import cors from "cors";

export default (app: Application): void => {
  // CORS
  app.use(cors());

  // Parse JSON
  app.use(json());
  app.use(urlencoded({ extended: true }));
}