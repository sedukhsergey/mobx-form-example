import morgan from 'morgan';
import EnvironmentAwareService from '../services/EnvironmentAwareService';

export default (app) => {
  if (EnvironmentAwareService.isDev()) {
    app.use(morgan('dev'));
  }
};
