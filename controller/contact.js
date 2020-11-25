module.exports = (req, res) => {
  res.render("contact", { auth: req.isAuthenticated() });
};
