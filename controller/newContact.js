const Contact = require("../database/models/contactSchema");

module.exports = (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });
  contact.save((err) => {
    if (!err) {
      res.redirect("/contact");
    }
  });
};
