import express from "express";
import petRequest from "../controller/pet.js";
import exportValidation from "../validation/pet.js";

const petRouter = express.Router();

petRouter
  .get("/", petRequest.getAllPet)
  .get("/:id", petRequest.getPetById)
  .post("/", exportValidation.validateCreation, petRequest.createPet)
  .put("/:id", exportValidation.validateEdition, petRequest.editPet)
  .delete("/:id", petRequest.deletePet);

export default petRouter;
