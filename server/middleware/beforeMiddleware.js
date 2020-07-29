import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morganMiddleware from './morgan';
import corsMiddleware from './corsMiddleware';
// import httpBasicMiddleware from './httpBasic';

export const beforeMiddleware = (app, container = {}) => {
  // app.use(container.sentryService.getRequestHandler());
  // httpBasicMiddleware(app);
  // fontCorsMiddleware(app, container);
  corsMiddleware(app, container);
  // // Other static resources should just be served as they are. Note that node cannot server static via https!
  // app.use(express.static(path.resolve(`${__dirname}/../../assets`), { maxage: 0 }));
  // app.use(express.static(path.resolve(`${__dirname}/../../build`), { maxage: 0 }));
  app.use(cookieParser(container.configService.COOKIES_SECRET));
  // app.use(ua.middleware(GA_TRACKING_ID, { cookieName: '_ga' }));
  // reactDevCors(app);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  // // Helmet create security related HTTP headers
  // app.use(helmet());
  // if (!EnvironmentAwareService.isDev()) {
  //   sslRedirect(app);
  // }
  // translationMiddleware(app);
  // sessionMiddleware(app, container);
  morganMiddleware(app);
};

export default beforeMiddleware;
