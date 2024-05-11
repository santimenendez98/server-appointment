import express from "express";
import logInRequest from "../controller/login.js";

const logInRouter = express.Router();

logInRouter
  .post("/", logInRequest.logIn)

export default logInRouter;
