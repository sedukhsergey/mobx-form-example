import UsersRouter from './UsersRouter';
import AuthRouter from './AuthRouter';
import Response from '../utils/Response';

export default (app, container = {}) => {
  app.use('/users', UsersRouter(container));
  app.use('/auth', AuthRouter(container));
  // anything else should act as 404 page
  app.use('*', (req, res) => {
    console.log('route 404',)
    res.status(Response.STATUS_NOT_FOUND);
    return res.json({ error: 'Not Found' });
  });
};
