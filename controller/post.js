const Post = require("../database/models/postSchema");
const Comment = require("../database/models/comment");

module.exports = async (req, res) => {
  const requestedPostId = req.params.postId;
  await Post.findOne({ _id: requestedPostId }, (err, post) => {
    Comment.find({ postId: requestedPostId }).then((comments) => {
      // respond with the template with both values

      res.render("post", {
        id: post._id,
        title: post.title,
        twitter: post.twitter,
        facebook: post.facebook,
        instagram: post.instagram,
        createdAt: post.createdAt,
        username: post.username,
        description: post.description,
        image: post.image,
        auth: req.isAuthenticated(),
        comments: comments.reverse(),
      });
    });
  });
};
