import UsersRouter from './UsersRouter';
import Response from '../utils/Response';

export default (app, container = {}) => {
  app.use('/users', UsersRouter(container));
  // anything else should act as 404 page
  app.use('*', (req, res) => {
    res.status(Response.STATUS_NOT_FOUND);
    return res.json({ error: 'Not Found' });
  });
};
