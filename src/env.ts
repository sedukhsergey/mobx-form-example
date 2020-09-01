// eslint-disable-next-line no-console

const ENV = process.env.NODE_ENV;

const DEVELOPMENT = { BACKEND_URL: 'http://localhost:8080' };

const HEROKU_PROD = { BACKEND_URL: 'https://mobx-form-example.herokuapp.com' };

let SELECTED:any = null;
console.log('process.env', process.env);
switch (ENV) {
case 'development':
  SELECTED = DEVELOPMENT;
  break;
case 'production':
  SELECTED = HEROKU_PROD;
  break;
default:
  SELECTED = DEVELOPMENT;
  break;
}
console.log('SELECTED', SELECTED);

export default SELECTED;
