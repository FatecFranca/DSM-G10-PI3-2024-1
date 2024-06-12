export class LoginController {
  loginService;
  constructor(loginService) {
    this.loginService = loginService;
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await this.loginService.loginUser(email, password);
      res.status(200).json({ token });
    } catch (err) {
      res
        .status(500)
        .json({ error: err.message ? err.message : 'Falha ao logar' });
    }
  }
}
