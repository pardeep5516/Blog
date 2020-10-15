const Post = require("../database/models/postSchema");

module.exports = (req, res) => {
  const post = new Post({
    title: req.body.title,
    twitter: req.body.twitter,
    facebook: req.body.facebook,
    instagram: req.body.facebook,
    username: req.body.username,
    description: req.body.description,
    image: req.body.image,
  });
  post.save((err) => {
    if (!err) {
      res.redirect("/");
    }
  });
};
