import Joi from "joi";

const validateEdition = (req, res, next) => {
  const validatePet = Joi.object({
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
    history: Joi.array().min(1),
  });

  const validation = validatePet.validate(req.body);

  if (!validation.error) return next();

  return res.status(400).json({
    message: validation.error.details[0].message,
    error: true,
  });
};

const validateCreation = (req, res, next) => {
  const validatePet = Joi.object({
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
    history: Joi.Array().min(1).required(),
  });

  const validation = validatePet.validate(req.body);

  if (!validation.error) return next();

  return res.status(400).json({
    message: validation.error.details[0].message,
    error: true,
  });
};

const exportValidation = { validateCreation, validateEdition };

export default exportValidation;
