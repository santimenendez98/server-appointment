import express from "express";
import userRequest from "../controller/users.js";

const userRouter = express.Router();

userRouter
  .post("/", userRequest.createUsers)
  .get("/", userRequest.getAllUser)

export default userRouter;
