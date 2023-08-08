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
    clientID: Joi.string()
      .pattern(/^\d+|No Client$/)
      .min(1)
      .messages({ "string.pattern.base": "Client ID should be only letters" })
      .required(),
    address: Joi.string().min(6),
    phone: Joi.number().min(10),
    date: Joi.string().isoDate(),
    paidMonth: Joi.string().pattern(/^[A-Za-z\s]+$/),
    petName: Joi.string()
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Name should be only letters" }),
    age: Joi.number().min(1).max(20),
    sex: Joi.string(),
    kind: Joi.string()
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Kind should be only letters" }),
    breed: Joi.string()
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Breed should be only letters" }),
    color: Joi.string()
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Color should be only letters" }),
    history: Joi.string().min(1),
    isClient: Joi.boolean(),
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
    clientID: Joi.string()
      .pattern(/^\d+|No Client$/)
      .min(1)
      .messages({ "string.pattern.base": "Client ID should be only letters" })
      .required(),
    address: Joi.string().min(6).required(),
    phone: Joi.number().min(10).required(),
    date: Joi.string().isoDate(),
    paidMonth: Joi.string().min(1),
    petName: Joi.string()
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Name should be only letters" })
      .required(),
    age: Joi.number().min(1).max(20).required(),
    sex: Joi.string().required(),
    kind: Joi.string()
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Kind should be only letters" })
      .required(),
    breed: Joi.string()
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Breed should be only letters" })
      .required(),
    color: Joi.string()
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Color should be only letters" })
      .required(),
    history: Joi.string().min(1).required(),
    isClient: Joi.boolean().required(),
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
