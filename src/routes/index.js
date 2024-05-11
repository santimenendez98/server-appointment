import express from "express";
import appointment from "./appointment.js";
import pet from "./pet.js";
import users from "./users.js"
import login from "./login.js"
import verifyToken from "../middleware/index.js";

const router = express.Router();

router.use("/appointment", verifyToken, appointment);
router.use("/pet", verifyToken, pet);
router.use("/user", users)
router.use("/login", login)

export default router;
