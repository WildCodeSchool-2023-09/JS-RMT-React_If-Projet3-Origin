const transporter = require("../services/mail");

const send = async (req, res, next) => {
  try {
    await transporter.sendMail({
      from: req.body.email,
      to: "jm.zonghero@gmail.com", // list of receivers
      subject: req.body.subjet,
      text: req.body.message,
      html: "<b>Le message est bien parvenu au destinataire</b>", // html body
    });

    res.json({ msg: "votre email à bien été pris en compte" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  send,
};
