import mongoose, { Schema } from "mongoose";

const petSchema = new Schema({
  petName: {
    type: String,
    required: true,
  },
  kind: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  history: {
    type: Array,
    required: true,
  },
});

const Pet = mongoose.model("Pet", petSchema);

export default Pet;
