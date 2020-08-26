import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morganMiddleware from './morgan';
import corsMiddleware from './corsMiddleware';
import reactDevCors from './reactDevCors';

export const beforeMiddleware = (app, container = {}) => {
  corsMiddleware(app, container);
  reactDevCors(app);
  app.use(cookieParser());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({
    limit: '50mb', extended: true,
  }));
  morganMiddleware(app);
};

export default beforeMiddleware;
