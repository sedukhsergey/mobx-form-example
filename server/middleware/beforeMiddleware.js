import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morganMiddleware from './morgan';
import corsMiddleware from './corsMiddleware';

export const beforeMiddleware = (app, container = {}) => {
  corsMiddleware(app, container);
  app.use(cookieParser(container.configService.COOKIES_SECRET));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({
    limit: '50mb', extended: true,
  }));
  morganMiddleware(app);
};

export default beforeMiddleware;
