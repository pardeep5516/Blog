const passport = require("passport");
const User = require("../database/models/userSchema");

module.exports = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, (err) => {
    if (err) {
      console.log("error..");
      res.redirect("/login");
    } else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/create");
      });
    }
  });
};
