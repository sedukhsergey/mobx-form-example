import {
  Users,
} from '../models';

export default class ModelsService {
  constructor(databaseService = {
  }) {
    this.databaseService = databaseService;
  }
  get Users() {
    return new Users(this.databaseService);
  }
}
