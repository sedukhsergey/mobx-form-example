import * as path from 'path';

export default async () => {
  console.log('dirname', __dirname);
  console.log('process.env.', process.env);
  const configFilePath = path.resolve(`${__dirname}/../.env.${process.env.NODE_ENV}`);
  console.log('configFilePath', configFilePath);
  const configService = new ConfigService(configFilePath);

  return {
    configService,
  };
};
