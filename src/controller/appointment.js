import Appointment from "../schema/appointment.js";

const createAppointment = (req, res) => {
  const {
    name,
    lastName,
    clientID,
    phone,
    address,
    date,
    petName,
    age,
    sex,
    breed,
    kind,
    color,
    history,
    paidMonth,
    isClient,
  } = req.body;

  Appointment.create({
    name,
    lastName,
    clientID,
    phone,
    address,
    petName,
    age,
    sex,
    breed,
    kind,
    color,
    history,
    date,
    paidMonth,
    isClient,
  })
    .then((newAppointment) =>
      res.status(201).json({
        message: "Appointment Created",
        data: newAppointment,
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

const editAppointment = (req, res) => {
  const { id } = req.params;
  const {
    name,
    lastName,
    petName,
    age,
    sex,
    breed,
    kind,
    color,
    history,
    clientID,
    phone,
    address,
    date,
    paidMonth,
    isClient,
  } = req.body;

  Appointment.findByIdAndUpdate(
    id,
    {
      name,
      lastName,
      clientID,
      phone,
      address,
      petName,
      age,
      sex,
      breed,
      kind,
      color,
      history,
      date,
      paidMonth,
      isClient,
    },
    { new: true }
  )
    .then((appointment) => {
      if (!appointment) {
        return res.status(404).json({
          message: `Appointment ${id} was not found`,
          data: undefined,
          error: false,
        });
      }
      return res.status(200).json({
        message: `Appointment ${id} edited successfull`,
        data: appointment,
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

const getAllAppointment = (req, res) => {
  Appointment.find()
    .then((appointment) =>
      res.status(200).json({
        message: "All Appointment",
        data: appointment,
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

const getAppointmentById = (req, res) => {
  const { id } = req.params;

  Appointment.findById(id)
    .then((appointment) => {
      if (!appointment) {
        return res.status(404).json({
          message: `Appointment ${id} was not found`,
          data: undefined,
          error: false,
        });
      }
      return res.status(200).json({
        message: "Appointment found successfull",
        data: appointment,
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

const deleteAppointment = (req, res) => {
  const { id } = req.params;

  Appointment.findByIdAndDelete(id)
    .then((appointment) => {
      if (!appointment) {
        return res.status(404).json({
          message: `Appointment ${id} was not found`,
          data: undefined,
          error: false,
        });
      }
      return res.status(200).json({
        message: `Appointment ${id} delete successfull`,
        data: appointment,
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

const appointmentRequest = {
  createAppointment,
  getAllAppointment,
  getAppointmentById,
  deleteAppointment,
  editAppointment,
};

export default appointmentRequest;
