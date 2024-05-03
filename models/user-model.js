import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,

  },
  favourites: {
    type: [String],
    default : []

  }
});

export const UserModel =
  mongoose.models.users ?? mongoose.model("users", schema);
