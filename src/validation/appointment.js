import Joi from "joi";

const validateEdition = (req, res, next) => {
  const validateAppointment = Joi.object({
    name: Joi.string()
      .min(4)
      .max(10)
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Name should be only letters" }),
    lastName: Joi.string()
      .min(4)
      .max(10)
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Last Name should be only letters" }),
    clientID: Joi.string().when("isClient", {
      is: true,
      then: Joi.string().max(8).pattern(/^\d+$/).messages({
        "string.max": "Client ID should have a maximum length of 8 characters",
        "string.pattern.base":
          "Client ID should contain only digits when isClient is true",
      }),
      otherwise: Joi.string().valid("No Client"),
    }),
    address: Joi.string(),
    phone: Joi.number().min(10),
    date: Joi.string().isoDate(),
    paidMonth: Joi.string().pattern(/^[A-Za-z\s]+$/),
    isClient: Joi.boolean(),
    pet: Joi.array(),
  });

  const validation = validateAppointment.validate(req.body);

  if (!validation.error) return next();

  return res.status(400).json({
    message: validation.error.details[0].message,
    error: true,
  });
};

const validateCreation = (req, res, next) => {
  const validateAppointment = Joi.object({
    name: Joi.string()
      .min(4)
      .max(10)
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Name should be only letters" })
      .required(),
    lastName: Joi.string()
      .min(4)
      .max(10)
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Last Name should be only letters" })
      .required(),
    clientID: Joi.string().when("isClient", {
      is: true,
      then: Joi.string().max(8).pattern(/^\d+$/).required().messages({
        "string.max": "Client ID should have a maximum length of 8 characters",
        "string.pattern.base":
          "Client ID should contain only digits when isClient is true",
      }),
      otherwise: Joi.string().valid("No Client").required(),
    }),
    address: Joi.string().required(),
    phone: Joi.number().min(10).required(),
    date: Joi.string().isoDate(),
    paidMonth: Joi.string().min(1),
    isClient: Joi.boolean().required(),
    pet: Joi.array().required(),
  });

  const validation = validateAppointment.validate(req.body);

  if (!validation.error) return next();

  return res.status(400).json({
    message: validation.error.details[0].message,
    error: true,
  });
};

const exportValidation = { validateCreation, validateEdition };

export default exportValidation;
