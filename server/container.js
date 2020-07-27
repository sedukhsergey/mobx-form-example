import * as path from 'path';
import { ConfigService, SentryService } from './services';

export default async () => {
  const configFilePath = path.resolve(`${__dirname}/../.env.${process.env.NODE_ENV}`);
  const configService = new ConfigService(configFilePath);

  const sentryService = new SentryService(configService);

  return {
    configService,
  };
};
