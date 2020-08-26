import cors from 'cors';

export default app => {
  app.use((req, res, next) => {
    cors(
      {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      }
    );
    next();
  });
};
