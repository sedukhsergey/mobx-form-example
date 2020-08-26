export default class Accounts {
  constructor(databaseService = {}) {
    this.databaseService = databaseService;
  }

  async findByEmail(email) {
    const sql = 'SELECT * FROM accounts WHERE email = $1';
    const result = await this.databaseService.pool.query(sql, [ email ]);
    return result.rows[0];
  }

  async find({
    email, password,
  }) {
    const sql = 'SELECT * FROM accounts WHERE (email = $1 AND password = $2)';
    const result = await this.databaseService.pool.query(sql, [email, password]);
    return result.rows[0];
  }

  async create({
    email, password,
  }) {
    const sql = 'INSERT INTO accounts(email, password) VALUES($1, $2) RETURNING id';
    const result = await this.databaseService.pool.query(sql, [email, password]);
    return result.rows[0];
  }

}
