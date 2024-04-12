import { User } from '../entities/user.entity';

class UserService {
  userRepository;
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async findAll() {
    return await this.userRepository.find({});
  }

  async findById(id) {
    return await this.userRepository.findById(id);
  }

  async create(user) {
    return await this.userRepository.create(user);
  }

  async update(id, user) {
    return await this.userRepository.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id) {
    return await this.userRepository.findByIdAndDelete(id);
  }
}
