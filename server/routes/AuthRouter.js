import Router from 'express';
import AuthController from '../controllers/AuthController';
import { asyncMiddleware } from '../middleware/utils';
const router = Router();

const AuthRouter = (container = {}) => {
  const authController = new AuthController(container);
  router.post('/',
    asyncMiddleware(async (req, res, next) => authController.registerAccount(req, res, next))
  );
  return router;
};


export default AuthRouter;
