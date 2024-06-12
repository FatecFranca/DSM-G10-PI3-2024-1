import { Router } from 'express';
import { LoginController } from '../controllers/login.js';
import { LoginService } from '../domain/services/login.service.js';

import UserRepository from '../domain/repositories/user.repository.js';
const router = Router();

const userRepository = new UserRepository();
const loginService = new LoginService(userRepository);
const loginController = new LoginController(loginService);

router.post('/', (req, res) => loginController.login(req, res));

export default router;
