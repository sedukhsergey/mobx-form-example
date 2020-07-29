import methodOverride from 'method-override';

export const afterMiddleware = (app, container = {
}) => {
  app.use(methodOverride());
  app.use((err, req, res, next) => (
    container.errorHandler.handle(err, req, res, next)
  ));
};

export default afterMiddleware;
