class UserController {
  userService;
  constructor(userService) {
    this.userService = userService;
  }

  async getAll(req, res) {
    try {
      const users = await this.userService.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to get users' });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const user = await this.userService.findById(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to get user' });
    }
  }

  async create(req, res) {
    const { name, email, password, cpf, role } = req.body;
    try {
      const newUser = await this.userService.create({
        name,
        email,
        password,
        cpf,
        role,
      });
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
      const updatedUser = await this.userService.update(
        id,
        name,
        email,
        password
      );
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const deletedUser = await this.userService.delete(id);
      if (deletedUser) {
        res.status(200).json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  }
}

export default UserController;
