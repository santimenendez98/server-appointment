import express from "express";
import appointment from "./appointment.js";

const router = express.Router();

router.use("/appointment", appointment);

export default router;
