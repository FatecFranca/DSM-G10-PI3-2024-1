import jwt from 'jsonwebtoken';
import { User } from '../../domain/entities/user.entity.js';

const guarded = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization ??
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, 'secret');
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Não autorizado, token falho' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Não autorizado, sem token' });
  }
};

export default guarded;
