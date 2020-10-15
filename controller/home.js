const Post = require("../database/models/postSchema");

module.exports = async (req, res) => {
  await Post.find({}, (err, posts) => {
    res.render("home", { posts: posts.reverse(), auth: req.isAuthenticated() });
  });
};
