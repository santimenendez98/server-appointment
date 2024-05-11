import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
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
  },
  dni: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
