class UsersController {
  constructor(container = {
  }) {
    this.container = container;
    this.usersService = this.container.modelsService.Users;
  }
  async getUser(req, res) {
    try {
      const user = await this.usersService.find(req.query.id);
      res.send(user || {
        data: null,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  }

  async getAllUsers(req, res) {
    try {
      const response = await this.usersService.all();
      res.send(response);
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  }

  async updateUser(req, res) {
    try {
      await this.usersService.update({
        ...req.body, id: req.query.id,
      });
      res.send({
        data: 'success',
      });
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  }

  async createUser(req, res) {
    try {
      const response = await this.usersService.create(req.body);
      res.send({
        data: response,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  }

  async deleteUser(req, res) {
    try {
      if (req.query.id) {
        const result = await this.usersService.delete(req.query.id);
        if (!result.rowCount) {
          res.status(500).send({
            message: `User with ${req.query.id} is already deleted`,
          });
          return;
        }
        res.send({
          data: 'success',
        });
      }
      res.status(500).send({
        message: 'query param is required',
      });
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  }
}

module.exports = UsersController;
