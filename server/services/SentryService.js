import * as Sentry from '@sentry/node';
import EnvironmentAwareService from '../EnvironmentAwareService';
import { RequestHelper } from '../../utils/RequestHelper';
import CheckoutSessions from '../sessions/CheckoutSessions';
import { SentryFactory } from './SentryFactory';
import packageJson from '../../../package.json';
import chalk from 'chalk';

const Level = {
  Debug: 'debug',
  Error: 'error',
  Info: 'info',
  Fatal: 'fatal',
  Warning: 'warning',
};

const COMMIT_HASH = process.env.SOURCE_VERSION ? process.env.SOURCE_VERSION.slice(0, 7) : '';

/**
 * @link http://getsentry.github.io/sentry-javascript/modules/node.html
 *
 * @description We don't want to extend Logger as we want to use different format
 */
export class SentryService {
  /**
   *
   * @description Visually improve error output to console.
   *
   * @param {Error | any} error
   */
  static prettyErrorLog(error) {
    const metadata =
      typeof error.metadata === 'object' ? JSON.stringify(error.metadata, null, 2) : '';

    return console.error(`
${chalk.red(error.stack)}
${chalk.red('_________METADATA__________')}
${metadata}
${chalk.red('________END OF ERROR_______')}`);
  }

  /**
   *
   * @param {ConfigService} configService
   */
  constructor(configService) {
    this.configService = configService;

    Sentry.init({
      dsn: configService.SENTRY_DSN,
      debug: EnvironmentAwareService.isDev(),
      environment: configService.SENTRY_ENVIRONMENT,
      ignoreErrors: ['/Redis/'],
      release: `${packageJson.version}_${COMMIT_HASH}`,
    });

    this.shouldNotLog = EnvironmentAwareService.isTest();
  }

  /**
   *
   * @param {Request} req
   * @return {Sentry.Request|object}
   * @private
   */
  static _createSimpleRequestObjectForDebug(req) {
    if (!req) return {};

    return {
      url: req.url ? String(req.url) : undefined,
      method: req.method ? String(req.method) : undefined,
      data: req.body ? req.body : undefined,
      query_string: req.url ? RequestHelper.getQueryString(req) : undefined,
      cookies: req.cookies ? req.cookies : undefined,
      headers: req.headers ? req.headers : undefined,
    };
  }

  getRequestHandler() {
    return Sentry.Handlers.requestHandler();
  }

  /**
   *
   * @param {Error|*} error
   */
  error(error, extra) {
    if (this.shouldNotLog) return;
    // if (EnvironmentAwareService.isDev()) return SentryService.prettyErrorLog(error);

    Sentry.withScope((scope) => {
      scope.setLevel(Level.Error);
      scope.setTag('event', String(error));

      Object.keys(extra).forEach((key) => {
        scope.setExtra(key, extra[key]);
      });

      Sentry.captureException(error);
    });
  }

  /**
   *
   * @param {Error} error
   * @param {Request} req
   */
  errorWithRequest(error, req) {
    if (this.shouldNotLog) return;
    console.error(error);
    if (EnvironmentAwareService.isDev()) return SentryService.prettyErrorLog(error);

    const store = CheckoutSessions.getStoreState(req);
    const pluckedStoreData = SentryFactory.pluckStoreData(store);

    Sentry.withScope((scope) => {
      scope.setLevel(Level.Error);
      scope.setTag('event', String(error));
      scope.setUser(SentryFactory.getUserFromRequest(req, store));

      Object.keys(pluckedStoreData).forEach((key) => {
        scope.setExtra(key, pluckedStoreData[key]);
      });

      Sentry.captureException(error);
    });
  }

  /**
   * @description You can pass an object with additional properties like "request" (express req) and "metadata" key
   * value.
   *
   * @param {object} event
   */
  info(event) {
    // eslint-disable-next-line
    if (EnvironmentAwareService.isDev()) return console.info(event);
    if (this.shouldNotLog) return;

    Sentry.withScope((scope) => {
      scope.setLevel(Level.Info);

      if (event.request) {
        event.request = SentryService._createSimpleRequestObjectForDebug(event.request);
      }

      event.contexts = { metadata: event.metadata };

      Sentry.captureEvent(event);
    });
  }

  /**
   *
   * @description Info log with additional user and store data
   *
   * @param {SentryEvent|string} message
   * @param {Request} req
   * @param {object} store
   */
  logUserData(message, req, store) {
    if (this.shouldNotLog) return;
    // eslint-disable-next-line
    if (EnvironmentAwareService.isDev()) return console.info(message);

    const event = {
      message: SentryFactory.createDynamicEventMessage(message, store),
      request: SentryService._createSimpleRequestObjectForDebug(req),
    };
    const pluckedStoreData = SentryFactory.pluckStoreData(store);

    Sentry.withScope((scope) => {
      scope.setLevel(Level.Info);
      scope.setTag('event', message);

      scope.setUser(SentryFactory.getUserFromRequest(req, store));

      Object.keys(pluckedStoreData).forEach((key) => {
        scope.setExtra(key, pluckedStoreData[key]);
      });

      Sentry.captureEvent(event);
    });
  }

  /**
   * @description You can pass an object with additional properties like "request" (express req) and "metadata" key
   * value. Debug should be used only for debugging purposes and not in production. For additional logging of
   * information use info function.
   *
   * @param {object} event
   */
  debug(event) {
    if (this.shouldNotLog || !this.configService.LOGGER_SHOULD_DEBUG) return;
    // eslint-disable-next-line
    if (EnvironmentAwareService.isDev()) return console.log(event);

    Sentry.withScope((scope) => {
      scope.setLevel(Level.Debug);

      if (event.request) {
        event.request = SentryService._createSimpleRequestObjectForDebug(event.request);
      }

      event.contexts = { metadata: event.metadata };

      Sentry.captureEvent(event);
    });
  }
}
