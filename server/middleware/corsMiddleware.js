import cors from 'cors';

export default (app, container) => {
  app.use(cors({ origin: true }));
};
