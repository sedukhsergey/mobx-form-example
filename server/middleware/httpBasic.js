import httpAuth from 'http-auth';
import path from 'path';
import {
  ENV_DEV, ENV_PROD, ENV_TEST, ENV_UNDEFINED
} from '../services/EnvironmentAwareService';
const HTTP_AUTH_IGNORED_ENVIRONMENTS = [
  ENV_PROD, ENV_TEST, ENV_UNDEFINED, ENV_DEV,
];
const HTTP_AUTH_REALM = 'Simon Area.';
const HTTP_AUTH_FILE = path.resolve(`${__dirname}/../../users.htpasswd`);

const authEnabled = false;

export default app => {
  if (
    HTTP_AUTH_IGNORED_ENVIRONMENTS.includes(process.env.NODE_ENV) ||
    !authEnabled
  ) {
    return;
  }

  app.use(httpAuth.connect(httpAuth.basic({
    realm: HTTP_AUTH_REALM, file: HTTP_AUTH_FILE,
  })));
};
