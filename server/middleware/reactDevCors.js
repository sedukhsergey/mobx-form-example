import { ENV_DEV } from '../services/EnvironmentAwareService';
import Response from '../utils/Response';
const ALLOWED_ORIGINS = [
  'https://mobx-form-example.herokuapp.com',
  'http://localhost:3000',
  'http://localhost'
];
const isAllowedOrigin = req => ALLOWED_ORIGINS.includes(req.headers.origin);

export default app => {
  // if (ENV_DEV !== process.env.NODE_ENV) return;
  app.use((req, res, next) => {
    console.log('req.headers.origin', req.headers.origin);
    if (isAllowedOrigin(req)) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header('Access-Control-Allow-Methods', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Credentials', true);
      res.header('Content-Type', 'application/json');
      if ('OPTIONS' === req.method) {
        return res.sendStatus(Response.STATUS_OK);
      }
    }

    next();
  });
};
