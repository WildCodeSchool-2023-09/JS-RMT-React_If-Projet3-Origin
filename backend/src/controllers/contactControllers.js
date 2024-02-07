const transporter = require("../services/validator/email");

const send = async (req, res, next) => {
  try {
    await transporter.sendMail({
      from: req.body.email,
      to: "jm.zonghero@gmail.com",
      name: req.body.name,
      lastname: req.body.lastname,
      subject: req.body.subject,
      text: req.body.message,
      html: "<b>Origins</b>",
    });
    res.json({ msg: "votre message a bien été envoyé" });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  send,
};
