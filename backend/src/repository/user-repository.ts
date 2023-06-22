import User from "../models/user.model.js"

class UserRepository {
  async create(data) {
    const result = await User.create(data);
    return result;
  }

  async find(data) {
    const response = await User.findOne(data);
    return response;
  }

  async findAll() {
    const response = await User.find({});
    return response;
  }

  async update(id, data) {
    const result = await User.findByIdAndUpdate(id, data, {
      new: true,
    });
    return result;
  }

  async delete(id) {
    const result = await User.findByIdAndUpdate(id, {
      isActive: false
    });
    return result;
  }
}

export default UserRepository;
