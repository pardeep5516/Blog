module.exports = (req, res) => {
  res.render("register", {auth: req.isAuthenticated() });
};
