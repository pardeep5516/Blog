const mongoose = require("mongoose");

//!postSchema
const PostSchema = new mongoose.Schema({
  title: String,
  twitter: String,
  facebook: String,
  instagram: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  username: String,
  description: String,
  image: String,
});

//!post Model
const Post = new mongoose.model("Post", PostSchema);

module.exports = Post;
