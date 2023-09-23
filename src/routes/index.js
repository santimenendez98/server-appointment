import express from "express";
import appointment from "./appointment.js";
import pet from "./pet.js";

const router = express.Router();

router.use("/appointment", appointment);
router.use("/pet", pet);

export default router;
