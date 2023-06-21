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
  },
  { timestamps: true },
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
