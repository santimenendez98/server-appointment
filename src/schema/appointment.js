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
  pet: {
    type: [Schema.Types.ObjectId],
    ref: "Pet",
    required: true,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
