export const ENV_HEROKU = 'heroku';
export const ENV_DEV = 'development';
export const ENV_PROD = 'production';
export const ENV_UNDEFINED = undefined;
export const ENV_TEST = 'test';

export default class EnvironmentAwareService {
  /**
   *
   * @return {boolean}
   */
  static isDev() {
    return process.env.NODE_ENV === ENV_DEV;
  }

  /**
   *
   * @return {boolean}
   */
  static isHerokuDev() {
    return process.env.NODE_ENV === ENV_HEROKU;
  }

  /**
   *
   * @return {boolean}
   */
  static isNotProduction() {
    return process.env.NODE_ENV !== ENV_PROD;
  }

  /**
   *
   * @return {boolean}
   */
  static isTest() {
    return process.env.NODE_ENV === ENV_TEST;
  }
}
