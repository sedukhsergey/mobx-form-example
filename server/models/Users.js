export default class Users {
  constructor(databaseService = {
  }) {
    this.databaseService = databaseService;
  }
  async find(id) {




    const sql = 'SELECT * FROM users WHERE id = $1';


    const result = await     this.databaseService.pool.query(sql, [
      id,
    ]);
    return result.rows[0];
  }

  async all() {
    const sql = 'SELECT * FROM users';
    const results = await this.databaseService.pool.query(sql);
    return results.rows;
  }

  async create(data) {
    const sql = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING id';
    const results = await this.databaseService.pool.query(sql, [
      data.name, data.email,
    ]);
    return results.rows[0];
  }

  async update(data) {
    const sql = 'UPDATE users SET name = $1, email = $2 WHERE id = $3';
    const results = await this.databaseService.pool.query(sql, [
      data.name, data.email, data.id,
    ]);
    return results.rows;
  }

  async delete(data) {
    const sql = 'DELETE FROM users WHERE id = $1';
    return await this.databaseService.pool.query(sql, [
      data,
    ]);
  }
}
