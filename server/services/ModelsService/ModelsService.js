import {
  Users, Accounts,
} from './models';

export default class ModelsService {
  constructor(databaseService = {}) {
    this.databaseService = databaseService;
  }
  get Users() {
    return new Users(this.databaseService);
  }
  get Accounts() {
    return new Accounts(this.databaseService);
  }
}
