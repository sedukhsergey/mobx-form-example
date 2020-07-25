const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const UsersController = require('../controllers/UsersController');

const UsersRouter = () => {
  /* GET users listing. */
  const usersController = new UsersController();
  router.get('/', (req, res, next) => {
    if (req.query.id) {
      return usersController.getUser(req, res);
    }
    return usersController.getAllUsers(req, res);
  });

  router.put('/', (req, res, next) => usersController.updateUser(req, res));

  router.post('/', (req, res, next) => {
    return usersController.createUser(req, res);
  });

  router.delete('/', (req, res, next) => usersController.deleteUser(req, res));
  return router;
};

module.exports = UsersRouter;
