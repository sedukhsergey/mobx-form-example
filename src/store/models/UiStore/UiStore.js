import {
  destroy, types,
} from 'mobx-state-tree';
import User from './User';

let id = 1;
const UiStore = types
  .model('UiStore', { users: types.map(User) })
  .actions(self => ({
    addUser(name) {
      self.users.set(
        id,
        User.create({
          name,
          id,
        })
      );
      id++;
    },
    reset() {
      destroy(self.users);
    },
    deleteUser(user) {
      destroy(user);
    },
  }));

export default UiStore;
