const ENV = process.env.NODE_ENV;

const proc:any = process;

const DEVELOPMENT = { BACKEND_URL: proc.browser ? '/api' : 'http://localhost:3000/api' };

const PRODUCTION = { BACKEND_URL: proc.browser ? '/api' : 'https://mobx-form-example.herokuapp.com/api' };


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
