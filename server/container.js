import * as path from 'path';
import {
  ConfigService, DatabaseService, ModelsService
} from './services';

export default async () => {
  const configFilePath = path.resolve(
    `${__dirname}/../.env.${process.env.NODE_ENV}`
  );
  const configService = new ConfigService(configFilePath);
  const databaseService = new DatabaseService(configService);
  const modelsService = new ModelsService(databaseService);
  return {
    configService,
    databaseService,
    modelsService,
  };
};
