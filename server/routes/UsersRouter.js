import {
  Router,
} from 'express';
import UsersController from '../controllers/UsersController';
import {
  asyncMiddleware,
} from '../middleware/utils';

export default (container = {
}) => {
  /* GET users listing. */
  const router = Router();

  const usersController = new UsersController(container);

  router.get('/',
    asyncMiddleware(async (req, res) => {
      if (req.query.id) {
        return usersController.getUser(req, res);
      }
      return usersController.getAllUsers(req, res);
    }));

  router.put('/',
    asyncMiddleware((req, res) => usersController.updateUser(req, res)));

  router.post('/',
    asyncMiddleware((req, res) => usersController.createUser(req, res)));

  router.delete('/',
    asyncMiddleware((req, res) => usersController.deleteUser(req, res)));

  return router;
};
