import mongoose from "mongoose";
import Blog from "./blog.js";
import User from "./user.js";

const commentSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId
    },
    blog: {
      type: Blog,
    },
    user: {
      type: User,
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
