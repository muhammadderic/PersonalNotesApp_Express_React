import request from "supertest";
import app from "../app";
import dotenv from "dotenv";
import env from "../utils/validateEnv";
import { connect, connection } from "mongoose";
import { reqAddNote, updatedNote } from "../config/note.test.data";

dotenv.config();

// Before each test, connect to MongoDB
beforeEach(async () => {
  await connect(env.MONGODB_URI);
});

// After each test, close the MongoDB connection
afterEach(async () => {
  await connection.close();
});

describe("POST /api/v1/notes", () => {
  it("should create a note", async () => {
    const res = await request(app)
      .post("/api/v1/notes")
      .send(reqAddNote);

    expect(res.status).toBe(201);
  });
});

describe("GET /api/v1/notes", () => {
  it("should get all notes", async () => {
    const res = await request(app).get("/api/v1/notes");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });
});

describe("GET /api/v1/notes/:id", () => {
  it("should get a note", async () => {
    const { body } = await request(app).get("/api/v1/notes");
    const id = body[0]._id;

    const res = await request(app).get(`/api/v1/notes/${id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(reqAddNote.title);
    expect(res.body.note).toBe(reqAddNote.note);
  });
});

describe("PUT /api/v1/notes/:id", () => {
  it("should update a note", async () => {
    const { body } = await request(app).get("/api/v1/notes");
    const id = body[0]._id;

    const res = await request(app)
      .put(`/api/v1/notes/${id}`)
      .send(updatedNote);

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(updatedNote.title);
    expect(res.body.note).toBe(updatedNote.note);
  });
});

describe("DELETE /api/v1/notes/:id", () => {
  it("should delete a note", async () => {
    const { body } = await request(app).get("/api/v1/notes");
    const id = body[0]._id;

    const res = await request(app).delete(`/api/v1/notes/${id}`);

    expect(res.statusCode).toBe(200);
  });
});
