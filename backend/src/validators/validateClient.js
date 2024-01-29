const Joi = require("joi");

const getClientSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    nom: Joi.string().max(255).presence("required"),
    prenom: Joi.string().max(255).presence("required"),
    email: Joi.string().presence("required"),
    sujet: Joi.string().max(255).presence("required"),
    message: Joi.string().presence("required"),
  });
};

const validateClient = (req, res, next) => {
  const schema = getClientSchema();

  const { error } = schema.validate(
    {
      ...req.body,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateClient;
