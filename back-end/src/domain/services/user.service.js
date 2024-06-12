class UserService {
  userRepository;
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async findAll() {
    return await this.userRepository.findAll({});
  }

  async findById(id) {
    return await this.userRepository.findById(id);
  }

  async create(user) {
    try {
      const existingUser = await this.userRepository.findOne({
        email: user.email,
        cpf: user.cpf,
      });

      if (existingUser) {
        throw new Error({ code: 409, message: 'O usuário já existe!' });
      }

      return await this.userRepository.create(user);
    } catch (err) {
      throw new Error({ code: err.code, error: err.message });
    }
  }

  async update(id, user) {
    return await this.userRepository.update(id, user, { new: true });
  }

  async delete(id) {
    return await this.userRepository.delete(id);
  }
}

export default UserService;
