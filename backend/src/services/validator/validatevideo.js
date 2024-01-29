const Joi = require("joi");

const schema = Joi.object({
  title: Joi.string().min(4).max(150).required(),
  description: Joi.string().min(4).max(1500).required(),
  year: Joi.string().min(4).max(4).required(),
  url: Joi.string().min(4).max(250).required(),
  category: Joi.string().min(4).max(100).required(),
  sport: Joi.string().min(4).max(50).required(),
});

const validateVideo = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

module.exports = validateVideo;
