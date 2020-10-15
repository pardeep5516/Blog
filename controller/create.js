module.exports = (req, res) => {
  if (req.isAuthenticated()) {
    res.render("create", {auth: req.isAuthenticated() });
  } else {
    res.redirect("/login");
  }
};
