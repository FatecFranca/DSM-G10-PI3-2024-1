import { User } from '../entities/user.entity.js';

class UserRepository {
  async findAll() {
    return await User.find({});
  }

  async findById(id) {
    return await User.findById(id);
  }

  async findUserByEmail(email) {
    return await User.findOne({ email });
  }

  async findOne({ cpf, email }) {
    return await User.findOne({ email, cpf });
  }

  async create(user) {
    return await User.create({ ...user });
  }

  async update(id, user) {
    return await User.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id) {
    return await User.findByIdAndDelete(id);
  }
}

export default UserRepository;
