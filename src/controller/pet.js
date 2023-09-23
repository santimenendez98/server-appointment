import Pet from "../schema/pet.js";

const createPet = (req, res) => {
  const { petName, age, sex, breed, kind, color, history } = req.body;

  Pet.create({
    petName,
    age,
    sex,
    breed,
    kind,
    color,
    history,
  })
    .then((newPet) =>
      res.status(201).json({
        message: "Pet Created",
        data: newPet,
        error: false,
      })
    )
    .catch((error) =>
      res.status(400).json({
        message: error,
        error: true,
      })
    );
};

const editPet = (req, res) => {
  const { id } = req.params;
  const { petName, age, sex, breed, kind, color, history } = req.body;

  Pet.findByIdAndUpdate(
    id,
    {
      petName,
      age,
      sex,
      breed,
      kind,
      color,
      history,
    },
    { new: true }
  )
    .then((pet) => {
      if (!pet) {
        return res.status(404).json({
          message: `Pet ${id} was not found`,
          data: undefined,
          error: false,
        });
      }
      return res.status(200).json({
        message: `Pet ${id} edited successfull`,
        data: pet,
        error: false,
      });
    })
    .catch((error) =>
      res.status(400).json({
        message: error,
        error: true,
      })
    );
};

const getAllPet = (req, res) => {
  Pet.find()
    .then((Pet) =>
      res.status(200).json({
        message: "All Pet",
        data: Pet,
        error: false,
      })
    )
    .catch((error) =>
      res.status(400).json({
        message: error,
        error: true,
      })
    );
};

const getPetById = (req, res) => {
  const { id } = req.params;

  Pet.findById(id)
    .then((Pet) => {
      if (!Pet) {
        return res.status(404).json({
          message: `Pet ${id} was not found`,
          data: undefined,
          error: false,
        });
      }
      return res.status(200).json({
        message: "Pet found successfull",
        data: Pet,
        error: false,
      });
    })
    .catch((error) =>
      res.status(400).json({
        message: error,
        error: true,
      })
    );
};

const deletePet = (req, res) => {
  const { id } = req.params;

  Pet.findByIdAndDelete(id)
    .then((Pet) => {
      if (!Pet) {
        return res.status(404).json({
          message: `Pet ${id} was not found`,
          data: undefined,
          error: false,
        });
      }
      return res.status(200).json({
        message: `Pet ${id} delete successfull`,
        data: Pet,
        error: false,
      });
    })
    .catch((error) =>
      res.status(400).json({
        message: error,
        error: true,
      })
    );
};

const petRequest = {
  createPet,
  editPet,
  getPetById,
  deletePet,
  getAllPet,
};

export default petRequest;
