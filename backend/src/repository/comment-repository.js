import Comment from "../models/comment.model.js"

class CommentRepository {
  async create(data) {
    const result = await Comment.create(data);
    return result;
  }

  async find(data) {
    const response = await Comment.findOne(data);
    return response;
  }

  async findAll() {
    const response = await Comment.find({});
    return response;
  }

  async update(id, data) {
    const result = await Comment.findByIdAndUpdate(id, data, {
      new: true,
    });
    return result;
  }

  async delete(id) {
    const result = await Comment.findByIdAndUpdate(id, {
      isActive: false
    });
    return result;
  }
}

export default CommentRepository;
