const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
  title: String,
  content: String,
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Comment = new mongoose.model("Comment", CommentSchema);

module.exports = Comment;
