import { Pool } from 'pg';

export default class DatabaseService {
  constructor(configService = {}) {
    this.configService = configService;
    this.poolSingleton = null;
  }
  get pool() {
    if (this.poolSingleton) {
      return this.poolSingleton;
    }
    this.poolSingleton = new Pool({
      user: this.configService.DB_USER,
      host: this.configService.DB_HOST,
      database: this.configService.DB_API,
      password: this.configService.DB_PASSWORD,
      port: this.configService.DB_PORT,
    });
    return this.poolSingleton;
  }
}
