import * as path from 'path';
import { ConfigService } from './services';

export default async () => {
  const configFilePath = path.resolve(`${__dirname}/../.env.${process.env.NODE_ENV}`);
  const configService = new ConfigService(configFilePath);

  return {
    configService,
  };
};
