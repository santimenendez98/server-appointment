import mongoose, { Schema } from "mongoose";

const appointmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  clientID: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
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
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  paidMonth: {
    type: String,
  },
  isClient: {
    type: Boolean,
    required: true,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
