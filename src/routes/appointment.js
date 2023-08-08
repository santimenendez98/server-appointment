import express from "express";
import appointmentRequest from "../controller/appointment.js";
import exportValidation from "../validation/appointment.js";

const appointmentRouter = express.Router();

appointmentRouter
  .get("/", appointmentRequest.getAllAppointment)
  .get("/:id", appointmentRequest.getAppointmentById)
  .post(
    "/",
    exportValidation.validateCreation,
    appointmentRequest.createAppointment
  )
  .put(
    "/:id",
    exportValidation.validateEdition,
    appointmentRequest.editAppointment
  )
  .delete("/:id", appointmentRequest.deleteAppointment);

export default appointmentRouter;
