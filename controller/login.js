module.exports = (req, res) => {
  res.render("login", {auth: req.isAuthenticated() });
};
