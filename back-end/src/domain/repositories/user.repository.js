import { User } from '../entities/user.entity';

class UserRepository {
  async findAll() {
    return await User.find({});
  }

  async findById(id) {
    return await User.findById(id);
  }

  async create(user) {
    return await User.create(user);
  }

  async update(id, user) {
    return await User.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id) {
    return await User.findByIdAndDelete(id);
  }
}
