import express from 'express';
import {
  beforeMiddleware,
  afterMiddleware,
} from './middleware';
import setupRoutes from './routes';
import getContainer from './container';

export default class Server {
  constructor(container = {}) {
    this.app = express();
    this.container = container;
  }

  async _init() {
    // turn on 'trust proxy' so we can get a user's IP address using request.ip
    this.app.enable('trust proxy');

    try {
      const container = await getContainer();
      this.container = Object.assign(this.container, container);
      beforeMiddleware(this.app, this.container);
      setupRoutes(this.app, this.container);
      afterMiddleware(this.app, this.container);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  /**
   *
   * @return {Promise<any>}
   */
  start() {
    // eslint-disable-next-line no-unused-vars
    return this._init().then(_ => {
      const PORT = this.container.configService.SERVER_PORT;
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, _) => {
        this.server = this.app.listen(PORT, '0.0.0.0', () => {
          // eslint-disable-next-line
          console.info(`Express Web Service listening on port ${PORT} in ${process.env.NODE_ENV} environment!`);
          resolve();
        });
      });
    });
  }

  close() {
    this.container.RedisClient.quit();
    this.server.close();
  }
}
