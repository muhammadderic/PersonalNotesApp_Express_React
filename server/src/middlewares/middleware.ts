import express, { Application } from "express";

export default (app: Application): void => {
  // Parse JSON
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}