import {
  Pool
} from 'pg';

export default class DatabaseService {
  constructor(configService = {
  }) {
    this.databaseService = configService;
    this.poolSingleton = null;
  }
  get pool() {
    if (this.poolSingleton) {
      return this.poolSingleton;
    }
    this.poolSingleton = new Pool({
      user: this.databaseService.DB_USER,
      host: this.databaseService.DB_HOST,
      database: this.databaseService.DB_API,
      password: this.databaseService.DB_PASSWORD,
      port: this.databaseService.DB_PORT,
    });
    return this.poolSingleton;
  }
}
