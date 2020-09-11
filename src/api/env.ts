const ENV = process.env.NODE_ENV;

const DEVELOPMENT = { BACKEND_URL: 'http://localhost:3030' };

const PRODUCTION = { BACKEND_URL: 'https://mobx-form-example-server.herokuapp.com' };


let SELECTED:any = null;

switch (ENV) {
case 'development':
  SELECTED = DEVELOPMENT;
  break;
case 'production':
  SELECTED = PRODUCTION;
  break;
default:
  SELECTED = DEVELOPMENT;
  break;
}

export default SELECTED;
