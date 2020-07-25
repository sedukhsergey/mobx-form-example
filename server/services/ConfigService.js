import * as fs from 'fs';
import * as Joi from '@hapi/joi';
import colors from 'colors';
import * as dotenv from 'dotenv';
import chalk from 'chalk';

class ConfigService {
  constructor(filePath) {
    const config = this._getLoadedConfig(filePath);
    this._envConfig = this._validateInput(config);
  }
  _getLoadedConfig(filePath) {
    const envFileVars = this._readFileVars(filePath);
    const envVars = this._readEnvVars();
    return { ...envFileVars, ...envVars };
  }

  _readFileVars(filePath) {
    if (!fs.existsSync(filePath)) {
      // eslint-disable-next-line
      console.log(chalk.yellow('.env file not found, relying on process env vars'));
      return {};
    }
    const envFileVars = dotenv.parse(fs.readFileSync(filePath));
    const fileName = filePath.substr(filePath.lastIndexOf('/') + 1);
    // eslint-disable-next-line
    console.log(chalk.cyan(`Loading configuration from ${fileName}`))

    // Omit REACT envs
    const filteredVars = Object.keys(envFileVars).reduce((acc, curr) => {
      if (curr.startsWith('REACT_APP')) return acc;
      acc[curr] = envFileVars[curr];
      return acc;
    }, {});
    return filteredVars;
  }

  _readEnvVars() {
    const envVars = Object.keys(ConfigService.VALIDATION_SCHEMA).reduce((acc, curr) => {
      if (process.env[curr] === undefined) return;
      acc[curr] = process.env[curr];
      return acc;
    }, {});
    return envVars;
  }

  _validateInput(envConfig) {
    const envVarsSchema = Joi.object(ConfigService.VALIDATION_SCHEMA);
    const { error, value: validatedEnvConfig } = envVarsSchema.validate(envConfig, {
      abortEarly: false,
    });
    if (error) {
      console.log('errord', error);
      throw new Error(colors.red(`Config validation erorr: ${error.message}`));
    }
    return validatedEnvConfig;
  }
  static get VALIDATION_SCHEMA() {
    return {
      NODE_ENV: Joi.string(),
      NODE_PATH: Joi.string(),
      PORT: Joi.number().default(3000),
      SERVER_PORT: Joi.number().default(8080),
      DB_PASSWORD: Joi.string(),
      DB_USER: Joi.string(),
      DB_API: Joi.string(),
      DB_HOST: Joi.string(),
      DB_PORT: Joi.number(),
    };
  }

  get NODE_ENV() {
    return this._envConfig.NODE_ENV;
  }

  get PORT() {
    return this._envConfig.SERVER_PORT;
  }
}

export default ConfigService;
