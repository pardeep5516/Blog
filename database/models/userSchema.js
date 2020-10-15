const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new mongoose.Schema({
    email: String,
    password: String,
  });
  
  //!passport local mongoose plugin
  userSchema.plugin(passportLocalMongoose);
  
  //!User model
  const User = new mongoose.model("User", userSchema);

module.exports = User;