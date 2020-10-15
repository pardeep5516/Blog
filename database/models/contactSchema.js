const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const Contact = new mongoose.model("Contact", ContactSchema);

module.exports = Contact;
