import mongoose from "mongoose";
import User from "./user.js";

const blogSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String
    },
    author: {
      type: User
    },
    likes: {
      type: Number
    },
    views: {
      type: Number
    },
    isActive: {
      type: Boolean,
      default: true,
    }
  },
  { timestamps: true },
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
