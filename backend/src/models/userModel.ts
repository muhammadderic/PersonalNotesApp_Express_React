import { Schema, model, InferSchemaType } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  address: {
    type: Array,
  },
  phone: {
    type: String,
  },
  avatar: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
  },
  userType: {
    type: String,
    default: "client",
    enum: ["client", "admin"],
  }
},
  { timestamps: true }
);

type user = InferSchemaType<typeof userSchema>;

export default model<user>("User", userSchema);