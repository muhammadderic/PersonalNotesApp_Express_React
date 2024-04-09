import { Schema, model, InferSchemaType } from "mongoose";

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  }
}, { timestamps: true });

type note = InferSchemaType<typeof noteSchema>;

export default model<note>("Note", noteSchema);