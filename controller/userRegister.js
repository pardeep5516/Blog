const passport = require("passport");
const User = require("../database/models/userSchema");

module.exports = (req, res) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    (err, user) => {
      if (err) {
        console.log("error");
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, () => {
          res.redirect("/create");
        });
      }
    }
  );
};
