import Blog from "../models/blog.model.js"

class BlogRepository {
  async create(data) {
    const result = await Blog.create(data);
    return result;
  }

  async find(data) {
    const response = await Blog.findOne(data);
    return response;
  }

  async findAll() {
    const response = await Blog.find({});
    return response;
  }

  async update(id, data) {
    const result = await Blog.findByIdAndUpdate(id, data, {
      new: true,
    });
    return result;
  }

  async delete(id) {
    const result = await Blog.findByIdAndUpdate(id, {
      isActive: false
    });
    return result;
  }
}

export default BlogRepository;
