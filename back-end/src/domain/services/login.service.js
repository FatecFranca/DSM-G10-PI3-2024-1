import jwt from 'jsonwebtoken';
export class LoginService {
  userRepository;
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async loginUser(email, password) {
    const user = await this.userRepository.findUserByEmail(email);
    if (!user || user.password !== password) {
      throw new Error('Credenciais inválidas');
    }
    return this.generateToken(user._id);
  }

  generateToken(userId) {
    try {
      return jwt.sign({ id: userId }, 'secret', { expiresIn: '1h' });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
